import "dotenv/config";
import cors from "cors";
import express from "express";
import models, { connectDb } from "./models";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDb().then(async () => {
  app.listen(process.env.PORT, () =>
    console.log(`Example App listening on port ${process.env.PORT}`)
  );
});
