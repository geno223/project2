const express = require("express");
const Team = require("../models/team");

const router = express.Router()

//index-get
 router.get("/", async (req, res) => {
     const teams= await Team.find({});
     console.log(teams)
     res.render("index.ejs", {teams});
  });
//new-get
router.get("/new", (req, res) => {
    res.render("new.ejs");
  })

  //create- post
router.post("/", async (req, res) => {
    req.body.superBowlChamps = req.body.superBowlChamps === "on" ? true : false;
    await Team.create(req.body)
    res.redirect("/nfl")
  });
  //update-put
router.put("/:id", async (req, res)=>{
    const id = req.params.id
    req.body.superBowlChamps = req.body.superBowlChamps === "on" ? true : false;
    const animal = await Team.findByIdAndUpdate(id, req.body)
    res.redirect(`/nfl/${id}`)
})

//delete
router.delete("/:id", async (req, res) =>{
    const team = await Team.findByIdAndDelete(req.params.id)
    res.redirect("/nfl")
})

//edit- get
router.get("/:id/edit", async(req, res)=>{
    const id = req.params.id
    const team = await Team.findById(id)
    res.render("edit.ejs", {team})
})
  //show

  router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const teams = await Team.findById(id)
    res.render("show.ejs", { teams })
  })
  module.exports = router