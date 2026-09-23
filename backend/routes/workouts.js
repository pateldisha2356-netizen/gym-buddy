const express=require("express");
const db=require("../data/db");
const router=express.Router();
router.get("/",(req,res)=>res.json({progress:{
  title:"Adaptive plan", tag:"For you", durationMins:32, caloriesBurned:538,
  completionPct:Math.round((db.stats.workoutsThisWeek/db.stats.weeklyTarget)*100)
}, plan:db.workouts}));
router.get("/history",(req,res)=>res.json(db.history));
router.get("/:id",(req,res)=>{
  const w=db.getWorkoutById(req.params.id);
  if(!w) return res.status(404).json({error:"Workout not found."});
  res.json(w);
});
module.exports=router;