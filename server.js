// Dependencies
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const TeamRouter = require("./controllers/team")


const { DATABASE_URL, SECRET, PORT } = process.env;

// create app object
const app = express();


//Middleware 

//Middleware
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use('/static', express.static('public'))

// routes

app.use('/nfl', TeamRouter)


//index
// app.get("/nfl", (req, res)=>{
//   res.render("index.ejs")
// })

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
