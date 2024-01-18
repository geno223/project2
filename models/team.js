const mongoose= require('./connection')

const teamsSchema= new mongoose.Schema({
  
      team: String,
      superBowlChamps: Boolean,
      location: String,
      yearsAsFranchise: Number,
      image: String
})

const Team =mongoose.model("Team", teamsSchema)

module.exports = Team