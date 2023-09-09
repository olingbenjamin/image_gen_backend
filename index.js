import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();
const app = express();
app.use(cors);
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from DALL-E");
});

async function startServer() {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, function () {
      console.log("Server is running at port 8080");
    });
  } catch (e) {
    console.log(e);
  }
}

startServer();
