import { useEffect,useState } from "react";
import { api } from "../api";
export default function StatsScreen({refresh}){
 const [s,setS]=useState(null),[history,setHistory]=useState([]);
 useEffect(()=>{Promise.all([api.getStats(),api.getHistory()]).then(([a,h])=>{setS(a);setHistory(h)})},[refresh]);
 if(!s)return <div className="screen"><p className="screen-message">Crunching your progress…</p></div>;
 return <div className="screen">
  <header className="screen__header"><div><span className="eyebrow">YOUR DATA</span><h1>Insights</h1></div><span className="score-chip">A+ consistency</span></header>
  <div className="insight-hero"><div className="score-circle"><strong>{s.consistencyScore}</strong><span>/100</span></div><div><span className="eyebrow">CONSISTENCY SCORE</span><h2>You're building a habit.</h2><p>{s.insight}</p></div></div>
  <div className="metric-grid"><div className="metric-card metric-card--dark"><span>WORKOUTS</span><strong>{s.workoutsThisWeek}/{s.weeklyTarget}</strong><small>this week</small><div className="bar-dots">{[1,2,3,4].map(i=><i key={i} className={i<=s.workoutsThisWeek?"on":""}/>)}</div></div><div className="metric-card metric-card--dark"><span>TRAINING TIME</span><strong>{s.totalMinutes}<small> min</small></strong><small>total this week</small></div></div>
  <section><div className="section-head"><h3>Personal records</h3><span>↗ trending</span></div><div className="pr-list">{s.prs.map(p=><div className="pr-row" key={p.lift}><div><strong>{p.lift}</strong><span>Personal best</span></div><b>{p.value}</b><em>{p.change}</em></div>)}</div></section>
  <section><div className="section-head"><h3>Recent sessions</h3><span>{history.length} logged</span></div><div className="history-list">{history.slice(0,4).map(h=><div className="history-row" key={h.id}><div className="history-icon">✓</div><div><strong>{h.workout}</strong><span>{h.date} · {h.duration} min</span></div><b>{h.score}</b></div>)}</div></section>
 </div>
}