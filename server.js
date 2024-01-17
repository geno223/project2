// Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const team = require('./models/db.js'); 
const nflTeams = require("./models/db.js");

const { DATABASE_URL, SECRET, PORT } = process.env;

// database connection
mongoose.connect(DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

// create app object
const app = express();

// routes

//index
app.get("/nfl", (req, res)=>{
  res.send(nflTeams)
})

//new-get



//destroy-delete



//update-put




//create-post




//edit-get




//show- get







// turn on the server (the listener)
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
