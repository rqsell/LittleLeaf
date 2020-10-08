//Require Mongoose
const mongoose = require("mongoose");
//importing the schema

mongoose
  .connect("mongodb://localhost/movies-dev", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  //inserting our data to database
  .then(async () => {
    let response = await Goals.insertMany(goals);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
