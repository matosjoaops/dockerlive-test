import axios from "axios";
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((resp) => {
      res.send(resp.data);
    })
    .catch((resp) => {
      res.send("Error!");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
