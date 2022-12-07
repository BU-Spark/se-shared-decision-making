import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import React from "react";
// import FooterBar from './components/Footer/FooterBar'
// import Welcome from './pages/Welcome';
import NavBar from "./components/Navbar/NavBar";
import Drop from "./components/DropDown/Drop";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import MyStuff from "./pages/MyStuff";
import MyValues from "./pages/MyValues";
import MyChoices from "./pages/MyChoices";
import { BrowserRouter } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/MyChoices" element={<MyChoices />} />
          <Route path="/MyStuff" element={<MyStuff />} />
          <Route path="/MyValues" element={<MyValues />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Main;
