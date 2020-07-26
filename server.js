
// Require express, mongoose and logger
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


// Defining the port
const PORT = process.env.PORT || 8080;

// Tell the app to use express and use public folder for front end
const app = express();
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://userDrg:userDrg12345@ds153096.mlab.com:53096/heroku_18ktcb46", { useNewUrlParser: true });


app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));



// Listening to port defined above
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});

