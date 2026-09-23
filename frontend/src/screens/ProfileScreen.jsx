import { useState } from "react";
import { api } from "../api";
export default function ProfileScreen({user,setUser}){
 const [editing,setEditing]=useState(false),[name,setName]=useState(user?.name||"");
 const save=async()=>{const u=await api.updateUser({name});setUser(u);setEditing(false)};
 return <div className="screen">
  <header className="screen__header"><div><span className="eyebrow">YOUR SPACE</span><h1>Profile</h1></div><button className="icon-btn icon-btn--ghost">⚙</button></header>
  <section className="profile-hero"><div className="big-avatar">{(user?.name||"D")[0]}</div><h2>{user?.name||"Disha"}</h2><p>{user?.tagline||"Consistency > motivation"}</p><div className="profile-stats"><span><b>{user?.streak||12}</b>day streak</span><span><b>{user?.level||7}</b>level</span><span><b>84</b>readiness</span></div></section>
  <div className="settings-list">
   <div className="setting-row"><div><span>Goal</span><strong>{user?.goal||"Build strength"}</strong></div><span>›</span></div>
   <div className="setting-row"><div><span>Weekly target</span><strong>{user?.weeklyTarget||4} workouts</strong></div><span>›</span></div>
   <div className="setting-row"><div><span>Units</span><strong>Metric (kg, km)</strong></div><span>›</span></div>
  </div>
  {editing?<div className="edit-box"><input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name"/><button onClick={save}>Save changes</button></div>:<button className="primary-btn" onClick={()=>setEditing(true)}>Edit profile</button>}
  <section className="app-note"><span>GYM BUDDY v2</span><strong>Train together, even when you're solo.</strong><p>Built as a full-stack fitness tracker with adaptive training, session logging, analytics and buddy accountability.</p></section>
 </div>
}