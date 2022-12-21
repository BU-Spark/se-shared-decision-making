import { Box, Divider, Grid, ThemeProvider, Typography } from "@mui/material";
import { CircularProgress } from '@mui/material';
import React from "react";
import Layout from "../components/Layout";
import { ApiHomePageeHomePagee } from "../schemas";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { start } from "repl";

const MyChoices = () => {
  const darkGreen = "#0c3a25";
  const lightGreen = '#dff0d8';

  const titleToDivider = 2;
  const toNextSection = 4;

  //for strapi purpose:
  // interface Response {
  //   data: [] | ApiHomePageeHomePagee[];
  // }
  // const defaultResponse = { data: [] };

  // const data: Response = useFetch<Response>(
  //   "http://localhost:1337/api/home-pagees?populate=*", defaultResponse
  // );


  // console.log("data" + data.data[0].attributes);
  return (

    <Layout>
      {/* section for Title */}
      <Grid container columns={{ xl: 12, lg: 12, md: 12 }} item xl={12} lg={12} md={12}
        sx={{
          backgroundColor: "white", direction: "column",
          mt: 1, pt: 8, pb: 8, display: "flex", alignItems: "center", justifyContent: "center"
        }} >
        {/* Main title */}

        <Grid item xl={5} lg={5} md={5} sx={{ alignItems: "center" }}>
          <Typography variant="h2" color={darkGreen} fontWeight="500">Compare Your Choices</Typography>
        </Grid>

        {/* Sub title */}
        <Grid container item xl={12} lg={12} md={12} sx={{ alignItems: "center", justifyContent: "center", pt: 6, pb: 8 }}>
          <Grid container item xl={7} lg={7} md={7} sx={{ alignItems: "center", justifyContent: "space-between" }}>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={darkGreen}>Wait for Labor</Typography>
            </Grid>

            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={darkGreen}>41-42 Week Induction</Typography>
            </Grid>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" color={darkGreen}>39-41 Week Induction</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* section Timing */}
      <Grid item container xl={12} lg={12} md={12}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        <Grid container item xl={8} lg={8} md={8}
          direction="column">
          <Grid itemProp="">
            <Typography variant="h4" > Timing</Typography>
          </Grid>
          <Grid item sx={{ pb: titleToDivider }}>
            <Typography> Most likely to happen between</Typography>
          </Grid>
          {/* line */}
          <Divider sx={{ backgroundColor: lightGreen }} />
          {/* section of data */}
          <Grid container item sx={{ pt: 4, justifyContent: "space-between" }}>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: lightGreen, alignContent: "center", p: 8 }}>
              <Typography sx={{ textAlign: "center" }}> 37 - 42+</Typography>
              <Typography sx={{ textAlign: "center" }}> Weeks</Typography>
            </Grid>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: lightGreen, alignContent: "center" }}>
              <Typography sx={{ textAlign: "center" }}> 41 - 42</Typography>

              <Typography sx={{ textAlign: "center" }}> Weeks</Typography>
            </Grid>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: lightGreen, alignContent: "center" }}>
              <Typography sx={{ textAlign: "center" }}> 39 - 41</Typography>
              <Typography sx={{ textAlign: "center" }}> Weeks</Typography>
            </Grid>

          </Grid>

          {/* section Labor Time */}

          <Grid item >
            <Typography variant="h4"> Labor Time</Typography>
          </Grid>
          <Grid item sx={{ pb: titleToDivider, pt: toNextSection }}>
            <Typography> Sometimes longer or shorter</Typography>
          </Grid>
          {/* line */}
          <Divider sx={{ backgroundColor: lightGreen }} />

          {/* data section */}

          <Grid container item sx={{ pt: 4, justifyContent: "space-between" }}>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: darkGreen, alignContent: "center", p: 8 }}>
              <Typography color={lightGreen} sx={{ textAlign: "center" }}> 8 - 24</Typography>
              <Typography color={lightGreen} sx={{ textAlign: "center" }}> Days</Typography>
            </Grid>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: darkGreen, alignContent: "center" }}>
              <Typography color={lightGreen} sx={{ textAlign: "center" }}> 1 - 3</Typography>

              <Typography color={lightGreen} sx={{ textAlign: "center" }}> Days</Typography>
            </Grid>
            <Grid container item xl={3} lg={3} md={3} sx={{ borderRadius: "50%", backgroundColor: darkGreen, alignContent: "center" }}>
              <Typography color={lightGreen} sx={{ textAlign: "center" }}> 1 - 3</Typography>
              <Typography color={lightGreen} sx={{ textAlign: "center" }}> Days</Typography>
            </Grid>

          </Grid>

          {/* Experience Section */}
          <Grid item sx={{ pb: titleToDivider, pt: toNextSection }}>
            {/* parallel display */}
            <Typography display="inline"
              variant="h4"> Experience</Typography>
            <Typography display="inline"> 6</Typography>
          </Grid>

          {/* line */}
          <Divider sx={{ backgroundColor: lightGreen }} />
          {/* 2 column data section */}
          <Grid container item sx={{ pt: 4, justifyContent: "space-between" }}>
            <Grid container item xl={4} lg={4} md={4} sx={{ pb: 4, direction: "column", alignItems: "center", justifyContent: "center" }}>
              <Grid item ><FavoriteIcon sx={{ fontSize: 50 }} /></Grid>
              <Grid item><Typography >More satisfied with care (less waiting, fewer interventions)</Typography></Grid>
            </Grid>
            <Grid container item xl={6} lg={6} md={6} sx={{ backgroundColor: lightGreen }}>
              <Grid item xl={6} lg={6} md={6} ><Divider><FavoriteIcon sx={{ fontSize: 50 }} /></Divider></Grid>
              <Grid item><Typography >More satisfied with care (less waiting, fewer interventions)</Typography></Grid>
            </Grid>


          </Grid>

          {/* Pain Medication Section */}
          <Grid item sx={{ pb: titleToDivider, pt: toNextSection }}>
            {/* parallel display */}
            <Typography display="inline" variant="h4"> Pain Medication</Typography>
            <Typography display="inline"> 6</Typography>
          </Grid>

          <Divider sx={{ backgroundColor: lightGreen }} />

          {/* two colomn data section */}
          {/* Thought about using CircularProgress but it doesn't allow children inside */}

          <Grid container item sx={{ pt: 4, justifyContent: "space-between" }}>
            <Grid container item xl={4} lg={4} md={4} sx={{ alignContent: "center", p: 8 }}>
              <Grid item >
                <CircularProgress variant="determinate" value={49} />
                <Typography>49 %</Typography>
              </Grid>
            </Grid>

            <Grid container item xl={4} lg={4} md={4} sx={{ alignContent: "center" }}>
              <Grid item >
                <CircularProgress variant="determinate" value={52} />
                <Typography>52 %</Typography>
              </Grid>
            </Grid>

          </Grid>

          {/* TODO: for all three options.. 
                Potential Risks
                learn about your choice
                Source
            */}
        </Grid>
      </Grid>











    </Layout>
  );
};

export default MyChoices;
