import express from "express";
import { connectDb } from "./db/config.js";

const app = express();
const PORT = 3300;
app.use(express.json());
connectDb();

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`http://localhost:${PORT}`);
  } else {
    console.log("error occurred", error);
  }
});
