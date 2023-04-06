import {
  Button,
  Divider,
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { StyledEngineProvider } from "@mui/material/styles";
import { ApiHomePageeHomePagee } from "../schemas";
import { Heart, HeartHalf } from "@phosphor-icons/react";
import { start } from "repl";
import "./pageStyle/MyChoices.scss";
import { ProgressCircular } from "../components/Circles/ProgressCircular";
import { Sources } from "../components/AccordionContent/Sources";
import { Popup } from "../components/Popup";
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
import { Link } from "react-router-dom";

const MyChoices = () => {
  const darkGreen = "#0c3a25";
  const lightGreen = "#dff0d8";
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [anchorElPneu, setAnchorElPneu] = useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleClickPneu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElPneu(event.currentTarget);
  };
  const handleClosePneu = () => {
    setAnchorElPneu(null);
  };
  const openPneu = Boolean(anchorElPneu);

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
          container
          columns={{ xl: 12, lg: 12, md: 12 }}
          item
          xl={12}
          lg={12}
          md={12}
          sx={{
            direction: "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sx={{
              mb: "2rem",
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
            item
            className="subTitle"
            xl={8}
            lg={8}
            md={8}
            sx={{
              justifyContent: "space-between",
              mt: "25px",
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
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* Timing title */}
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "48px",
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
              <Divider sx={{ mt: "1rem" }} className="vector" />
            </Grid>

            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "3rem",
                justifyContent: "space-between",
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
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* Labor Time title */}
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "7.875rem",
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
              <Divider sx={{ mt: "1rem" }} className="vector" />
            </Grid>

            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "3rem",
                justifyContent: "space-between",
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
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* Labor Time title */}
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "8rem",
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
              <Divider sx={{ mt: "0.625rem" }} className="vector" />
            </Grid>

            {/* 2 column data section */}

            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "3rem",
                justifyContent: "space-between",
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
                    Less satisfaction with care (more waiting, more
                    interventions)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Pain Medication Section */}
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "8rem",
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
              <Divider sx={{ mt: "0.625rem" }} className="vector" />
            </Grid>

            {/* data section */}
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "3rem",
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
                    No difference between scheduled labor induction between
                    41-42 weeks and between 39-41 weeks
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Same */}
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sx={{
              mt: "3rem",
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
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* title */}
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "8rem",
              }}
            >
              <Typography
                display="inline"
                className="potential-risks-title"
                variant="h4"
              >
                Potential Risks{" "}
              </Typography>
              <Typography display="inline" className="potential-risks-6">
                {" "}
                6
              </Typography>
            </Grid>
            <Grid item xl={8} lg={8} md={8}>
              <Typography className="potential-risks-subtitle">
                {" "}
                The section contains information about risks to babies. It is
                included for informed decision-making.
              </Typography>
            </Grid>
            {/* view risks */}

            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                mt: "2rem",
              }}
            >
              <Accordion>
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
                  <Grid container sx={{ mt: "4.5rem" }}>
                    <Grid
                      container
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid item xl={11} lg={11} md={11}>
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
                        <Divider
                          sx={{ mt: "0.75rem" }}
                          className="vector-risks"
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xl={11}
                        lg={11}
                        md={11}
                        sx={{
                          mt: "3rem",
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
                    <Grid
                      container
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid item xl={11} lg={11} md={11} sx={{ mt: "2rem" }}>
                        <Grid>
                          <Typography
                            display="inline"
                            className="FourTagsStyle"
                          >
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
                        <Divider
                          sx={{ mt: "0.75rem" }}
                          className="vector-risks"
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xl={11}
                        lg={11}
                        md={11}
                        sx={{
                          mt: "3rem",
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
                          <img
                            width="446px"
                            height="239px"
                            src={DottedCircle5}
                          />
                        </Grid>
                        <Grid
                          sx={{ mt: "2.2rem", ml: "30rem" }}
                          item
                          xl={4}
                          lg={4}
                          md={4}
                        >
                          <Typography className="potential-risks-small-content">
                            No difference between scheduled labor induction
                            between 41-42 weeks and between 39-41 weeks
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid item xl={11} lg={11} md={11} sx={{ mt: "2rem" }}>
                        <Grid>
                          <Typography
                            display="inline"
                            className="FourTagsStyle"
                          >
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
                        <Divider
                          sx={{ mt: "0.75rem" }}
                          className="vector-risks"
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xl={11}
                        lg={11}
                        md={11}
                        sx={{
                          mt: "3rem",
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
                          No difference between scheduled labor induction
                          between 41-42 weeks and between 39-41 weeks
                        </Typography>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid item xl={11} lg={11} md={11} sx={{ mt: "2rem" }}>
                        <Grid>
                          <Typography
                            display="inline"
                            className="FourTagsStyle"
                          >
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
                        <Divider
                          sx={{ mt: "0.75rem" }}
                          className="vector-risks"
                        />
                      </Grid>
                      <Grid
                        container
                        item
                        xl={11}
                        lg={11}
                        md={11}
                        sx={{
                          mt: "4rem",
                        }}
                        justifyContent="space-between"
                      >
                        <Grid item xl={3} lg={3} md={3} sx={{ mt: "5rem" }}>
                          <Typography className="potential-risks-small-content">
                            No difference between scheduled labor induction
                            between 41-42 weeks and between 39-41 weeks
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            width="180.45px"
                            height="243px"
                            src={DottedCircle13}
                          />
                        </Grid>
                        <Grid item>
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
                <Grid
                  container
                  className="for-all-rectangle"
                  sx={{
                    pt: "3rem",
                    pb: "2rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xl={7} lg={7} md={7}>
                    <Typography className="potential-risks-small-content">
                      For all three options, there is the same chance of{" "}
                    </Typography>
                  </Grid>
                  <Grid item xl={6} lg={6} md={6}>
                    <Grid container sx={{ mt: "1.5rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        <Typography
                          display="inline"
                          className="potential-risks-small-content2"
                          bgcolor={lightGreen}
                          onClick={handleClick}
                        >
                          Seizure
                        </Typography>
                        <Popup
                          open={open}
                          anchorEl={anchorEl}
                          handleClose={handleClose}
                          title="Seizure"
                          text='Infant seizures are bursts of electrical activity in
                        the brain that can cause chewing motions and
                        "bicycling" movements. They can be caused by the
                        baby not getting enough oxygen during the birth
                        process.'
                        />
                        ,{" "}
                        <Typography
                          display="inline"
                          className="potential-risks-small-content2"
                          bgcolor={lightGreen}
                          onClick={handleClickPneu}
                        >
                          pneumonia
                        </Typography>
                        <Popup
                          open={openPneu}
                          anchorEl={anchorElPneu}
                          handleClose={handleClosePneu}
                          title="Pneumonia"
                          text="Pneumonia is inflammation of the lungs in which tiny air sacs are filled with fluid.
                          It can be caused by bacteria or a virus during the birth process."
                        />
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
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        Needing help from tools like forcepts or a vaccum.{" "}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          6
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        Too much bleeding after birth.{" "}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          6
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
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
          <Grid
            item
            xl={8}
            lg={8}
            md={8}
            sx={{
              mt: "5.4375rem",
            }}
          >
            <Typography className="learn-choices">
              Learn About Your Choices
            </Typography>
          </Grid>
          <Grid container item xl={8} lg={8} md={8} sx={{ mt: "2.7rem" }}>
            <Grid container alignItems="center" justifyContent="space-between">
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

            <Grid
              container
              item
              sx={{ mt: "1.5rem" }}
              justifyContent="space-between"
              xl={11}
              lg={11}
              md={11}
            >
              <Grid item>
                <Link to="/Details">
                  <button className="learn-more-button ">Learn more</button>
                </Link>
              </Grid>
              <Grid item>
                <button className="learn-more-button ">Learn more</button>
              </Grid>
              <Grid item>
                <button className="learn-more-button ">Learn more</button>
              </Grid>
            </Grid>
          </Grid>
          {/*Sources */}'
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sx={{
              mt: "5.5rem",
            }}
          >
            <Accordion>
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
                <Grid sx={{ mt: "1.75rem" }}>
                  <Sources
                    number="7"
                    text1="Coates D, Goodfellow A, Sinclair L. Induction of labour: Experiences of care and decision-making of women and clinicians. 
          Women and Birth. 2020;33:e1-e14. 8. Sotiriadis A, Petousis S, Thilaganathan B, et al. Maternal and perinatal outcomes after elective induction of labor at 39 weeks in uncomplicated singleton pregnancy: a meta-analysis. Ultrasound Obstet Gynecol. 2019;53(1):26-35. doi:10.1002/UOG.20140. "
                    text2="Source"
                  />
                </Grid>
                <Grid sx={{ mt: "1.75rem" }}>
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
            sx={{ mt: "5.25rem" }}
          >
            <Grid item>
              <img src={WilliamImage} id="william-image" />
            </Grid>
            <Grid
              item
              sx={{
                ml: "3rem",
                mt: "159px",
                width: "23.8125rem",
                height: "6.0625rem",
              }}
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
            <Grid item sx={{ ml: "3rem", mt: "1.5rem" }}>
              <Link to="/MyValues">
                <button className="find-out-button ">Find out</button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </StyledEngineProvider>
  );
};

export default MyChoices;
