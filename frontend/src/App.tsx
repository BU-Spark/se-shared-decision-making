import { Routes, Route } from "react-router-dom";
import "./App.css";
// import React from "react";
// import FooterBar from './components/Footer/FooterBar'
// import Welcome from './pages/Welcome';
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import MyStuff from "./pages/MyStuff";
import MyValues from "./pages/MyValues";
import MyChoices from "./pages/MyChoices";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

//navigation bar styling, please do not remove
const majorTheme = createTheme({
  palette: {
    secondary: {
      main: "#FFFFFF",
      contrastText: "#0c3a25",
    },
    primary: {
      main: "#0c3a25",
      contrastText: "#fff",
    },
  },
});
//Routing, i.e. directing to other pages on the website, using page components and useNavigate to achieve
const Main = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={majorTheme}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/WaitingForLabor" />
          <Route path="/MyChoices" element={<MyChoices />} />
          <Route path="/MyStuff" element={<MyStuff />} />
          <Route path="/MyValues" element={<MyValues />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default Main;
