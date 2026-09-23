const express = require("express");
const cors = require("cors");

const userRoutes = require("./routes/user");
const activityRoutes = require("./routes/activity");
const workoutsRoutes = require("./routes/workouts");
const sessionRoutes = require("./routes/session");
const statsRoutes = require("./routes/stats");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "gym-buddy-backend" });
});

app.use("/api/user", userRoutes);
app.use("/api/activity", activityRoutes);
app.use("/api/workouts", workoutsRoutes);
app.use("/api/session", sessionRoutes);
app.use("/api/stats", statsRoutes);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Gym Buddy API running on http://localhost:${PORT}`);
});
