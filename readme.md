# How to Build a REST API with Node JS and Express

[Simple tutorial by Dcode](https://www.youtube.com/watch?v=TcvOgwQPsSo)

Original repo: [https://github.com/dcode-youtube/simple-node-comments-api/](https://github.com/dcode-youtube/simple-node-comments-api/)

API usage:

```txt
GET http://localhost:3000/outfit

GET by id http://localhost:3000/comments/:id
(ID generated by uuid, example "b534c13d-66c6-4549-8ab7-348105156e7d")

POST http://localhost:3000/comments
    +
JSON Body:
{
  "content": "Some comment text"
}
```
