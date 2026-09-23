const express=require("express");
const db=require("../data/db");
const router=express.Router();
router.get("/",(req,res)=>res.json(db.user));
router.patch("/",(req,res)=>{
  const allowed=["name","tagline","goal","weeklyTarget"];
  for(const key of allowed) if(req.body?.[key]!==undefined) db.user[key]=req.body[key];
  res.json(db.user);
});
module.exports=router;