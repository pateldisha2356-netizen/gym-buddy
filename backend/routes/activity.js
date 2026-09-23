const express=require("express");
const db=require("../data/db");
const router=express.Router();
router.get("/",(req,res)=>res.json(db.activity));
router.patch("/selected-date",(req,res)=>{
  if(!db.setSelectedDate(req.body?.date)) return res.status(400).json({error:"Unknown date."});
  res.json(db.activity);
});
module.exports=router;