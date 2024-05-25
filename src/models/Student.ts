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
class Student extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  StudentID!: number;

  @Column(DataType.STRING)
  StudentName!: string;

  @Column(DataType.DATE)
  DateOfBirth!: Date;

  @Column(DataType.CHAR)
  Gender!: string;

  @Unique
  @Column(DataType.STRING)
  Email!: string;
}

export default Student;
