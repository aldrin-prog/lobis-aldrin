import NavBar from "./components/NavBar"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Team from "./pages/Team"
import { createContext, useState } from "react"
import TeamContext from "./store/TeamContext"
import TeamDetails from "./pages/TeamDetails"
function App() {
  const [teams,setTeams]=useState([
    {
      name:'John Doe',
      email:'johndoe@email.com',
      role:'setter'
    },
    {
      name:'Ethan Smith',
      email:'ethansmith@email.com',
      role:'striker'
    }
  ])

  return (
    <>
      <TeamContext.Provider value={{teams,setTeams}}>
        <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="teams" element={<Team/>}/>
              <Route path="/teams/:teamId" element={<TeamDetails/>}/>
            </Routes>
        </Router>
      </TeamContext.Provider>
    </>
  )
}

export default App
