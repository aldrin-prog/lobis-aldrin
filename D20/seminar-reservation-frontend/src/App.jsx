import CreateSeminar from "./pages/CreateSeminar";
import Dashboard from "./pages/Dashboard";
import EditSeminar from "./pages/EditSeminar";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { AuthProvider } from "./store/AuthContext";
import { ProtectedRoute } from "./routes/protectedRoute";
import SignUp from "./pages/SignUp";
import Layout from "./layout/Layout";
import { SeminarProvider } from "./store/SeminarContext";
const App=()=>{
  return(
    <AuthProvider>
      <SeminarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard/>
                </Layout>
              </ProtectedRoute>}/>
            <Route path="/add-seminar" element={
              <ProtectedRoute>
                <Layout>
                  <CreateSeminar/>
                </Layout>
              </ProtectedRoute>}/>
            <Route path="/edit-seminar/:id" element ={
              <ProtectedRoute>
                <Layout>
                  <EditSeminar/>
                </Layout>
              </ProtectedRoute>} />
          </Routes>
        </Router>
      </SeminarProvider>
    </AuthProvider>
  )
}
export default App;