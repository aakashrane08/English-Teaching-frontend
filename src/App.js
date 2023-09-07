import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import PrivateRoute from "./components/core/PrivateRoute";
import Masterclass from "./components/core/Masterclass";
import Request from "./components/core/Request";
import Courses from "./components/core/Courses";
import EventDetail from "./components/core/EventDetail";
import Profile from "./components/core/Profile";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/login" replace/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          >
            <Route path="/dashboard/masterclass" element={<Masterclass/>} />
            <Route path="/dashboard/masterclass/detail" element={<EventDetail/>} />
            <Route path="/dashboard/courses" element={<Courses/>} />
            <Route path="/dashboard/request" element={<Request/>} />
            <Route path="/dashboard/profile" element={<Profile/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
