import "dotenv/config";
// import cors from "cors";
import express from "express";
import connectDB from "./models/db";
import user from "./routes/user";
import bodyParser from "body-parser";

//mongo connection
connectDB();

const app = express();

// app.use(cors());
//Middleware
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true}));
// app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working"});
});

/**
 * Router Middleware
 * Router = /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server started at PORT ${process.env.PORT}`);
});
