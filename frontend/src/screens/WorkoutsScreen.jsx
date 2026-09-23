import { useEffect,useState } from "react";
import { api } from "../api";
export default function WorkoutsScreen({user,onStartWorkout}){
 const [data,setData]=useState(null),[filter,setFilter]=useState("All");
 useEffect(()=>{api.getWorkouts().then(setData)},[]);
 if(!data)return <div className="screen"><p className="screen-message">Loading training lab…</p></div>;
 const tabs=["All","Lower body","Upper body","Core","Cardio"];
 const plan=filter==="All"?data.plan:data.plan.filter(x=>x.category===filter);
 return <div className="screen">
  <header className="screen__header"><div><span className="eyebrow">TRAINING LAB</span><h1>Your workouts</h1></div><span className="level-badge">LVL {user?.level||7}</span></header>
  <div className="filter-row">{tabs.map(t=><button key={t} className={filter===t?"active":""} onClick={()=>setFilter(t)}>{t}</button>)}</div>
  <div className="workout-stack">{plan.map(w=><article key={w.id} className={`workout-modern workout-modern--${w.theme}`}>
   <div><div className="workout-modern__tag">{w.tag} · {w.difficulty}</div><h2>{w.title}</h2><p>{w.focus}</p><div className="meta-row"><span>⏱ {w.durationMins}m</span><span>🔥 {w.estimatedKcal}</span><span>◉ {w.equipment}</span></div></div>
   <button onClick={()=>onStartWorkout(w.id)}>START <span>↗</span></button>
  </article>)}</div>
  <section className="tip-card"><span>COACH NOTE</span><strong>Progressive overload beats random workouts.</strong><p>Log your sets and aim to add 1–2 reps or a little weight when your form stays clean.</p></section>
 </div>
}