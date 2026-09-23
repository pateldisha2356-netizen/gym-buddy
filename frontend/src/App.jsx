import { useEffect, useState } from "react";
import { api } from "./api";
import ActivityScreen from "./screens/ActivityScreen";
import WorkoutsScreen from "./screens/WorkoutsScreen";
import WorkoutSessionScreen from "./screens/WorkoutSessionScreen";
import StatsScreen from "./screens/StatsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BottomNav from "./components/BottomNav";

export default function App(){
  const [tab,setTab]=useState("home");
  const [user,setUser]=useState(null);
  const [activeWorkoutId,setActiveWorkoutId]=useState(null);
  const [refresh,setRefresh]=useState(0);

  useEffect(()=>{api.getUser().then(setUser).catch(console.error)},[]);
  const startWorkout=id=>setActiveWorkoutId(id);
  const finishWorkout=()=>{setActiveWorkoutId(null);setRefresh(x=>x+1);setTab("home")};

  if(activeWorkoutId) return <div className="app-shell"><div className="phone"><div className="phone__screen"><WorkoutSessionScreen workoutId={activeWorkoutId} onExit={finishWorkout}/></div></div></div>;

  return <div className="app-shell">
    <div className="phone">
      <div className="phone__notch"/>
      <div className="phone__screen">
        {tab==="home" && <ActivityScreen user={user} refresh={refresh} onStartWorkout={startWorkout}/>}
        {tab==="workouts" && <WorkoutsScreen user={user} onStartWorkout={startWorkout}/>}
        {tab==="stats" && <StatsScreen refresh={refresh}/>}
        {tab==="profile" && <ProfileScreen user={user} setUser={setUser}/>}
        <BottomNav active={tab} onChange={setTab}/>
      </div>
    </div>
  </div>
}