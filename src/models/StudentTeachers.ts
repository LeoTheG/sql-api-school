import { Table, Column, Model, ForeignKey } from "sequelize-typescript";
import Student from "./Student";
import Teacher from "./Teacher";

@Table
class StudentTeachers extends Model {
  @ForeignKey(() => Student)
  @Column
  StudentID!: number;

  @ForeignKey(() => Teacher)
  @Column
  TeacherID!: number;
}

export default StudentTeachers;
