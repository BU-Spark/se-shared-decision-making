<<<<<<< HEAD

import { Grid } from "@mui/material";
import React from "react";
=======
import NavBar from "./Navbar/NavBar";
>>>>>>> d2fe8609e1d8bb8b9f45edce1786d7cd608cbe6e
import FooterBar from "./Footer/FooterBar";
import Header from "./Navbar/Header";

const Layout = ({ children }: any) => {
  return (
<<<<<<< HEAD
    <Grid container columns={{ xl: 12, lg: 12, md: 12 }}>
      <Header />
      {children}
=======
    <div style={{ margin: "0", width: "100%" }}>
      <NavBar />
      {props.children}
>>>>>>> d2fe8609e1d8bb8b9f45edce1786d7cd608cbe6e
      <FooterBar />
    </Grid>
  );
};
export default Layout;

//Layout fixed and pushed to branch
