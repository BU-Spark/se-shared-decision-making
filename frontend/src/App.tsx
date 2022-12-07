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
import { createTheme, ThemeProvider } from "@mui/material";

const majorTheme = createTheme({
  palette: {
    primary: {
      main: '#0c3a25',
      contrastText: "#fff"
    },
    secondary: {
      main: '#FFFFFF'
    }
  },
});

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={majorTheme}>
          <Routes>

            <Route path="/" element={<Welcome />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/MyChoices" element={<MyChoices />} />
            <Route path="/MyStuff" element={<MyStuff />} />
            <Route path="/MyValues" element={<MyValues />} />

          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
};
export default Main;
