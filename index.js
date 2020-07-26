
// Require express, mongoose and logger
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");


// Defining the port
const PORT = 8080;

// Tell the app to use express and use public folder for front end
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));


// Listening to port defined above
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});
