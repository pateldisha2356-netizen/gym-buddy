import { useEffect,useState } from "react";
import { api } from "../api";
import { BellIcon,FootIcon,ChevronLeft,ChevronRight,ArrowUpRight } from "../components/Icons";

export default function ActivityScreen({user,refresh,onStartWorkout}){
 const [data,setData]=useState(null),[workouts,setWorkouts]=useState(null),[loading,setLoading]=useState(true);
 useEffect(()=>{Promise.all([api.getActivity(),api.getWorkouts()]).then(([a,w])=>{setData(a);setWorkouts(w)}).finally(()=>setLoading(false))},[refresh]);
 if(loading) return <div className="screen"><p className="screen-message">Building your day…</p></div>;
 const pct=Math.min(100,Math.round(data.steps/data.stepsGoal*100));
 const plan=workouts?.plan?.[0];
 return <div className="screen">
  <header className="screen__header">
   <div><span className="eyebrow">WEDNESDAY · SEPT 23</span><h1>Hey {user?.name||"Disha"} 👋</h1></div>
   <button className="icon-btn icon-btn--ghost"><BellIcon/></button>
  </header>

  <section className="hero-card">
    <div className="hero-card__top"><span>READINESS</span><strong>84</strong></div>
    <h2>Train smart.<br/><em>Not just hard.</em></h2>
    <p>Your body is ready for a strength session today.</p>
    <div className="hero-card__footer"><span>⚡ 12 day streak</span><span>Recovery 84%</span></div>
  </section>

  <div className="section-head"><h3>Today's pulse</h3><span className="live-dot">● LIVE</span></div>
  <div className="metric-grid">
    <div className="metric-card metric-card--lime"><span>STEPS</span><strong>{data.steps.toLocaleString()}</strong><small>{pct}% of {data.stepsGoal.toLocaleString()}</small><div className="progress"><i style={{width:`${pct}%`}}/></div></div>
    <div className="metric-card metric-card--violet"><span>CALORIES</span><strong>{data.calories.burnedKcal}</strong><small>kcal burned</small><div className="mini-ring"><b>{Math.round(data.calories.burnedKcal/data.calories.targetKcal*100)}%</b></div></div>
  </div>

  <section className="buddy-card">
    <div className="buddy-avatar">M</div>
    <div><span className="eyebrow">BUDDY PULSE</span><strong>Maya finished her workout</strong><p>Send a high-five and keep your streak alive.</p></div>
    <button className="round-action">✦</button>
  </section>

  <div className="section-head"><h3>Adaptive pick</h3><button className="link-btn" onClick={()=>onStartWorkout(plan.id)}>Start <ArrowUpRight/></button></div>
  {plan && <button className={`adaptive-card adaptive-card--${plan.theme}`} onClick={()=>onStartWorkout(plan.id)}>
    <div><span className="eyebrow">RECOMMENDED FOR YOU</span><h2>{plan.title}</h2><p>{plan.focus}</p><div className="meta-row"><span>⏱ {plan.durationMins} min</span><span>🔥 ~{plan.estimatedKcal} kcal</span><span>● {plan.difficulty}</span></div></div><div className="play-orb">▶</div>
  </button>}

  <div className="section-head"><h3>Weekly target</h3><span>{Math.min(100,Math.round((3/4)*100))}%</span></div>
  <div className="week-dots">{["M","T","W","T","F","S","S"].map((d,i)=><div key={i} className={`week-day ${i<3?"done":""} ${i===2?"today":""}`}><span>{d}</span><i>{i<3?"✓":""}</i></div>)}</div>
 </div>
}