import express from "express";
import * as dotenv from "dotenv";
import { studentsRouter, usersRouter } from "./routes/index.js";
dotenv.config();
const app = express();
const port = process.env.PORT ?? 8000;
app.use(express.json());
// routers
app.use("/users", usersRouter);
app.use("/students", studentsRouter);
app.get("/", (req, res) => {
  res.send("hello thanh 12345");
});
app.listen(port, async () => {
  console.log("listion on port : " + port);
});
