import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Sign from "./Pages/Sign";
import LandingPage from "./Screens/LandingPage";
import { SignIn } from "@clerk/clerk-react";
import ForgetPassword from "./Pages/ForgetPassword";


function App() {
  return (
    <Routes>
      <Route>
        
        <Route path="/" element={<Login/>} />
        <Route path="/header" element={<LandingPage/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
      </Route>
    </Routes>
  );
}

export default App;
