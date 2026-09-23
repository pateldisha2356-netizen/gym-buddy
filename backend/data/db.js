const user = {
  id: "u1",
  name: "Disha",
  tagline: "Consistency > motivation",
  level: 7,
  streak: 12,
  goal: "Build strength",
  weeklyTarget: 4,
};

const today = new Date();
const iso = (d) => d.toISOString().slice(0, 10);
const dayLabel = (d) => d.toLocaleDateString("en-US", { weekday: "short" }).slice(0, 1);

const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() - (6 - i));
  return { date: iso(d), label: dayLabel(d), steps: [6200, 8400, 5100, 9100, 7300, 10200, 6840][i] };
});

const workouts = [
  {
    id: "w1", title: "Glute Forge", category: "Lower body", tag: "Strength", durationMins: 32,
    exerciseCount: 5, focus: "Glutes • Hamstrings • Core", theme: "purple",
    difficulty: "Intermediate", equipment: "Dumbbells", estimatedKcal: 220,
    exercises: [
      { name: "Goblet Squats", sets: 4, reps: "10–12", rest: 60 },
      { name: "Romanian Deadlifts", sets: 3, reps: "10–12", rest: 60 },
      { name: "Bulgarian Split Squats", sets: 3, reps: "8 each", rest: 75 },
      { name: "Hip Thrusts", sets: 4, reps: "12–15", rest: 60 },
      { name: "Dead Bug", sets: 3, reps: "10 each", rest: 45 }
    ]
  },
  {
    id: "w2", title: "Upper Pulse", category: "Upper body", tag: "Strength", durationMins: 28,
    exerciseCount: 5, focus: "Back • Shoulders • Arms", theme: "pink",
    difficulty: "Beginner", equipment: "Dumbbells", estimatedKcal: 180,
    exercises: [
      { name: "Dumbbell Rows", sets: 4, reps: "10–12", rest: 60 },
      { name: "Shoulder Press", sets: 3, reps: "10", rest: 60 },
      { name: "Incline Push Ups", sets: 3, reps: "8–12", rest: 45 },
      { name: "Bicep Curls", sets: 3, reps: "12", rest: 45 },
      { name: "Tricep Extensions", sets: 3, reps: "12", rest: 45 }
    ]
  },
  {
    id: "w3", title: "Core Reset", category: "Core", tag: "Mobility", durationMins: 18,
    exerciseCount: 6, focus: "Core • Mobility • Posture", theme: "lime",
    difficulty: "Easy", equipment: "Mat", estimatedKcal: 100,
    exercises: [
      { name: "Bird Dog", sets: 3, reps: "10 each", rest: 30 },
      { name: "Dead Bug", sets: 3, reps: "10 each", rest: 30 },
      { name: "Plank", sets: 3, reps: "30 sec", rest: 30 },
      { name: "Glute Bridge", sets: 3, reps: "15", rest: 30 },
      { name: "Cat Cow", sets: 2, reps: "10", rest: 30 },
      { name: "Child's Pose", sets: 2, reps: "45 sec", rest: 30 }
    ]
  },
  {
    id: "w4", title: "Zone 2 Walk", category: "Cardio", tag: "Recovery", durationMins: 30,
    exerciseCount: 1, focus: "Low-impact aerobic conditioning", theme: "blue",
    difficulty: "Easy", equipment: "None", estimatedKcal: 150,
    exercises: [{ name: "Brisk Walk", sets: 1, reps: "30 min", rest: 0 }]
  }
];

let activity = {
  month: today.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
  selectedDate: iso(today),
  days,
  todaysChallenge: { title: "Beat yesterday by 500 steps", completed: false },
  steps: 6840,
  stepsGoal: 8000,
  calories: { targetKcal: 1900, burnedKcal: 428, remainingKcal: 1472 },
};

let stats = {
  workoutsThisWeek: 3,
  weeklyTarget: 4,
  totalMinutes: 146,
  caloriesBurned: 982,
  streak: 12,
  volume: 6840,
  prs: [
    { lift: "Hip Thrust", value: "55 kg", change: "+5 kg" },
    { lift: "Goblet Squat", value: "22 kg", change: "+2 kg" },
    { lift: "RDL", value: "30 kg", change: "+5 kg" }
  ]
};

let history = [
  { id: "h1", workout: "Glute Forge", date: iso(new Date(Date.now()-86400000)), duration: 32, calories: 236, score: 92 },
  { id: "h2", workout: "Upper Pulse", date: iso(new Date(Date.now()-3*86400000)), duration: 28, calories: 188, score: 87 },
  { id: "h3", workout: "Core Reset", date: iso(new Date(Date.now()-4*86400000)), duration: 18, calories: 104, score: 96 }
];

let session = null;

function getWorkoutById(id) { return workouts.find(w => w.id === id) || null; }

function startSession(workoutId) {
  const workout = getWorkoutById(workoutId);
  if (!workout) return null;
  session = {
    workoutId, startedAt: Date.now(), elapsedSeconds: 0, isPaused: false,
    currentExercise: 0, currentSet: 1, totalExercises: workout.exercises.length,
    totalSets: workout.exercises.reduce((a,e) => a + e.sets, 0),
    completedSets: 0, kcalBurned: 0, restSeconds: 0
  };
  return session;
}
function tickSession(deltaSeconds=1) {
  if (!session || session.isPaused) return session;
  session.elapsedSeconds += Number(deltaSeconds) || 1;
  session.kcalBurned = Math.round(session.elapsedSeconds * 0.12);
  if (session.restSeconds > 0) session.restSeconds = Math.max(0, session.restSeconds - (Number(deltaSeconds)||1));
  return session;
}
function pauseSession(isPaused) { if (!session) return null; session.isPaused = !!isPaused; return session; }
function completeSet() {
  if (!session) return null;
  const workout = getWorkoutById(session.workoutId);
  const ex = workout.exercises[session.currentExercise];
  session.completedSets += 1;
  session.restSeconds = ex.rest || 0;
  if (session.currentSet < ex.sets) session.currentSet += 1;
  else if (session.currentExercise < workout.exercises.length - 1) {
    session.currentExercise += 1; session.currentSet = 1;
  } else {
    session.currentSet = ex.sets;
  }
  return session;
}
function endSession() {
  if (!session) return null;
  const ended = { ...session };
  const workout = getWorkoutById(session.workoutId);
  const score = Math.min(100, Math.round(70 + (ended.completedSets / ended.totalSets) * 30));
  history.unshift({ id: `h${Date.now()}`, workout: workout.title, date: iso(new Date()), duration: Math.max(1, Math.round(ended.elapsedSeconds/60)), calories: ended.kcalBurned, score });
  stats.workoutsThisWeek += 1;
  stats.totalMinutes += Math.max(1, Math.round(ended.elapsedSeconds/60));
  stats.caloriesBurned += ended.kcalBurned;
  stats.volume += ended.completedSets * 10;
  session = null;
  return { ...ended, workoutTitle: workout.title, score };
}

module.exports = {
  user, activity, workouts, stats, history,
  getWorkoutById, getSession: () => session, startSession, tickSession,
  pauseSession, completeSet, endSession,
  setSelectedDate(date) {
    if (!activity.days.some(d => d.date === date)) return false;
    activity.selectedDate = date; return true;
  }
};
