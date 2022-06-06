// return random item from array
// Its hack and not real random function. Use lodash function in production.
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

module.exports = getRandomItem;
