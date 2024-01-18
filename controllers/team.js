const express = require("express");
const Team = require("../models/team");

const router = express.Router()

//index-get
router.get("/", async (req, res) => {
    const teams= await Team.find({});
    console.log(teams)
    res.render("index.ejs", {teams});
  });
  
  module.exports = router