//i am starting a new project where i will be building a socket server
//and implement a basic chat application backend,probably i will also do
//basic frontend for the application
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
const dbconnect = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    })
    .then((conn) => {
      // console.log(conn);
      console.log("database connection successful");
    });
};

// app.listen(process.env.PORT, () => {
//   console.log(`server started at port ${process.env.PORT}...`);
// });
module.exports = dbconnect;
