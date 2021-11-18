import { Db } from "mongodb";
import { connectDB } from "./mongo";
import express from "express";
import { book, free, freeSeats, login, logout, signin, mybookings, status } from "./resolvers";
var body_parser = require('body-parser');

const run = async () => {
  const db: Db = await connectDB();
  const app = express();
  app.set("db", db);
  app.use(express.json());

  app.use((req, res, next) => {
    next();
  });
  app.get("/status", status);
  app.post("/signin", signin);
  app.post("/login", login);
  app.post("/logout", logout);
  app.get("/freeSeats", freeSeats);
  app.post("/book", book);
  app.post("/free", free);
  app.get("/mybookings", mybookings);

  await app.listen(3000);
};

try {
  run();
} catch (e) {
  console.error(e);
}
