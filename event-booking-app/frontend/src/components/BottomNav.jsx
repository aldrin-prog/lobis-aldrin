import { CalendarCog, HomeIcon, User } from "lucide-react";

const BottomNav=()=>{
    return (<div className="btm-nav md:hidden">
        <button>
          <HomeIcon/>
        </button>
        <button>
          <User/>
        </button>
        <button>
        <CalendarCog />
        </button>
      </div>)
}
export default BottomNav;