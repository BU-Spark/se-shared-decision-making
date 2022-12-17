
import { Grid } from "@mui/material";
import React from "react";

import NavBar from "./Navbar/NavBar";

import NavBar from "./Navbar/NavBar";

import FooterBar from "./Footer/FooterBar";
import Header from "./Navbar/Header";

const Layout = ({ children }: any) => {
  return (

    <Grid container columns={{ xl: 12, lg: 12, md: 12 }}>
      <Header />
      {children}

    {/* <div style={{ margin: "0", width: "100%" }}> */}
      <NavBar />
      {children}

      <FooterBar />
    </Grid>
  );
};
export default Layout;

//Layout fixed and pushed to branch
