import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import PrivateRoute from "./components/core/PrivateRoute";
import Masterclass from "./components/core/Masterclass/Masterclass";
import Request from "./components/core/Request";
import Courses from "./components/core/Courses";
import EventDetail from "./components/core/Masterclass/EventDetail";
import Profile from "./components/core/Profile";
import Test from "./components/core/Tests/Test";
import QuestionsAnswer from "./components/core/Tests/QuestionsAnswers";

function App() {
  return (
    <div className="w-screen min-h-screen flex flex-col font-inter">
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/login" replace />} />
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
            <Route path="/dashboard/masterclass" element={<Masterclass />} />
            <Route
              path="/dashboard/masterclass/detail"
              element={<EventDetail />}
            />

            <Route path="/dashboard/QA" element={<Test />} />
            <Route path="/dashboard/QA/test" element={<QuestionsAnswer />} />

            <Route path="/dashboard/profile" element={<Profile />} />

            <Route path="/dashboard/courses" element={<Courses />} />
            <Route path="/dashboard/request" element={<Request />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
