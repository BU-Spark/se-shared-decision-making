import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import { VscArrowRight } from "react-icons/vsc";
import "./pageStyle/Welcome.css";
import React from "react";

const Welcome = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/Home");
  };

  /* <img
              src="images/logo.png"
              alt="Corner Store Logo"
              className="logo-img"
              width="50"
              height="50"
            /> */

  return (
    <div>
      <div>
        <div className="allWelcome">
          <p>Pick one to continue</p>

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Welcome <VscArrowRight />
            </h1>
          </button>
          <p>View the site in English</p>

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Bienvenidos <VscArrowRight />
            </h1>
          </button>
          <p>Ver el sitio en español </p>

          <button className="Welcome" onClick={navigateHome}>
            <h1>
              Akeyi <VscArrowRight />
            </h1>
          </button>
          <p>Gade sit la nan kreyòl ayisyen</p>

          <div className="skip">
            <button className="skip" onClick={navigateHome}>
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
