import { configDotenv } from "dotenv";
configDotenv();
import { sequelize } from "../db";

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error creating database & tables:", error);
  });
