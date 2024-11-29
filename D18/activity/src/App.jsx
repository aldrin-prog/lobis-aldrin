import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AppNavbar from "./components/AppNavbar"
function App() {

  return (
    <>
      <Router>
        <AppNavbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
