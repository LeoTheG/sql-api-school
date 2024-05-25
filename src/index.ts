import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "./db";
import Student from "./models/Student";

const port = 3000;

const app = express();
app.use(express.json());

app.get("/students", async (req, res) => {
  try {
    const result = await Student.findAll();
    res.send(result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error querying database");
  }
});

const main = async () => {
  await sequelize.sync();

  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
};

main();
