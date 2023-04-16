import {
  Button,
  Divider,
  Grid,
  Accordion,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { StyledEngineProvider } from "@mui/material/styles";
import { Heart, HeartHalf, TextAlignJustify } from "@phosphor-icons/react";
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
import circle37Weeks from "../siteImages/icons/37_42_weeks.png";
import circle41Weeks from "../siteImages/icons/41_42_weeks.png";
import circle39Weeks from "../siteImages/icons/39_41_weeks.png";
import circle8Hours from "../siteImages/icons/8_24_hours.png";
import circle1Days from "../siteImages/icons/1_3_days.png";
import heart from "../siteImages/icons/full_heart.png";
import half_heart from "../siteImages/icons/half_heart.png";
import circularProgress49 from "../siteImages/icons/49%_circularProgress.png";
import circularProgress52 from "../siteImages/icons/52%_circularProgress.png";
import { Link } from "react-router-dom";
import {
  mychoices_page_title_subtitles,
  mychoices_page_learn_about,
  mychoices_page_risks_accordion,
  mychoices_same,
  mychoices_risk_forall,
  mychoices_source_data,
  mychoices_sections,
} from "../utils/types";
import useFetch from "../hooks/useFetch";

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
  const [languageState, setLanguageState] = useState("en");
  useEffect(() => {
    window.addEventListener("storage", () => {
      console.log(localStorage.getItem("language"));
      setLanguageState(localStorage.getItem("language") || "en");
    });
  }, []);

  const pageTitlesData = useFetch<mychoices_page_title_subtitles>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-page-title?populate=deep&locale=" +
      languageState
  );
  const learnAboutData = useFetch<mychoices_page_learn_about>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-learn-about?populate=deep&locale=" +
      languageState
  );
  const risksAccordionTitle = useFetch<mychoices_page_risks_accordion>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-risks-accordion-title?populate=deep&locale=" +
      languageState
  );
  const sameSection = useFetch<mychoices_same>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-same?populate=deep&locale=" +
      languageState
  );
  const forAll = useFetch<mychoices_risk_forall>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-risks-foralls?populate=content&locale=" +
      languageState
  );
  const sourceData = useFetch<mychoices_source_data>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-source-accordions?populate=deep&locale=" +
      languageState
  );
  const sectionsData = useFetch<mychoices_sections>(
    "https://se-shared-decision-making-production.up.railway.app" +
      "/api/my-choices-sections?populate[title][populate]=*&populate[content1][populate]=*&locale=" +
      languageState
  );
  console.log(sectionsData?.data[0].attributes.content1[0].content1);
  console.log(
    sectionsData?.data[0].attributes.content1[0].picture1.data.attributes.url
  );
  console.log(sectionsData?.data[0].attributes.title.title);
  console.log(sectionsData?.data[0].attributes.title.description);
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
              {pageTitlesData?.data.attributes.pageTitle}
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
              <Typography>
                {pageTitlesData?.data.attributes.subTitle1}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {pageTitlesData?.data.attributes.subTitle2}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {pageTitlesData?.data.attributes.subTitle3}
              </Typography>
            </Grid>
          </Grid>
          {/* Details Part */}
          {/* section Timing */}
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12}>
                <Typography className="FourTagsStyle"> Timing</Typography>
              </Grid>
              <Grid item xl={12} lg={12} md={12}>
                <Typography className="four-tags-subtitle">
                  {" "}
                  Most likely to happen between
                </Typography>
              </Grid>
              {/* line */}
              <Grid item xl={12} lg={12} md={12}>
                <Divider sx={{ mt: "1rem" }} className="vector" />
              </Grid>
            </Grid>
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={10}
              lg={10}
              md={10}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <img src={circle37Weeks} />
              </Grid>
              <Grid item>
                <img src={circle41Weeks} />
              </Grid>
              <Grid item>
                <img src={circle39Weeks} />
              </Grid>
            </Grid>
          </Grid>
          {/* section Labor Time */}
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12}>
                <Typography className="FourTagsStyle"> Labor Time</Typography>
              </Grid>
              <Grid item xl={12} lg={12} md={12}>
                <Typography className="four-tags-subtitle">
                  {" "}
                  Sometimes longer or shorter
                </Typography>
              </Grid>
              {/* line */}
              <Grid item xl={12} lg={12} md={12}>
                <Divider sx={{ mt: "1rem" }} className="vector" />
              </Grid>
            </Grid>
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={10}
              lg={10}
              md={10}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item>
                <img src={circle8Hours} />
              </Grid>
              <Grid item>
                <img src={circle1Days} />
              </Grid>
              <Grid item>
                <img src={circle1Days} />
              </Grid>
            </Grid>
          </Grid>
          {/* Experience Section */}
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12}>
                <Typography display="inline" className="FourTagsStyle">
                  {" "}
                  Experience
                </Typography>
                <Typography display="inline" className="experience-7">
                  7
                </Typography>
              </Grid>

              {/* line */}
              <Grid item xl={12} lg={12} md={12}>
                <Divider sx={{ mt: "1rem" }} className="vector" />
              </Grid>
            </Grid>
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={9}
              lg={9}
              md={9}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item xl={5} lg={5} md={5}>
                <Grid item xl={12} lg={12} md={12}>
                  <img src={heart} />
                </Grid>
                <Grid item xl={5} lg={5} md={5} sx={{ mt: "1rem" }}>
                  <Typography className="experience-body-content">
                    More satisfied with care (less waiting, fewer interventions)
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xl={5} lg={5} md={5}>
                <Grid item xl={12} lg={12} md={12}>
                  <img src={half_heart} />
                </Grid>
                <Grid
                  item
                  xl={5}
                  lg={5}
                  md={5}
                  sx={{
                    mt: "1rem",
                    ml: "9rem",
                  }}
                >
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
            item
            xl={8}
            lg={8}
            md={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            <Grid container>
              <Grid item xl={12} lg={12} md={12}>
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
              <Grid item xl={12} lg={12} md={12}>
                <Divider sx={{ mt: "1rem" }} className="vector" />
              </Grid>
            </Grid>
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={9}
              lg={9}
              md={9}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item xl={5} lg={5} md={5}>
                <Grid item xl={12} lg={12} md={12}>
                  <img src={circularProgress49} />
                </Grid>
                <Grid item xl={5} lg={5} md={5} sx={{ mt: "1rem" }}>
                  <Typography className="experience-body-content"> </Typography>
                </Grid>
              </Grid>

              <Grid item xl={5} lg={5} md={5}>
                <Grid item xl={12} lg={12} md={12}>
                  <img src={circularProgress52} />
                </Grid>
                <Grid
                  item
                  xl={7}
                  lg={7}
                  md={7}
                  sx={{
                    mt: "3rem",
                    ml: "7rem",
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
          <Grid container sx={{ justifyContent: "center" }}>
            <Grid
              item
              sx={{
                mt: "5rem",
              }}
            >
              <Grid className="same-rectangle" item>
                <Typography display="inline" className="same-for-all-opts">
                  {sameSection?.data.attributes.content1}
                </Typography>
                <Typography display="inline" className="same-breastfeed">
                  {sameSection?.data.attributes.content2}
                </Typography>
                <Typography display="inline" className="same-for-all-opts">
                  {sameSection?.data.attributes.number}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Potential Risks Section */}
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* title */}
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sx={{
                alignItems: "center",
                justifyContent: "center",
                mt: "6rem",
              }}
            >
              <Grid item xl={12} lg={12} md={12}>
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
              <Grid item xl={12} lg={12} md={12}>
                <Typography className="potential-risks-subtitle">
                  {" "}
                  The section contains information about risks to babies. It is
                  included for informed decision-making.
                </Typography>
              </Grid>
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
                      {risksAccordionTitle?.data.attributes.title}
                    </Typography>
                  </Grid>
                </AccordionSummary>
                <AccordionDetails className="view-risks-details">
                  <Grid
                    container
                    sx={{
                      mt: "4.5rem",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Grid
                      container
                      item
                      xl={11}
                      lg={11}
                      md={11}
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12}>
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
                        <Grid item xl={12} lg={12} md={12}>
                          <Divider
                            sx={{ mt: "0.75rem" }}
                            className="vector-risks"
                          />
                        </Grid>
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
                            height="283px"
                            src={DottedCircle19}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xl={11}
                      lg={11}
                      md={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                      }}
                    >
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12}>
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
                        <Grid item xl={12} lg={12} md={12}>
                          <Divider
                            sx={{ mt: "0.75rem" }}
                            className="vector-risks"
                          />
                        </Grid>
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
                        <Grid item xl={5} lg={5} md={5}>
                          <Grid item xl={12} lg={12} md={12}>
                            <img
                              width="180.45px"
                              height="239px"
                              src={DottedCircle6}
                            />
                          </Grid>
                          <Grid item>
                            <Typography className="potential-risks-small-content"></Typography>
                          </Grid>
                        </Grid>
                        <Grid item xl={5} lg={5} md={5}>
                          <Grid item xl={12} lg={12} md={12}>
                            <img
                              width="446px"
                              height="239px"
                              src={DottedCircle5}
                            />
                          </Grid>
                          <Grid item sx={{ mt: "2rem" }}>
                            <Typography className="potential-risks-small-content">
                              No difference between scheduled labor induction
                              between 41-42 weeks and between 39-41 weeks
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xl={11}
                      lg={11}
                      md={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                      }}
                    >
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12}>
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
                        <Grid item xl={12} lg={12} md={12}>
                          <Divider
                            sx={{ mt: "0.75rem" }}
                            className="vector-risks"
                          />
                        </Grid>
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
                        <Grid item xl={5} lg={5} md={5}>
                          <Grid item xl={12} lg={12} md={12}>
                            <img
                              width="180.45px"
                              height="254px"
                              src={DottedCircle04}
                            />
                          </Grid>
                          <Grid item>
                            <Typography className="potential-risks-small-content"></Typography>
                          </Grid>
                        </Grid>
                        <Grid item xl={5} lg={5} md={5}>
                          <Grid item xl={12} lg={12} md={12}>
                            <img
                              width="449px"
                              height="264px"
                              src={DottedCircle01}
                            />
                          </Grid>
                          <Grid item>
                            <Typography className="potential-risks-small-content">
                              No difference between scheduled labor induction
                              between 41-42 weeks and between 39-41 weeks
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      item
                      xl={11}
                      lg={11}
                      md={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                        mb: "1.5rem",
                      }}
                    >
                      <Grid container>
                        <Grid item xl={12} lg={12} md={12}>
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
                        <Grid
                          item
                          xl={12}
                          lg={12}
                          md={12}
                          sx={{ mt: "0.5rem" }}
                        >
                          <Typography className="four-tags-subtitle">
                            {" "}
                            High blood pressure
                          </Typography>
                        </Grid>

                        {/* line */}
                        <Grid item xl={12} lg={12} md={12}>
                          <Divider
                            sx={{ mt: "0.75rem" }}
                            className="vector-risks"
                          />
                        </Grid>
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
                        <Grid item xl={2} lg={2} md={2}>
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
                      {forAll?.data[0].attributes.title}
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
                          {forAll?.data[0].attributes.content[0].popup1}
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
                          {forAll?.data[0].attributes.content[0].popup1}
                        </Typography>
                        <Popup
                          open={openPneu}
                          anchorEl={anchorElPneu}
                          handleClose={handleClosePneu}
                          title="Pneumonia"
                          text="Pneumonia is inflammation of the lungs in which tiny air sacs are filled with fluid.
                          It can be caused by bacteria or a virus during the birth process."
                        />
                        {forAll?.data[0].attributes.content[0].content}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          {forAll?.data[0].attributes.content[0].number}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        {forAll?.data[0].attributes.content[1].content}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          {forAll?.data[0].attributes.content[1].number}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        {forAll?.data[0].attributes.content[2].content}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          {forAll?.data[0].attributes.content[2].number}
                        </Typography>
                      </Typography>
                    </Grid>
                    <Grid container sx={{ mt: "1rem" }}>
                      <Typography className="potential-risks-small-content2">
                        <FiberManualRecordIcon
                          sx={{ fontSize: 10, pr: "0.3125rem" }}
                        />
                        {forAll?.data[0].attributes.content[3].content}
                        <Typography
                          display="inline"
                          className="for-all-small-number"
                        >
                          {forAll?.data[0].attributes.content[3].number}
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
              {learnAboutData?.data.attributes.title}
            </Typography>
          </Grid>
          <Grid container item xl={8} lg={8} md={8} sx={{ mt: "2.7rem" }}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography className="learn-choices-subTitle">
                  {learnAboutData?.data.attributes.subTitle1}
                </Typography>
              </Grid>
              <Grid item>
                <Typography className="learn-choices-subTitle">
                  {learnAboutData?.data.attributes.subTitle2}
                </Typography>
              </Grid>

              <Grid item>
                <Typography className="learn-choices-subTitle">
                  {learnAboutData?.data.attributes.subTitle3}
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
                  <button className="learn-more-button ">
                    {learnAboutData?.data.attributes.button1}
                  </button>
                </Link>
              </Grid>
              <Grid item>
                <button className="learn-more-button ">
                  {learnAboutData?.data.attributes.button2}
                </button>
              </Grid>
              <Grid item>
                <button className="learn-more-button ">
                  {learnAboutData?.data.attributes.button3}
                </button>
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
                {sourceData?.data.map((item) => (
                  <Grid sx={{ mt: "1.75rem" }}>
                    <Sources
                      key={item.id}
                      number={item.attributes.sourceNum}
                      text1={item.attributes.sourceContent}
                      text2={item.attributes.sourceLinkText}
                    />
                  </Grid>
                ))}
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
