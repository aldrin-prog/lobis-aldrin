import { useContext } from "react";
import { useParams } from "react-router-dom"
import TeamContext from "../store/TeamContext";
import { Button } from "react-bootstrap";

const TeamDetails=()=>{
    const {teamId}=useParams();
    const {teams}=useContext(TeamContext);
    const team=teams[teamId-1];

    return (
        <div>
            <Button as="a" href="/teams" variant="primary" className="ms-3 mt-3">Back</Button>
            <h1 className="ms-3 my-3">Member Details</h1>
            <div className="p-3">
                <h2>Name: {team.name}</h2>
                <h3>Email: {team.email}</h3>
                <h4>Role: {team.role}</h4>
            </div>
        </div>
    )
}
export default TeamDetails