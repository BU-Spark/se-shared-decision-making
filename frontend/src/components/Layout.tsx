import React from "react";
import NavBar from "./Navbar/NavBar";
import FooterBar from "./Footer/FooterBar";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <FooterBar />
    </div>
  );
};
export default Layout;

// I have the layout page up but, I have a bug with the children, will fix
