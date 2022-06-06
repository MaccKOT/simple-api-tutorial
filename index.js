const fs = require('fs/promises');
const express = require('express');
const cors = require('cors');
const getRandomItem = require('./utils/getRandom');
const { v4: uuid } = require('uuid');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const STORE = {
  tops: ['Black', 'White', 'Orange', 'Navy'],
  jeans: ['Grey', 'Dark Grey', 'Black', 'Navy'],
  shoes: ['White', 'Grey', 'Black'],
};

app.get('/outfit', (req, res) => {
  return res.json({
    // _.sample return random item from collection
    top: getRandomItem(STORE.tops),
    jeans: getRandomItem(STORE.jeans),
    shoes: getRandomItem(STORE.shoes),
  });
});

app.get('/comments/:id', async (req, res) => {
  const id = req.params.id;
  let content;

  try {
    content = await fs.readFile(`data/comments/${id}.txt`, 'utf-8');
  } catch (err) {
    return res.sendStatus(404);
  }

  res.json({
    content: content,
  });
});

app.post('/comments', async (req, res) => {
  const id = uuid();
  const content = req.body.content;

  if (!content) {
    return res.sendStatus(400);
  }

  await fs.mkdir('data/comments', { recursive: true });
  await fs.writeFile(`data/comments/${id}.txt`, content);

  res.status(201).json({
    id: id,
  });
});

// !TODO: make endpoints for update or delete comments by id

app.listen(PORT, () =>
  console.log(`API Server is running at http://localhost:${PORT}/ ...`)
);
