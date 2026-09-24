# 🏋️ Gym Buddy — Adaptive Fitness Platform

> A full-stack fitness companion that helps users decide **what to train today**, track workouts in real time, and understand their training progress.

Gym Buddy is designed to be more than a basic workout tracker. Instead of making users search through a large exercise library, it combines readiness, training history and workout goals to provide a more personalized training experience.

---

## ✨ Key Features

### 🧠 Daily Readiness Score
A simple readiness system evaluates recent activity and recovery information to provide a daily training recommendation.

### ⚡ Adaptive Workout Pick
The dashboard recommends a suitable workout instead of forcing users to browse through the entire workout library.

### 🏋️ Live Workout Mode
Track a workout while training with:

- Exercise progression
- Set completion
- Workout timer
- Pause / resume
- Rest countdown
- Estimated calories burned

### 🔬 Training Lab
Explore workouts based on training goals and categories such as:

- Strength
- Upper Body
- Lower Body
- Core
- Cardio

### 📊 Progress Analytics

Track important training metrics including:

- Weekly training target
- Consistency score
- Workout duration
- Personal records
- Recent workout sessions

### 👥 Buddy Pulse
A lightweight social accountability feature designed to make fitness feel more interactive.

Users can see activity and encourage each other through workout interactions.

### 👤 Profile Management
Users can view and update their fitness profile through the backend API.

---

# 🖥️ Application Architecture

```text
                    ┌──────────────────────┐
                    │      React + Vite    │
                    │      Frontend        │
                    └──────────┬───────────┘
                               │
                               │ REST API
                               ▼
                    ┌──────────────────────┐
                    │    Node.js + Express │
                    │       Backend        │
                    └──────────┬───────────┘
                               │
                    ┌──────────┴───────────┐
                    │                      │
              User Data              Workout Data
                    │                      │
                    └──────────┬───────────┘
                               │
                         Service Layer