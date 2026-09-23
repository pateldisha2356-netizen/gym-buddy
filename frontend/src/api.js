const BASE="/api";
async function request(path,options={}) {
  const res=await fetch(`${BASE}${path}`,{headers:{"Content-Type":"application/json"},...options});
  if(!res.ok){const b=await res.json().catch(()=>({}));throw new Error(b.error||`Request failed: ${res.status}`);}
  return res.status===204?null:res.json();
}
export const api={
 getUser:()=>request("/user"),
 updateUser:(data)=>request("/user",{method:"PATCH",body:JSON.stringify(data)}),
 getActivity:()=>request("/activity"),
 selectDate:(date)=>request("/activity/selected-date",{method:"PATCH",body:JSON.stringify({date})}),
 getWorkouts:()=>request("/workouts"),
 getWorkout:(id)=>request(`/workouts/${id}`),
 getStats:()=>request("/stats"),
 getHistory:()=>request("/workouts/history"),
 getSession:()=>request("/session"),
 startSession:(workoutId)=>request("/session/start",{method:"POST",body:JSON.stringify({workoutId})}),
 tick:(seconds=1)=>request("/session/tick",{method:"POST",body:JSON.stringify({deltaSeconds:seconds})}),
 pause:(isPaused)=>request("/session/pause",{method:"POST",body:JSON.stringify({isPaused})}),
 completeSet:()=>request("/session/complete-set",{method:"POST"}),
 endSession:()=>request("/session/end",{method:"POST"})
};