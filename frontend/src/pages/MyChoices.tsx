import { Grid, ThemeProvider, Typography } from "@mui/material";

import React from "react";
import Layout from "../components/Layout";
import WelcomeImg from "./pageStyle/welcome.png";
const MyChoices = () => {
  const textColor = "#0c3a25";
  const lightGreen = '#dff0d8';


  return (

    <Layout>
      {/* section for Title */}
      <Grid container columns={{ xl: 12, lg: 12, md: 12 }} item xl={12} lg={12} md={12}
        sx={{
          backgroundColor: "white", direction: "column",
          pt: 8, pb: 8, display: "flex", alignItems: "center", justifyContent: "center"
        }} >
        {/* Main title */}

        <Grid item xl={5} lg={5} md={5} sx={{ alignItems: "center" }}>
          <Typography variant="h2" color={textColor} fontWeight="500">Compare your choices</Typography>
        </Grid>

        {/* Sub title */}
        <Grid container item xl={12} lg={12} md={12} sx={{ alignItems: "center", justifyContent: "center", pt: 6, pb: 8 }}>
          <Grid container item xl={8} lg={8} md={8} sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={textColor}>Wait for Labor</Typography>
            </Grid>

            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={textColor}>41-42 Week Induction</Typography>
            </Grid>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={textColor}>39-41 Week Induction</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container xl={12} lg={12} md={12}
        sx={{ alignItems: "center" }}
      >
        <Grid item>
          <Typography> Time</Typography>
        </Grid>
      </Grid>
      <Grid container item xl={12} lg={12} md={12} sx={{ alignItems: "center" }}>
        <Grid item>
          <Typography> Most likely to happen between</Typography>
        </Grid>
      </Grid>

      <Grid container item xl={8} lg={8} md={8} sx={{ p: 0.2, backgroundColor: lightGreen }}>

      </Grid>









    </Layout>
  );
};

export default MyChoices;
