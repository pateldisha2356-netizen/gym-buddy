const express = require("express");
const db = require("../data/db");
const router = express.Router();

router.get("/", (req,res) => res.json(db.getSession()));
router.post("/start", (req,res) => {
  const s = db.startSession(req.body?.workoutId);
  if (!s) return res.status(404).json({error:"Workout not found."});
  res.status(201).json(s);
});
router.post("/tick", (req,res) => {
  const s = db.tickSession(req.body?.deltaSeconds ?? 1);
  if (!s) return res.status(404).json({error:"No active session."});
  res.json(s);
});
router.post("/pause", (req,res) => {
  const s = db.pauseSession(req.body?.isPaused);
  if (!s) return res.status(404).json({error:"No active session."});
  res.json(s);
});
router.post("/complete-set", (req,res) => {
  const s = db.completeSet();
  if (!s) return res.status(404).json({error:"No active session."});
  res.json(s);
});
router.post("/end", (req,res) => {
  const summary = db.endSession();
  if (!summary) return res.status(404).json({error:"No active session."});
  res.json({summary});
});
module.exports = router;
