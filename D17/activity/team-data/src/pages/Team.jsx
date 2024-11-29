import { useContext } from "react";
import TeamContext from "../store/TeamContext";
import { Link, Outlet } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
const Team = () => {
    const {teams,setTeams} = useContext(TeamContext);
    return (
        <div>
            
            <h1 className="mt-3 ms-2">Team Data</h1>
            <ListGroup>
            {
                teams.map((item,index)=>(
                    <ListGroup.Item key={index} action href={"/teams/"+parseInt(index+1)}>
                        {item.name}
                    </ListGroup.Item>
                ))
            }
            </ListGroup>
           
        </div>
    )
}
export default Team;