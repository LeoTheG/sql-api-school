import { config } from "dotenv";
config();

import { sequelize } from "../db";
import Student from "../models/Student";
import Teacher from "../models/Teacher";
import StudentTeachers from "../models/StudentTeachers";

async function insertData() {
  // await sequelize.sync({ force: true });
  const transaction = await sequelize.transaction();

  try {
    const teacher = await Teacher.create(
      {
        TeacherName: "Mr. Gomez",
        Subject: "Mathematics",
        Email: "gomez@example.com"
      },
      { transaction }
    );

    const students = await Promise.all([
      Student.create(
        {
          StudentName: "Student One",
          DateOfBirth: "2005-05-01",
          Gender: "M",
          Email: "student1@example.com"
        },
        { transaction }
      ),
      Student.create(
        {
          StudentName: "Student Two",
          DateOfBirth: "2005-06-01",
          Gender: "F",
          Email: "student2@example.com"
        },
        { transaction }
      ),
      Student.create(
        {
          StudentName: "Student Three",
          DateOfBirth: "2005-07-01",
          Gender: "M",
          Email: "student3@example.com"
        },
        { transaction }
      ),
      Student.create(
        {
          StudentName: "Student Four",
          DateOfBirth: "2005-08-01",
          Gender: "F",
          Email: "student4@example.com"
        },
        { transaction }
      ),
      Student.create(
        {
          StudentName: "Student Five",
          DateOfBirth: "2005-09-01",
          Gender: "M",
          Email: "student5@example.com"
        },
        { transaction }
      )
    ]);

    await Promise.all(
      students.map((student) =>
        StudentTeachers.create(
          {
            StudentID: student.StudentID,
            TeacherID: teacher.TeacherID
          },
          { transaction }
        )
      )
    );

    await transaction.commit();
    console.log("Sample data inserted successfully!");
  } catch (error) {
    await transaction.rollback();
    console.error("Error inserting data:", error);
  }
}

insertData().catch((error) => {
  console.error("Error in transaction:", error);
});
