import {useEffect,useRef,useState} from "react";
import {api} from "../api";
function clock(s){return `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`}
export default function WorkoutSessionScreen({workoutId,onExit}){
 const [w,setW]=useState(null),[s,setS]=useState(null),[busy,setBusy]=useState(false),timer=useRef(null);
 useEffect(()=>{Promise.all([api.getWorkout(workoutId),api.startSession(workoutId)]).then(([a,b])=>{setW(a);setS(b)});return()=>{if(timer.current)clearInterval(timer.current)}},[workoutId]);
 useEffect(()=>{if(!s)return;clearInterval(timer.current);timer.current=setInterval(()=>{if(!s.isPaused)api.tick(1).then(setS).catch(()=>{})},1000);return()=>clearInterval(timer.current)},[s?.isPaused]);
 if(!w||!s)return <div className="session-screen session-screen--empty"><p>Preparing your session…</p></div>;
 const ex=w.exercises[s.currentExercise];
 const done=Math.round((s.completedSets/s.totalSets)*100);
 const finish=async()=>{setBusy(true);await api.endSession();setBusy(false);onExit()};
 const complete=async()=>{setBusy(true);const n=await api.completeSet();setS(n);setBusy(false)};
 return <div className="session-screen">
  <div className="session-glow"/>
  <div className="session-top"><button onClick={onExit}>← Exit</button><span>WORKOUT {s.currentExercise+1}/{w.exercises.length}</span></div>
  <div className="session-main"><span className="eyebrow">NOW PERFORMING</span><h1>{ex.name}</h1><div className="exercise-chip">{ex.reps} reps · {ex.rest}s rest</div><div className="session-timer">{clock(s.elapsedSeconds)}</div><div className="set-indicator"><div className="set-track"><i style={{width:`${done}%`}}/></div><span>{s.completedSets}/{s.totalSets} sets</span></div></div>
  <div className="session-panel"><div className="session-panel__top"><div><span>CALORIES</span><strong>{s.kcalBurned}</strong></div><div><span>CURRENT SET</span><strong>{s.currentSet}/{ex.sets}</strong></div><button onClick={()=>api.pause(!s.isPaused).then(setS)}>{s.isPaused?"▶":"Ⅱ"}</button></div>{s.restSeconds>0&&<div className="rest-banner">REST · {s.restSeconds}s</div>}<button className="complete-set" disabled={busy||s.completedSets>=s.totalSets} onClick={complete}>{s.completedSets>=s.totalSets?"All sets complete ✓":"Complete set →"}</button><button className="finish-btn" disabled={busy} onClick={finish}>Finish workout</button></div>
 </div>
}