import { HomeIcon, ChartIcon, DumbbellIcon, UserIcon } from "./Icons";
const TABS=[["home",HomeIcon,"Home"],["stats",ChartIcon,"Insights"],["workouts",DumbbellIcon,"Train"],["profile",UserIcon,"You"]];
export default function BottomNav({active,onChange}){
 return <nav className="bottom-nav">{TABS.map(([key,Icon,label])=><button key={key} className={`bottom-nav__item ${active===key?"is-active":""}`} onClick={()=>onChange(key)}><Icon/><span>{label}</span></button>)}</nav>
}