import Student from "./models/Student";
import StudentTeachers from "./models/StudentTeachers";
import Teacher from "./models/Teacher";
import { Pool } from "pg";
import { Sequelize } from "sequelize-typescript";

export const pool = new Pool({
  user: process.env.DB_USER,
  host: "localhost",
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432
});

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  dialect: "postgres",
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: "localhost",
  models: [Student, Teacher, StudentTeachers]
  // logging: (msg) => {
  //   console.log(msg);
  //   console.trace(); // This will print the stack trace
  // }
});

Student.belongsToMany(Teacher, {
  through: StudentTeachers,
  foreignKey: "StudentID",
  otherKey: "TeacherID"
});
Teacher.belongsToMany(Student, {
  through: StudentTeachers,
  foreignKey: "TeacherID",
  otherKey: "StudentID"
});
