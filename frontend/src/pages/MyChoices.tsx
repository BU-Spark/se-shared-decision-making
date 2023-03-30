import {
  Button,
  Divider,
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React from "react";
import Layout from "../components/Layout";
import { StyledEngineProvider } from "@mui/material/styles";
import { ApiHomePageeHomePagee } from "../schemas";
import { Heart, HeartHalf } from "@phosphor-icons/react";
import { start } from "repl";
import "./pageStyle/MyChoices.scss";
import { ProgressCircular } from "../components/Circles/ProgressCircular";
import { Sources } from "../components/AccordionContent/Sources";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WilliamImage from "../siteImages/pexels-william-fortunato-6393003.jpg";
import DottedCircle20 from "../siteImages/DottedCircles/DottedCircle20.png";
import DottedCircle19 from "../siteImages/DottedCircles/DottedCircle19.png";
import DottedCircle22 from "../siteImages/DottedCircles/DottedCircle22.png";
import DottedCircle6 from "../siteImages/DottedCircles/DottedCircle6.png";
import DottedCircle5 from "../siteImages/DottedCircles/DottedCircle5.png";
import DottedCircle04 from "../siteImages/DottedCircles/DottedCircle04.png";
import DottedCircle01 from "../siteImages/DottedCircles/DottedCircle01.png";
import DottedCircle13 from "../siteImages/DottedCircles/DottedCircle13.png";
import DottedCircle9 from "../siteImages/DottedCircles/DottedCircle9.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const MyChoices = () => {
  const darkGreen = "#0c3a25";
  const lightGreen = "#dff0d8";

  const titleToDivider = 2;
  const toTagsName = 0.5;
  const toNearBySection = 6;
  const circlesToDivider = 4;
  const numberToTags = 0.5;

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

        {/* Main title */}

        <Grid
          item
          sx={{
            width: "843px",
            height: "83px",
            ml: "160px",
            mb: 2,
            mt: "81px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          {/* mt:"81px" */}
          <Typography className="compare-your-choices">
            Compare Your Choices
          </Typography>
        </Grid>

        {/* Sub title */}
        <Grid
          container
          className="subTitle"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            mt: "25px",
            width: "874px",
            height: "80px",
            ml: "150px",
          }}
        >
          <Grid item>
            <Typography>Wait for Labor</Typography>
          </Grid>
          <Grid item>
            <Typography>41-42 Week Induction</Typography>
          </Grid>
          <Grid item>
            <Typography>39-41 Week Induction</Typography>
          </Grid>
        </Grid>

        {/* Details Part */}
        {/* section Timing */}
        <Grid container>
          {/* Timing title */}
          <Grid
            item
            sx={{
              width: "874px",
              mt: "48px",
              ml: "203px",
              mr: "203px",
            }}
          >
            <Grid item>
              <Typography className="FourTagsStyle"> Timing</Typography>
            </Grid>
            <Grid item>
              <Typography className="four-tags-subtitle">
                {" "}
                Most likely to happen between
              </Typography>
            </Grid>
            {/* line */}
            <Divider sx={{ mt: "16px" }} className="vector" />
          </Grid>

          {/* section of data (and circles) */}
          <Grid
            container
            sx={{
              ml: "254px",
              mr: "252px",
              mt: "48px",
              justifyContent: "space-between",
              width: "774px",
            }}
          >
            <Grid item className="Timing-circles">
              <Typography className="weeks-number"> 37 - 42+</Typography>

              <Typography className="weeks"> Weeks</Typography>
            </Grid>
            <Grid item className="Timing-circles">
              <Typography className="weeks-number"> 41 - 42</Typography>

              <Typography className="weeks"> Weeks</Typography>
            </Grid>
            <Grid item className="Timing-circles">
              <Typography className="weeks-number"> 39 - 41</Typography>

              <Typography className="weeks"> Weeks</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* section Labor Time */}
        <Grid container>
          {/* Labor Time title */}
          <Grid
            item
            sx={{
              width: "874px",
              mt: "126px",
              ml: "203px",
              mr: "203px",
            }}
          >
            <Grid item>
              <Typography className="FourTagsStyle"> Labor Time</Typography>
            </Grid>
            <Grid item>
              <Typography className="four-tags-subtitle">
                {" "}
                Sometimes longer or shorter
              </Typography>
            </Grid>
            {/* line */}
            <Divider sx={{ mt: "16px" }} className="vector" />
          </Grid>

          {/* section of data (and circles) */}
          <Grid
            container
            item
            sx={{
              mt: "48px",
              ml: "254px",
              mr: "252px",
              justifyContent: "space-between",
              width: "774px",
            }}
          >
            <Grid item className="Labor-circles">
              <Typography className="days-number"> 8 - 24</Typography>

              <Typography className="days"> Hours</Typography>
            </Grid>
            <Grid item className="Labor-circles">
              <Typography className="days-number"> 1 - 3</Typography>

              <Typography className="days"> Days</Typography>
            </Grid>
            <Grid item className="Labor-circles">
              <Typography className="days-number"> 1 - 3</Typography>

              <Typography className="days"> Days</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Experience Section */}
        <Grid container>
          {/* Experience Title */}
          {/* parallel display */}
          <Grid
            item
            sx={{
              width: "874px",
              mt: "128px",
              ml: "203px",
              mr: "203px",
            }}
          >
            <Grid>
              <Typography display="inline" className="FourTagsStyle">
                {" "}
                Experience
              </Typography>
              <Typography display="inline" className="experience-7">
                {" "}
                7
              </Typography>
            </Grid>
            {/* line */}
            <Divider sx={{ mt: "10px" }} className="vector" />
          </Grid>

          {/* 2 column data section */}

          <Grid
            container
            item
            sx={{
              mt: "48px",
              ml: "249px",
              mr: "265px",
            }}
          >
            <Grid item sx={{ width: "171px", ml: "46px" }}>
              <Grid item sx={{ ml: "65px" }}>
                <Heart size={41} color="#0c3a25" weight="fill" />
              </Grid>
              <Grid container sx={{ mt: "20.5px" }}>
                <Typography className="experience-body-content">
                  More satisfied with care (less waiting, fewer interventions)
                </Typography>
              </Grid>
            </Grid>

            <Grid item sx={{ width: "171px", ml: "204px" }}>
              <Grid item sx={{ ml: "65px" }}>
                <HeartHalf size={41} color="#0c3a25" weight="fill" />
              </Grid>
              <Grid container sx={{ mt: "20.5px" }}>
                <Typography className="experience-body-content">
                  Less satisfaction with care (more waiting, more interventions)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Pain Medication Section */}
        <Grid container>
          {/* Pain Medication title*/}
          <Grid
            item
            sx={{
              mt: "128px",
              ml: "203px",
              mr: "203px",
              width: "874px",
            }}
          >
            <Grid>
              <Typography display="inline" className="FourTagsStyle">
                {" "}
                Pain Medication
              </Typography>
              <Typography display="inline" className="experience-7">
                {" "}
                6
              </Typography>
            </Grid>
            {/* line */}
            <Divider sx={{ mt: "10px" }} className="vector" />
          </Grid>

          {/* data section */}
          <Grid
            container
            item
            sx={{
              mt: "48px",
              ml: "254px",
              mr: "265px",
              justifyContent: "space-between",
            }}
          >
            <Grid item sx={{ ml: "51px" }}>
              <ProgressCircular
                leftValue={51}
                leftColor={lightGreen}
                rightValue={49}
                rightColor={darkGreen}
                content1="49%"
                content2="Chance"
              />
            </Grid>
            <Grid item xl={7} lg={7} md={7}>
              <Grid sx={{ ml: "54px" }}>
                <ProgressCircular
                  leftValue={48}
                  leftColor={lightGreen}
                  rightValue={52}
                  rightColor={darkGreen}
                  content1="52%"
                  content2="Chance"
                />
              </Grid>
              <Grid
                item
                sx={{
                  mt: "90px",
                  ml: "65px",
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  mr: "10px",
                }}
              >
                <Typography className="no-difference">
                  No difference between scheduled labor induction between 41-42
                  weeks and between 39-41 weeks
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Same */}
        <Grid
          item
          sx={{
            mt: "42px",
            width: "700px",
            height: "60px",
            ml: "240px",
          }}
        >
          <Grid className="same-rectangle" item>
            <Typography display="inline" className="same-for-all-opts">
              For all three options, there is the same chance of being able to{" "}
            </Typography>
            <Typography display="inline" className="same-breastfeed">
              breastfeed your baby{" "}
            </Typography>
            <Typography display="inline" className="same-for-all-opts">
              .6
            </Typography>
          </Grid>
        </Grid>

        {/* Potential Risks Section */}
        <Grid
          container
          sx={{ mt: "106px", mr: "203px", ml: "203px", width: "874px" }}
        >
          {/* title */}
          <Grid item>
            <Typography
              display="inline"
              className="potential-risks"
              variant="h4"
            >
              Potential Risks{" "}
            </Typography>
            <Typography display="inline" className="potential-risks-6">
              {" "}
              6
            </Typography>
          </Grid>
          <Grid container item>
            <Typography className="potential-risks-subtitle">
              {" "}
              The section contains information about risks to babies. It is
              included for informed decision-making.
            </Typography>
          </Grid>
          {/* view risks */}
          <Grid container sx={{ mt: "32px" }}>
            <Accordion sx={{ width: "874px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className="expandIcon" />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className="view-risks-accordion"
              >
                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    className="view-risks-title"
                    sx={{ flexGrow: 1, textAlign: "center" }}
                  >
                    View risks
                  </Typography>
                </Grid>
              </AccordionSummary>
              <AccordionDetails className="view-risks-details">
                <Grid container sx={{ mt: "72px", ml: "13px", mr: "13px" }}>
                  <Grid container>
                    <Grid
                      item
                      sx={{
                        height: "49px",
                        ml: "13px",
                        mr: "13px",
                        width: "848px",
                      }}
                    >
                      <Grid>
                        <Typography
                          display="inline"
                          className="FourTagsStyle"
                          bgcolor={lightGreen}
                        >
                          {" "}
                          Cesarean Birth
                        </Typography>
                        <Typography
                          sx={{ ml: "4px" }}
                          display="inline"
                          className="cesarean-birth-8"
                        >
                          8
                        </Typography>
                      </Grid>
                      {/* line */}
                      <Divider sx={{ mt: "12px" }} className="vector-risks" />
                    </Grid>
                    <Grid
                      container
                      sx={{
                        height: "284px",
                        width: "791.45px",
                        ml: "26px",
                        mt: "48px",
                      }}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <img
                          width="180.45px"
                          height="243px"
                          src={DottedCircle22}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          width="180.45px"
                          height="243px"
                          src={DottedCircle20}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          width="180.45px"
                          height="284px"
                          src={DottedCircle19}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      sx={{
                        height: "49px",
                        ml: "13px",
                        mr: "13px",
                        mt: "36px",
                        width: "848px",
                      }}
                    >
                      <Grid>
                        <Typography display="inline" className="FourTagsStyle">
                          {" "}
                          Baby Admitted to NICU
                        </Typography>
                        <Typography
                          sx={{ ml: "4px" }}
                          display="inline"
                          className="cesarean-birth-8"
                        >
                          6
                        </Typography>
                      </Grid>
                      {/* line */}
                      <Divider sx={{ mt: "11px" }} className="vector-risks" />
                    </Grid>
                    <Grid
                      container
                      sx={{
                        height: "359px",
                        width: "775px",
                        ml: "26px",
                        mt: "48px",
                      }}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <img
                          width="180.45px"
                          height="239px"
                          src={DottedCircle6}
                        />
                      </Grid>
                      <Grid item>
                        <img width="446px" height="239px" src={DottedCircle5} />
                      </Grid>
                      <Typography
                        className="potential-risks-small-content"
                        sx={{
                          width: "269px",
                          height: "104px",
                          ml: "413px",
                          mt: "16px",
                        }}
                      >
                        No difference between scheduled labor induction between
                        41-42 weeks and between 39-41 weeks
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid
                      item
                      sx={{
                        height: "49px",
                        ml: "13px",
                        mr: "13px",
                        width: "848px",
                        mt: "36px",
                      }}
                    >
                      <Grid>
                        <Typography display="inline" className="FourTagsStyle">
                          {" "}
                          Loss of Baby
                        </Typography>
                        <Typography
                          sx={{ ml: "4px" }}
                          display="inline"
                          className="cesarean-birth-8"
                        >
                          6
                        </Typography>
                      </Grid>
                      {/* line */}
                      <Divider sx={{ mt: "12px" }} className="vector-risks" />
                    </Grid>
                    <Grid
                      container
                      sx={{
                        height: "374px",
                        width: "779px",
                        ml: "26px",
                        mt: "48px",
                      }}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <img
                          width="180.45px"
                          height="254px"
                          src={DottedCircle04}
                        />
                      </Grid>
                      <Grid item>
                        <img
                          width="449px"
                          height="254px"
                          src={DottedCircle01}
                        />
                      </Grid>
                      <Typography
                        className="potential-risks-small-content"
                        sx={{
                          width: "269px",
                          height: "104px",
                          ml: "413px",
                          mt: "16px",
                        }}
                      >
                        No difference between scheduled labor induction between
                        41-42 weeks and between 39-41 weeks
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid
                      item
                      sx={{
                        height: "49px",
                        ml: "13px",
                        mr: "13px",
                        width: "848px",
                        mt: "36px",
                      }}
                    >
                      <Grid>
                        <Typography display="inline" className="FourTagsStyle">
                          {" "}
                          Maternal Hypertension
                        </Typography>
                        <Typography
                          sx={{ ml: "4px" }}
                          display="inline"
                          className="cesarean-birth-8"
                        >
                          8
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: "10px" }}>
                        <Typography className="four-tags-subtitle">
                          {" "}
                          High blood pressure
                        </Typography>
                      </Grid>
                      {/* line */}
                      <Divider sx={{ mt: "12px" }} className="vector-risks" />
                    </Grid>
                    <Grid
                      container
                      sx={{
                        width: "791.45px",
                        ml: "32px",
                        mt: "48px",
                      }}
                      justifyContent="space-between"
                    >
                      <Grid item>
                        <Typography
                          sx={{
                            width: "170px",
                            height: "104px",
                            mt: "115px",
                          }}
                          className="potential-risks-small-content"
                        >
                          No difference between scheduled labor induction
                          between 41-42 weeks and between 39-41 weeks
                        </Typography>
                      </Grid>
                      <Grid item sx={{ mt: "48px" }}>
                        <img
                          width="180.45px"
                          height="243px"
                          src={DottedCircle13}
                        />
                      </Grid>
                      <Grid item sx={{ mt: "48px" }}>
                        <img
                          width="180.45px"
                          height="235.66px"
                          src={DottedCircle9}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </AccordionDetails>
              <Grid container className="for-all-rectangle" sx={{ pt: "48px" }}>
                <Grid width="649px" height="269px">
                  <Grid
                    item
                    width="649px"
                    height="27px"
                    sx={{ ml: "111px", mr: "114px" }}
                  >
                    <Typography className="potential-risks-small-content">
                      For all three options, there is the same chance of{" "}
                    </Typography>
                  </Grid>
                  <Grid
                    width="483px"
                    sx={{ ml: "195px", mr: "196px", mt: "24px" }}
                  >
                    <Typography className="potential-risks-small-content2">
                      <FiberManualRecordIcon sx={{ fontSize: 10, pr: "5px" }} />
                      <Typography
                        display="inline"
                        className="potential-risks-small-content2"
                        bgcolor={lightGreen}
                      >
                        Seizure
                      </Typography>
                      ,{" "}
                      <Typography
                        display="inline"
                        className="potential-risks-small-content2"
                        bgcolor={lightGreen}
                      >
                        pneumonia
                      </Typography>
                      , harm to the baby’s body, or problems getting air to
                      baby’s brain.{" "}
                      <Typography
                        display="inline"
                        className="for-all-small-number"
                      >
                        6
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    width="483px"
                    sx={{ ml: "195px", mr: "196px", mt: "16px" }}
                  >
                    <Typography className="potential-risks-small-content2">
                      <FiberManualRecordIcon sx={{ fontSize: 10, pr: "5px" }} />
                      Needing help from tools like forcepts or a vaccum.{" "}
                      <Typography
                        display="inline"
                        className="for-all-small-number"
                      >
                        6
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    width="483px"
                    sx={{ ml: "195px", mr: "196px", mt: "16px" }}
                  >
                    <Typography className="potential-risks-small-content2">
                      <FiberManualRecordIcon sx={{ fontSize: 10, pr: "5px" }} />
                      Too much bleeding after birth.{" "}
                      <Typography
                        display="inline"
                        className="for-all-small-number"
                      >
                        6
                      </Typography>
                    </Typography>
                  </Grid>
                  <Grid
                    width="483px"
                    sx={{ ml: "195px", mr: "196px", mt: "16px" }}
                  >
                    <Typography className="potential-risks-small-content2">
                      <FiberManualRecordIcon sx={{ fontSize: 10, pr: "5px" }} />
                      Severe tearing of vagina.{" "}
                      <Typography
                        display="inline"
                        className="for-all-small-number"
                      >
                        6
                      </Typography>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Accordion>
          </Grid>
        </Grid>

        {/* Learn about your choices */}
        <Grid item sx={{ ml: "122px", mt: "87px", width: "880px" }}>
          <Typography className="learn-choices">
            Learn About Your Choices
          </Typography>
        </Grid>
        <Grid container sx={{ mt: "43px", width: "1000px" }}>
          <Grid
            container
            sx={{ ml: "180px" }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item>
              <Typography className="learn-choices-subTitle">
                Wait for Labor
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="learn-choices-subTitle">
                41-42 Week Induction
              </Typography>
            </Grid>

            <Grid item>
              <Typography className="learn-choices-subTitle">
                39-41 Week Induction
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: "24px" }} alignItems="center">
            <Grid item sx={{ ml: "190px" }}>
              <button className="learn-more-button ">Learn more</button>
            </Grid>
            <Grid item sx={{ ml: "200px" }}>
              <button className="learn-more-button ">Learn more</button>
            </Grid>
            <Grid item sx={{ ml: "230px" }}>
              <button className="learn-more-button ">Learn more</button>
            </Grid>
          </Grid>
        </Grid>

        {/*Sources */}
        <Grid container sx={{ mt: "88px", ml: "203px" }}>
          <Accordion sx={{ width: "874px" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="sources">Sources</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid>
                <Sources
                  number="6"
                  text1=" Middleton P, Shepherd E, Morris J, Crowther CA, Gomersall JC. Induction of labour at or beyond 37 weeks’ gestation. Cochrane Database Syst Rev. July 2020. 
          doi:10.1002/14651858.CD004945.pub5 *NICU and perinatal death rates calculated using the GRADE system to convert relative risks with the SWEPIS study as the baseline
          
          risk estimates **C-section rate calculated using the GRADE system to convert relative risks with the ARRIVE study as the baseline
          
          risk estimate.  The 2020 Cochrane Review includes the ARRIVE trial and the SWEPSIS trial within the findings. "
                  text2="Source"
                />
              </Grid>
              <Grid sx={{ mt: "28px" }}>
                <Sources
                  number="7"
                  text1="Coates D, Goodfellow A, Sinclair L. Induction of labour: Experiences of care and decision-making of women and clinicians. 
          Women and Birth. 2020;33:e1-e14. 8. Sotiriadis A, Petousis S, Thilaganathan B, et al. Maternal and perinatal outcomes after elective induction of labor at 39 weeks in uncomplicated singleton pregnancy: a meta-analysis. Ultrasound Obstet Gynecol. 2019;53(1):26-35. doi:10.1002/UOG.20140. "
                  text2="Source"
                />
              </Grid>
              <Grid sx={{ mt: "28px" }}>
                <Sources
                  number="8"
                  text1="C8. Sotiriadis A, Petousis S, Thilaganathan B, et al. Maternal and perinatal outcomes after elective induction of labor at 39 weeks in uncomplicated singleton pregnancy: a meta-analysis. Ultrasound Obstet Gynecol. 2019;53(1):26-35. doi:10.1002/UOG.20140."
                  text2="Source"
                />
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        {/* need help */}
        <Grid
          container
          item
          className="need-help"
          xl={12}
          lg={12}
          md={12}
          direction="column"
          sx={{ mt: "84px", width: "100%", height: "533px" }}
        >
          <Grid item>
            <img src={WilliamImage} id="william-image" />
          </Grid>
          <Grid
            item
            sx={{ ml: "48px", mt: "159px", width: "381px", height: "97px" }}
          >
            <Typography className="need-help-choosing">
              Need help choosing?
            </Typography>
            <Typography className="need-help-choosing-text">
              Answer six short questions and use the summary to talk to your
              provider before making a decision.
            </Typography>
          </Grid>
          <Grid item></Grid>
          <Grid item sx={{ ml: "48px", mt: "24px" }}>
            <button className="find-out-button ">Find out</button>
          </Grid>
        </Grid>
      </Layout>
    </StyledEngineProvider>
  );
};

export default MyChoices;
