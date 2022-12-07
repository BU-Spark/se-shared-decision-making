import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import MyChoices from "../../pages/MyChoices";
import MyStuff from "../../pages/MyStuff";
import MyValues from "../../pages/MyValues";
import Home from "../../pages/Home";
import Logo from "./logoNav.png";
import "./Nav.css";
import Drop from "../DropDown/Drop";

export default function NavBar() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Home");
  };

  const navigateMyChoices = () => {
    navigate("/MyChoices");
  };

  const navigateMyValues = () => {
    navigate("/MyValues");
  };

  const navigateMyStuff = () => {
    navigate("/MyStuff");
  };

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
      <div className="nav">
        <div id="menu1">
          <img className="nav" src={Logo} alt="Logo" />
        </div>

        <div id="menu2">
          <ul className="nav">
            <li className="nav">
              <button
                className="nav"
                onClick={handleClick}
                style={{ backgroundColor: active ? "black" : "white" }}
              >
                Home
              </button>
            </li>
            <li className="nav">
              <button className="nav" onClick={() => navigate("/MyValues")}>
                My Choices
              </button>
            </li>
            <li className="nav">
              <button className="nav" onClick={navigateMyValues}>
                My Values
              </button>
            </li>
            <li className="nav">
              <button className="nav" onClick={navigateMyStuff}>
                My Stuff
              </button>
            </li>
          </ul>
        </div>

        <div id="menu3">
          <Drop />
          <div></div>
        </div>

        <Routes>
          <Route path="/MyChoices" element={<MyChoices />} />
          <Route path="/MyStuff" element={<MyStuff />} />
          <Route path="/MyValues" element={<MyValues />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
