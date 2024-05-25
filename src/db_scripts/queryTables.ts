configDotenv();
import { configDotenv } from "dotenv";
import { sequelize } from "../db";

async function queryTables() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    const [results, metadata] = await sequelize.query(
      "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'"
    );

    console.log("Tables:");
    results.forEach((table: any) => console.log(table.table_name));
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  } finally {
    await sequelize.close();
  }
}

queryTables();
