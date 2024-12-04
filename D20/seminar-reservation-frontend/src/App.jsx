import CreateSeminar from "./pages/CreateSeminar";
import Dashboard from "./pages/Dashboard";
import EditSeminar from "./pages/EditSeminar";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { ProtectedRoute } from "./routes/protectedRoute";
import SignUp from "./pages/SignUp";
const App=()=>{
  return(
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/add-seminar" element={<ProtectedRoute><CreateSeminar/></ProtectedRoute>}/>
          <Route path="/edit-seminar/:id" element ={<ProtectedRoute><EditSeminar/></ProtectedRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}
export default App;