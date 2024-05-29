# What Is This?

This project shows how one can create and use a sql database with node.js.

Web server through express

Database through postgres, provided by docker through docker-compose

ORM through sequelize

Using typescript

## Setup

`npm run install`

Create a `.env` file in the root directory with the following content:

```
DB_USER=myuser
DB_PASSWORD=mypassword
DB_NAME=mydatabase
```

## Running the project

1. Run `docker-compose up` to start the database
2. Run `npm run dev` to start the server

## Running scripts / SQL commands

`npm run sync` # Sync the database with the models, creating the tables

`npm run insertRecords` # Insert records into the database

## Possible improvements

- Using a migration tool to manage the database schema instead of using the `sync` script
- Use kysely for SQL queries instead of sequelize
- Use fastify instead of express

## Browser view

Navigate to `http://localhost:3000/students` to query the database for students

Example output of query:

```
[
  {
    "StudentID": 1,
    "StudentName": "Student One",
    "DateOfBirth": "2005-05-01T00:00:00.000Z",
    "Gender": "M                                                                                                                                                                                                                                                              ",
    "Email": "student1@example.com",
    "createdAt": "2024-05-25T19:13:49.915Z",
    "updatedAt": "2024-05-25T19:13:49.915Z"
  },
  {
    "StudentID": 2,
    "StudentName": "Student Two",
    "DateOfBirth": "2005-06-01T00:00:00.000Z",
    "Gender": "F                                                                                                                                                                                                                                                              ",
    "Email": "student2@example.com",
    "createdAt": "2024-05-25T19:13:49.915Z",
    "updatedAt": "2024-05-25T19:13:49.915Z"
  },
  {
    "StudentID": 3,
    "StudentName": "Student Three",
    "DateOfBirth": "2005-07-01T00:00:00.000Z",
    "Gender": "M                                                                                                                                                                                                                                                              ",
    "Email": "student3@example.com",
    "createdAt": "2024-05-25T19:13:49.916Z",
    "updatedAt": "2024-05-25T19:13:49.916Z"
  },
  {
    "StudentID": 4,
    "StudentName": "Student Four",
    "DateOfBirth": "2005-08-01T00:00:00.000Z",
    "Gender": "F                                                                                                                                                                                                                                                              ",
    "Email": "student4@example.com",
    "createdAt": "2024-05-25T19:13:49.916Z",
    "updatedAt": "2024-05-25T19:13:49.916Z"
  },
  {
    "StudentID": 5,
    "StudentName": "Student Five",
    "DateOfBirth": "2005-09-01T00:00:00.000Z",
    "Gender": "M                                                                                                                                                                                                                                                              ",
    "Email": "student5@example.com",
    "createdAt": "2024-05-25T19:13:49.916Z",
    "updatedAt": "2024-05-25T19:13:49.916Z"
  }
]
```
