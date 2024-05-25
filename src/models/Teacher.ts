import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  Unique
} from "sequelize-typescript";

@Table
class Teacher extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  TeacherID!: number;

  @Column(DataType.STRING)
  TeacherName!: string;

  @Column(DataType.STRING)
  Subject!: string;

  @Unique
  @Column(DataType.STRING)
  Email!: string;
}
export default Teacher;
