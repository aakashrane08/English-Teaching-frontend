import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import PrivateRoute from "./components/core/PrivateRoute";

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
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
