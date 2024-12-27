import { CalendarClock, CalendarCog, HomeIcon, User } from "lucide-react";

const BottomNav=()=>{
    return (<div className="btm-nav md:hidden">
        <a href="/">
          <HomeIcon/>
        </a>
        <a href="/profile">
          <User/>
        </a>
        <a href="/events">
        <CalendarCog />
        </a>
        <a href="/my-bookings">
        <CalendarClock />
        </a>
      </div>)
}
export default BottomNav;