import { Button, Divider, Grid, Accordion, Typography, AccordionSummary,AccordionDetails } from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import { StyledEngineProvider } from '@mui/material/styles';
import { ApiHomePageeHomePagee } from "../schemas";
import { Heart} from "@phosphor-icons/react";
import { start } from "repl";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./pageStyle/MyChoices.scss"
import { positions } from "@mui/system";
import {ProgressCircular} from "../components/Circles/ProgressCircular"
import { light } from "@mui/material/styles/createPalette";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WilliamImage from '../siteImages/pexels-william-fortunato-6393003.jpg'
import Progress from "../components/Graphics/Progress";
const MyChoices = () => {
  const darkGreen = "#0c3a25";
  const lightGreen = '#dff0d8';

  const titleToDivider = 2;
  const toTagsName = 0.5;
  const toNearBySection=6;
  const circlesToDivider=4;
  const numberToTags=0.5;


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
<StyledEngineProvider injectFirst>
    <Layout>
      {/* section for Title */}
      <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 6, xl: 12 }} item xl={12} lg={12} md={12}
        sx={{
          backgroundColor: "white", direction: "column",
          mt: 1, pt: 8, pb: 6, display: "flex", alignItems: "center", justifyContent: "center"
        }} >
        {/* Main title */}

        <Grid item xl={5} lg={5} md={5} sx={{ width: "100%",mb:2}} >
          <Typography className="compare-your-choices"  >Compare Your Choices</Typography>
        </Grid>

        {/* Sub title */}
        <Grid container item xl={12} lg={12} md={12} sx={{alignItems: "center", justifyContent: "center", pt: 6, pb: 6 ,mt:0.5,
      }} >
          <Grid container item xl={8} lg={8} md={8} sx={{alignItems: "center",justifyContent: "space-between" }} className="subTitle" >
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" >Wait for Labor</Typography>
            </Grid>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" >41-42 Week Induction</Typography>
            </Grid>
            <Grid item sx={{ alignItems: "center" }}>
              <Typography variant="h5" >39-41 Week Induction</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Details Part */}
      
      <Grid container item xl={12} lg={12} md={12}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
      {/* section Timing */}
      <Grid container item xl={8} lg={8} md={8} direction="column" sx={{pb:toNearBySection}} >
        {/* Timing title */}
        <Grid item  sx={{pb:circlesToDivider}}>
          <Grid>
            <Typography className="FourTagsStyle" variant="h4" > Timing</Typography>
          </Grid>
          <Grid item sx={{ pb: titleToDivider ,pt:toTagsName}}>
            <Typography className="four-tags-subtitle"> Most likely to happen between</Typography>
          </Grid>
          {/* line */}
          <Divider className="vector" />
        </Grid>

          {/* section of data (and circles) */}
          <Grid container  item sx={{ pt: circlesToDivider, justifyContent: "space-between" }} >
          <Grid  item  className="Timing-circles" sx={{ml:'51px'}}  >
           
           <Typography className="weeks-number"> 37 - 42+</Typography>
             
             <Typography className="weeks"> Weeks</Typography>
             </Grid>
             <Grid item   className="Timing-circles" >
            
             <Typography className="weeks-number"> 41 - 42</Typography>
             
             <Typography className="weeks"> Weeks</Typography>
              </Grid>
              <Grid item   className="Timing-circles" sx={{mr:'51px'}} >
            
              <Typography className="weeks-number"> 39 - 41</Typography>
             
             <Typography className="weeks"> Weeks</Typography>
              </Grid>
          </Grid>
        </Grid>

          {/* section Labor Time */}
        <Grid container item xl={8} lg={8} md={8} direction="column"  sx={{pt:toNearBySection}}>
        {/* title Labor Time */}
        <Grid item sx={{pb:circlesToDivider}}>
          <Grid>
            <Typography className="FourTagsStyle" variant="h4" > Labor Time</Typography>
          </Grid>
          <Grid item sx={{ pb: titleToDivider, pt: toTagsName }}>
            <Typography className="four-tags-subtitle"> Sometimes longer or shorter</Typography>
          </Grid>
          {/* line */}
          <Divider className="vector" />
        </Grid>

          {/* data section */}

          <Grid container sx={{ pt: circlesToDivider, justifyContent: "space-between" }}>
            <Grid container item   className="Labor-circles" sx={{ml:'51px'}}>
           
          <Typography className="days-number"> 8 - 24</Typography>
            
            <Typography className="days"> Hours</Typography>
            </Grid>
            <Grid container item   className="Labor-circles" >
           
           <Typography className="days-number"> 1 - 3</Typography>
             
             <Typography className="days"> Days</Typography>
             </Grid>
             <Grid container item   className="Labor-circles" sx={{mr:'51px'}}>
           
           <Typography className="days-number"> 1 - 3</Typography>
             
             <Typography className="days"> Days</Typography>
             </Grid>
          </Grid>
        </Grid>

        {/* Experience Section */}
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{pt:toNearBySection}}>
        {/* Experience Title */}
        {/* parallel display */}
        <Grid item sx={{pb:circlesToDivider}}>
          <Grid sx={{pb:titleToDivider}}>
          <Typography display="inline" className="FourTagsStyle" variant="h4"> Experience</Typography>
          <Typography display="inline" className="experience-7" sx={{pl:numberToTags}}> 7</Typography>
          
          </Grid>
          {/* line */}
          <Divider className="vector" />
        </Grid>

          {/* 2 column data section */}

          <Grid container item sx={{ pt: circlesToDivider, justifyContent: "space-between" }}>
            <Grid container item xl={4} lg={4} md={4} sx={{ pb: 4, direction: "column", alignItems: "center", justifyContent: "center" }}>
              <Grid item ><FavoriteIcon sx={{ fontSize: 50 }} /></Grid>
              <Grid item><Typography >More satisfied with care (less waiting, fewer interventions)</Typography></Grid>
            </Grid>
            <Grid container item xl={6} lg={6} md={6} sx={{ backgroundColor: lightGreen }}>
              <Grid item xl={6} lg={6} md={6} ><Divider><FavoriteIcon sx={{ fontSize: 50 }} /></Divider></Grid>
              <Grid item><Typography >More satisfied with care (less waiting, fewer interventions)</Typography></Grid>
            </Grid>


          </Grid>
          </Grid>

        {/* Pain Medication Section */}
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{mt:toNearBySection}}>
        {/* Pain Medication title*/}
        <Grid item sx={{pb:circlesToDivider}}>
          <Grid sx={{pb:titleToDivider}}>
          <Typography display="inline" className="FourTagsStyle" variant="h4"> Pain Medication</Typography>
          <Typography display="inline" className="experience-7" sx={{pl:numberToTags}}> 6</Typography>
          </Grid>
          {/* line */}
          <Divider className="vector" />
        </Grid>
          {/* data section */}
          <Grid  container  item sx={{ pt: circlesToDivider,pb:10, justifyContent: "space-between" }} >
            
          <Grid item xl={5} lg={5} md={5} >
            <ProgressCircular
             
              leftValue='51'
              leftColor={lightGreen}
              rightValue='49'
              rightColor={darkGreen}
              content1='49%'
              content2='Chance'
              />
              </Grid>
            <Grid item xl={6} lg={6} md={6} >
              <ProgressCircular
             
              leftValue='48'
              leftColor={lightGreen}
              rightValue='52'
              rightColor={darkGreen}
              content1='52%'
              content2='Chance'
              />
            </Grid>
            
          </Grid>
          <Grid container item xl={5} lg={5} md={5} sx={{mt:'15px',ml: 'auto'}}>
             <Typography className="no-difference">No difference between scheduled labor induction between 41-42 weeks and between 39-41 weeks</Typography>
          </Grid>


        </Grid>

        {/* Same */}
        
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{mt:toNearBySection}}>
            <Grid className="same-rectangle"  item xl={12} lg={12} md={12} >
              <Typography display="inline" className="same-for-all-opts">For all three options, there is the same chance of being able to </Typography>
              <Typography display="inline" className="same-breastfeed">breastfeed your baby </Typography>
              <Typography display="inline" className="same-for-all-opts">. 6</Typography>
            </Grid> 
        </Grid>
        
        {/* Potential Risks Section */}
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{mt:'106px'}}>
          {/* title */}
        <Grid container item xl={12} lg={12} md={12}>
          <Typography display="inline" className="potential-risks" variant="h4" >Potential Risks </Typography>
          <Typography display="inline" className="potential-risks-6" > 6</Typography>
        </Grid>
        <Grid container item xl={12} lg={12} md={12}>
        <Typography className="potential-risks-subtitle"> The section contains information about risks to babies. It is included for informed decision-making.</Typography>
        </Grid>
          {/* view risks */}
          <Grid container item xl={12} lg={12} md={12} sx={{pt:'32px'}}>
        <Accordion className="view-risks-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="expandIcon"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Grid container alignItems="center" justifyContent="space-between">
          <Typography className="view-risks-title" sx={{ flexGrow: 1, textAlign: 'center' }}>
            View risks
          </Typography>
         
        </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
          </Grid>
        </Grid>
        
        {/* Learn about your choices */}
        
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{mt:'87px'}}>
          <Grid item xl={12} lg={12} md={12}>
            <Typography className="learn-choices" variant="h4">
              Learn About Your Choices
            </Typography>
          </Grid>
          <Grid container item xl={12} lg={12} md={12} sx={{mt:'43px'}}>
            <Grid container item xl={12} lg={12} md={12} >
            <Grid  item  ml={'20px'}> 
              <Typography className="learn-choices-subTitle">
              Wait for Labor
              </Typography>
              
            </Grid>
            <Grid  item  ml={'66px'}> 
              <Typography className="learn-choices-subTitle">
              41-42 Week Induction
              </Typography>
              
            </Grid>

              <Grid item ml={'50px'}>
              <Typography className="learn-choices-subTitle">
              39-41 Week Induction
              </Typography>
              
              </Grid>
            </Grid>
            <Grid container sx={{mt:'24px'}}>
            <Grid item sx={{ml:'32px'}}>
            <button className="learn-more-button ">
                Learn more
            </button>
            </Grid>
            <Grid item sx={{ml:'145px'}}>
            <button className="learn-more-button ">
                Learn more
            </button>
            </Grid>
            <Grid item sx={{ml:'173px'}}>
            <button className="learn-more-button ">
                Learn more
            </button>
            </Grid>
            </Grid>
          </Grid>

        </Grid>
        {/*Sources */}
        <Grid  container item xl={8} lg={8} md={8} direction="column"  sx={{mt:'128px'}}>
        <Accordion className="sources-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="sources" variant="h4">Sources</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
        </Grid>
        {/* need help */}
        <Grid  container item className="need-help" xl={12} lg={12} md={12} direction="column"  sx={{mt:'72px'}}>
        <Grid item >
           <img
           src={WilliamImage}
           id="william-image"
           />
        </Grid>
        <Grid item mt={18} ml={6}>
          
            <Typography className="need-help-choosing">Need help choosing?</Typography>
            <Typography mt={1} width={381} height={48}>Answer six short questions and use the summary to talk to your provider before making a decision.</Typography>
         
        </Grid>
        <Grid item>

        </Grid>
        <Grid item mt={2} ml={6}>
        <button className="find-out-button ">
                Learn more
            </button>
        </Grid>
            
       
        </Grid>
        </Grid>

    </Layout>
    </StyledEngineProvider>
  );
};

export default MyChoices;
