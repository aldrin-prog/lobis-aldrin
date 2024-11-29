import { useContext } from "react";
import TeamContext from "../store/TeamContext";
import { Link, Outlet } from "react-router-dom";
const Team = () => {
    const {teams,setTeams} = useContext(TeamContext);
    return (
        <div>
            <h1 className="mt-3 ms-2">Team Data</h1>
            {
                teams.map((item,index)=>(
                    <div key={index} className="p-2 d-flex flex-column gap-0">
                        <Link to={"/teams/"+index}>{item.name}</Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Team;