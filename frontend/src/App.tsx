import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import Register from "./components/register";
import SignIn from "./components/signIn";
import { useState, useEffect } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        {authenticated ? (
          
          <Route path="/" element={<Dashboard token={localStorage.getItem("token") || ""} />} />
          
        ) : (
          <Route path="/" element={<Navigate to="/signin" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
