import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";
import UserLayout from "./layout/UserLayout";
import Login from "./pages/Login";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./pages/EditEvent";
import { AppProvider } from "./context/AppContext";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EventInformation from "./pages/EventInformation";
import EditProfile from "./pages/EditProfile";
import MyBookings from "./pages/MyBookings";
function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route
              path="/"
              element={
                <MainLayout>
                  <Landing />
                </MainLayout>
              }
            />
            <Route
              path="/events"
              element={
                <MainLayout>
                  <Events />
                </MainLayout>
              }
            />
            <Route
              path="/events/:id"
              element={
                <MainLayout>
                  <EventInformation />
                </MainLayout>
              }
            />
            <Route
              path="dashboard"
              element={
                <UserLayout>
                  <Dashboard />
                </UserLayout>
              }
            />
            <Route
              path="create-event"
              element={
                <UserLayout>
                  <AddEvent />
                </UserLayout>
              }
            />
            <Route
              path="edit-event/:id"
              element={
                <UserLayout>
                  <EditEvent />
                </UserLayout>
              }
            />
            <Route
              path="profile"
              element={
                <UserLayout>
                  <Profile />
                </UserLayout>
              }
            />
            <Route
              path="profile/edit"
              element={
                <UserLayout>
                  <EditProfile />
                </UserLayout>
              }
            />
            <Route
              path="/my-bookings"
              element={
                <UserLayout>
                  <MyBookings/>
                </UserLayout>
              }
            />
          </Routes>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
