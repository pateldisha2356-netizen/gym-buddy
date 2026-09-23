const express=require("express");
const db=require("../data/db");
const router=express.Router();
router.get("/",(req,res)=>{
  const week=Math.min(100,Math.round((db.stats.workoutsThisWeek/db.stats.weeklyTarget)*100));
  res.json({...db.stats, weeklyPct:week, recoveryScore:84, consistencyScore:91,
    insight:"Your lower-body sessions are trending up. Keep one recovery day between hard leg sessions."});
});
module.exports=router;