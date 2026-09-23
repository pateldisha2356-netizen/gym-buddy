# Gym Buddy — Adaptive Fitness Tracker

A portfolio-ready full-stack fitness app built with React + Vite and Node.js + Express.

## What makes it different

- **Readiness score** — turns recovery + recent consistency into a simple daily training recommendation.
- **Adaptive Pick** — the home screen recommends a workout instead of making the user hunt through a library.
- **Live workout mode** — real timer, pause/resume, exercise progression, set completion, rest countdown and calorie estimate.
- **Training Lab** — filter workouts by training goal/category.
- **Progress analytics** — consistency score, weekly target, personal records and recent sessions.
- **Buddy Pulse** — lightweight social accountability concept to make the app feel like a gym companion, not another tracker.
- **Editable profile** — profile data is served and updated through the REST API.
- **REST API architecture** — separate routes for user, activity, workouts, sessions and stats.

## Tech stack

**Frontend:** React 18, Vite, CSS  
**Backend:** Node.js, Express, REST API  
**Architecture:** component-based React UI + API layer + backend data/service layer

## Run locally

### Backend
```bash
cd backend
npm install
npm start
```
Runs on `http://localhost:4000`.

### Frontend
In another terminal:
```bash
cd frontend
npm install
npm run dev
```
Runs on `http://localhost:5173`.

The Vite config proxies `/api` to the backend.

## CV bullet

> Built a full-stack adaptive fitness tracking platform using React, Vite, Node.js and Express, featuring live workout sessions, set/rest tracking, personalized readiness scoring, progress analytics, personal records and RESTful APIs.

## Next upgrades for production

- MongoDB/PostgreSQL persistence + authentication/JWT
- Real wearable/step integrations
- Exercise video library
- Real-time buddy matching with WebSockets
- Cloud deployment and automated tests
