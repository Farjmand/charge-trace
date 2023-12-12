import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import AddVehicle from "./components/AddVehicles";

import "./App.css";



function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/addVehicle" element={<AddVehicle />} />
    </Routes>
    </Router>
  );
}

export default App;
