import express from "express";
import cors from "cors";
import { posts } from "./dataPost.js";
import { users } from "./dataUser.js";

const app = express();
app.use(express());
app.use(cors());

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});
app.get("/users", (req, res) => {
  res.status(200).json(users);
});
app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id === Number(userId));
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send(" nothing find ");
  }
});

app.listen(3020, () => {
  console.log("everything  working now ");
});
