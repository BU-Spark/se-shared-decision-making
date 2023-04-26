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
import "./pageStyle/MyChoices.scss";
import { Sources } from "../components/AccordionContent/Sources";
import { Popup } from "../components/Popup";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Link } from "react-router-dom";
import {
  mychoices_page_title_subtitles,
  mychoices_page_learn_about,
  mychoices_page_risks_accordion,
  mychoices_same,
  mychoices_risk_forall,
  mychoices_source_data,
  mychoices_sections,
  mychoices_needhelp,
} from "../utils/types";
import useFetch from "../hooks/useFetch";
import { REACT_APP_api_base_url, DEFAULT_LANGUAGE } from "../utils/url_config";
import axios from "axios";

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
  const [pageTitlesData, setPageTitlesData] =
    useState<mychoices_page_title_subtitles>();
  const [learnAboutData, setLearnAboutData] =
    useState<mychoices_page_learn_about>();
  const [risksAccordionTitle, setRisksAccordionTitle] =
    useState<mychoices_page_risks_accordion>();
  const [sameSection, setSameSection] = useState<mychoices_same>();
  const [forAll, setForAll] = useState<mychoices_risk_forall>();
  const [sourceData, setSourceData] = useState<mychoices_source_data>();
  const [sectionsData, setSectionsData] = useState<mychoices_sections>();
  const [needHelpData, setNeedHelpData] = useState<mychoices_needhelp>();

  useEffect(() => {
    window.addEventListener("storage", () => {
      setLanguageState(localStorage.getItem("language") || "en");
    });
  }, []);
  useEffect(() => {
    const fetchPageTitlesData = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-page-title?populate=deep&locale=" +
            localStorage.getItem("language")
        );
        setPageTitlesData(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-page-title?populate=deep&locale=" +
              DEFAULT_LANGUAGE
          );
          setPageTitlesData(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchLearnAboutData = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-learn-about?populate=deep&locale=" +
            localStorage.getItem("language")
        );
        setLearnAboutData(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-learn-about?populate=deep&locale=en"
          );
          setLearnAboutData(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };

    const fetchRisksAccordionTitle = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-risks-accordion-title?populate=deep&locale=" +
            localStorage.getItem("language")
        );
        setRisksAccordionTitle(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-risks-accordion-title?populate=deep&locale=en"
          );
          setRisksAccordionTitle(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchSameSection = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-same?populate=deep&locale=" +
            localStorage.getItem("language")
        );
        setSameSection(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-same?populate=deep&locale=" +
              DEFAULT_LANGUAGE
          );
          setSameSection(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchForAll = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-risks-foralls?populate=content&locale=" +
            localStorage.getItem("language")
        );
        setForAll(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-risks-foralls?populate=content&locale=" +
              DEFAULT_LANGUAGE
          );
          setForAll(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchSourceData = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-source-accordions?populate=deep&locale=" +
            localStorage.getItem("language")
        );
        setSourceData(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-source-accordions?populate=deep&locale=" +
              DEFAULT_LANGUAGE
          );
          setSourceData(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchSectionData = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-sections?populate[title][populate]=*&populate[content1][populate]=*&populate[content2][populate]=*&populate[content3][populate]=*&locale=" +
            localStorage.getItem("language")
        );
        setSectionsData(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-sections?populate[title][populate]=*&populate[content1][populate]=*&populate[content2][populate]=*&populate[content3][populate]=*&locale=" +
              DEFAULT_LANGUAGE
          );
          setSectionsData(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    const fetchNeedHelpData = async () => {
      try {
        const result = await axios.get(
          REACT_APP_api_base_url +
            "/api/my-choices-need-help?populate=*&locale=" +
            localStorage.getItem("language")
        );
        setNeedHelpData(result.data);
      } catch (error) {
        console.error("Error fetching learn about data: ", error);
        try {
          const result = await axios.get(
            REACT_APP_api_base_url +
              "/api/my-choices-need-help?populate=*&locale=" +
              DEFAULT_LANGUAGE
          );
          setNeedHelpData(result.data);
        } catch (error) {
          console.error(
            "Error fetching learn about data with default locale: ",
            error
          );
        }
      }
    };
    fetchPageTitlesData();
    fetchLearnAboutData();
    fetchRisksAccordionTitle();
    fetchSameSection();
    fetchForAll();
    fetchSourceData();
    fetchSectionData();
    fetchNeedHelpData();
  }, [languageState]);

  // for strapi purpose:
  // interface Response {
  //   data: [] | ApiHomePageeHomePagee[];
  // }
  // const defaultResponse = { data: [] };

  // const data: Response = useFetch<Response>(
  //   "http://localhost:1337/api/home-pagees?populate=*", defaultResponse
  // );

  // console.log("data" + data.data[0].attributes);
  console.log(sectionsData);
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        {/* section for Title */}

        {/* Main title */}
        <Grid
          container
          columns={{ xl: 12, lg: 12, md: 12, sm: 12, xs: 12 }}
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
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
            sm={8}
            xs={8}
            sx={{
              mb: "2rem",
              mt: "5.1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            {/* mt:"81px" */}
            {pageTitlesData?.data.attributes.pageTitle != null ? (
              <Typography className="compare-your-choices">
                {pageTitlesData?.data.attributes.pageTitle}
              </Typography>
            ) : null}
          </Grid>
          {/* Sub title */}
          <Grid
            container
            item
            className="subTitle"
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            sx={{
              justifyContent: "space-between",
              mt: "1.6rem",
            }}
          >
            <Grid item>
              {pageTitlesData?.data.attributes.subTitle1 != null ? (
                <Typography>
                  {pageTitlesData?.data.attributes.subTitle1}
                </Typography>
              ) : null}
            </Grid>
            <Grid item>
              {pageTitlesData?.data.attributes.subTitle2 != null ? (
                <Typography>
                  {pageTitlesData?.data.attributes.subTitle2}
                </Typography>
              ) : null}
            </Grid>
            <Grid item>
              {pageTitlesData?.data.attributes.subTitle3 != null ? (
                <Typography>
                  {pageTitlesData?.data.attributes.subTitle3}
                </Typography>
              ) : null}
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
            sm={8}
            xs={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            {sectionsData?.data[0].attributes.title != null ? (
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography className="FourTagsStyle">
                    {" "}
                    {sectionsData?.data[0].attributes.title.title}
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography className="four-tags-subtitle">
                    {" "}
                    {sectionsData?.data[0].attributes.title.description}
                  </Typography>
                </Grid>
                {/* line */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider sx={{ mt: "1rem" }} className="vector" />
                </Grid>
              </Grid>
            ) : null}
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={10}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              {sectionsData?.data[0].attributes.content1[0].picture1.data
                .attributes.url != null ? (
                <Grid item width="10rem" height="10rem">
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[0].attributes.content1[0].picture1.data
                        .attributes.url
                    }
                  />
                </Grid>
              ) : null}
              {REACT_APP_api_base_url +
                sectionsData?.data[0].attributes.content2[0].picture1.data
                  .attributes.url !=
              null ? (
                <Grid item width="10rem" height="10rem">
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[0].attributes.content2[0].picture1.data
                        .attributes.url
                    }
                  />
                </Grid>
              ) : null}
              {REACT_APP_api_base_url +
                sectionsData?.data[0].attributes.content3[0].picture1.data
                  .attributes.url !=
              null ? (
                <Grid item width="10rem" height="10rem">
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[0].attributes.content3[0].picture1.data
                        .attributes.url
                    }
                  />
                </Grid>
              ) : null}
            </Grid>
          </Grid>
          {/* section Labor Time */}
          <Grid
            container
            item
            xl={8}
            lg={8}
            md={8}
            sm={8}
            xs={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            {sectionsData?.data[1].attributes.title != null ? (
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography className="FourTagsStyle">
                    {" "}
                    {sectionsData?.data[1].attributes.title.title}
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography className="four-tags-subtitle">
                    {" "}
                    {sectionsData?.data[1].attributes.title.description}
                  </Typography>
                </Grid>
                {/* line */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider sx={{ mt: "1rem" }} className="vector" />
                </Grid>
              </Grid>
            ) : null}
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={10}
              lg={10}
              md={10}
              sm={10}
              xs={10}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item width="10rem" height="10rem">
                {REACT_APP_api_base_url +
                  sectionsData?.data[1].attributes.content1[0].picture1.data
                    .attributes.url !=
                null ? (
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[1].attributes.content1[0].picture1.data
                        .attributes.url
                    }
                  />
                ) : null}
              </Grid>
              <Grid item width="10rem" height="10rem">
                {REACT_APP_api_base_url +
                  sectionsData?.data[1].attributes.content2[0].picture1.data
                    .attributes.url !=
                null ? (
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[1].attributes.content2[0].picture1.data
                        .attributes.url
                    }
                  />
                ) : null}
              </Grid>
              <Grid item width="10rem" height="10rem">
                {REACT_APP_api_base_url +
                  sectionsData?.data[1].attributes.content3[0].picture1.data
                    .attributes.url !=
                null ? (
                  <img
                    width="100%"
                    height="100%"
                    src={
                      REACT_APP_api_base_url +
                      sectionsData?.data[1].attributes.content3[0].picture1.data
                        .attributes.url
                    }
                  />
                ) : null}
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
            sm={8}
            xs={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            {sectionsData?.data[2].attributes.title != null ? (
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography display="inline" className="FourTagsStyle">
                    {" "}
                    {sectionsData?.data[2].attributes.title.title}
                  </Typography>
                  <Typography display="inline" className="experience-7">
                    {sectionsData?.data[2].attributes.title.titleNumber}
                  </Typography>
                </Grid>

                {/* line */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider sx={{ mt: "1rem" }} className="vector" />
                </Grid>
              </Grid>
            ) : null}
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={9}
              lg={9}
              md={9}
              sm={9}
              xs={9}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  width="2.539375rem"
                  height="2.34375"
                >
                  {REACT_APP_api_base_url +
                    sectionsData?.data[2].attributes.content1[0].picture1.data
                      .attributes.url !=
                  null ? (
                    <img
                      width="100%"
                      height="100%"
                      src={
                        REACT_APP_api_base_url +
                        sectionsData?.data[2].attributes.content1[0].picture1
                          .data.attributes.url
                      }
                    />
                  ) : null}
                </Grid>
                <Grid
                  item
                  sx={{ mt: "1rem" }}
                  width="10.6875rem"
                  height="4.5625rem"
                >
                  {sectionsData?.data[2].attributes.content1[0].content1 !=
                  null ? (
                    <Typography className="experience-body-content">
                      {sectionsData?.data[2].attributes.content1[0].content1}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>

              <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  width="26.5625rem"
                  height="3.025rem"
                >
                  {REACT_APP_api_base_url +
                    sectionsData?.data[2].attributes.content2[0].picture1.data
                      .attributes.url !=
                  null ? (
                    <img
                      width="100%"
                      height="100%"
                      src={
                        REACT_APP_api_base_url +
                        sectionsData?.data[2].attributes.content2[0].picture1
                          .data.attributes.url
                      }
                    />
                  ) : null}
                </Grid>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  width="10.6875rem"
                  height="4.5625rem"
                  sx={{
                    mt: "1rem",
                    ml: "7.5rem",
                  }}
                >
                  {sectionsData?.data[2].attributes.content2[0].content1 !=
                  null ? (
                    <Typography className="experience-body-content">
                      {sectionsData?.data[2].attributes.content2[0].content1}
                    </Typography>
                  ) : null}
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
            sm={8}
            xs={8}
            sx={{ alignItems: "center", justifyContent: "center", mt: "6rem" }}
          >
            {sectionsData?.data[3].attributes.title != null ? (
              <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography display="inline" className="FourTagsStyle">
                    {" "}
                    {sectionsData?.data[3].attributes.title.title}
                  </Typography>
                  <Typography display="inline" className="experience-7">
                    {" "}
                    {sectionsData?.data[3].attributes.title.titleNumber}
                  </Typography>
                </Grid>

                {/* line */}
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Divider sx={{ mt: "1rem" }} className="vector" />
                </Grid>
              </Grid>
            ) : null}
            {/* section of data (and circles) */}
            <Grid
              container
              item
              xl={9}
              lg={9}
              md={9}
              sm={9}
              xs={9}
              sx={{
                mt: "4rem",
                justifyContent: "space-between",
              }}
            >
              <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  width="10rem"
                  height="10rem"
                >
                  {REACT_APP_api_base_url +
                    sectionsData?.data[3].attributes.content1[0].picture1.data
                      .attributes.url !=
                  null ? (
                    <img
                      width="100%"
                      height="100%"
                      src={
                        REACT_APP_api_base_url +
                        sectionsData?.data[3].attributes.content1[0].picture1
                          .data.attributes.url
                      }
                    />
                  ) : null}
                </Grid>
                <Grid
                  item
                  xl={7}
                  lg={7}
                  md={7}
                  sm={7}
                  xs={7}
                  sx={{ mt: "1rem" }}
                >
                  <Typography className="experience-body-content"> </Typography>
                </Grid>
              </Grid>

              <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                <Grid
                  item
                  xl={12}
                  lg={12}
                  md={12}
                  sm={12}
                  xs={12}
                  width="27.5625rem"
                  height="10rem"
                  sx={{ ml: "4.5rem" }}
                >
                  {REACT_APP_api_base_url +
                    sectionsData?.data[3].attributes.content2[0].picture1.data
                      .attributes.url !=
                  null ? (
                    <img
                      width="100%"
                      height="100%"
                      src={
                        REACT_APP_api_base_url +
                        sectionsData?.data[3].attributes.content2[0].picture1
                          .data.attributes.url
                      }
                    />
                  ) : null}
                </Grid>
                <Grid
                  item
                  xl={7}
                  lg={7}
                  md={7}
                  sm={7}
                  xs={7}
                  sx={{
                    mt: "3rem",
                    ml: "10rem",
                  }}
                >
                  {sectionsData?.data[3].attributes.content2[0].content1 !=
                  null ? (
                    <Typography className="no-difference">
                      {sectionsData?.data[3].attributes.content2[0].content1}
                    </Typography>
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* Same */}
          {sameSection?.data.attributes != null ? (
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
          ) : null}
          {/* Potential Risks Section */}
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "center" }}
          >
            {/* title */}
            {sectionsData?.data[4].attributes.title != null ? (
              <Grid
                container
                item
                xl={8}
                lg={8}
                md={8}
                sm={8}
                xs={8}
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  mt: "6rem",
                }}
              >
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography
                    display="inline"
                    className="potential-risks-title"
                    variant="h4"
                  >
                    {sectionsData?.data[4].attributes.title.title}
                  </Typography>
                  <Typography display="inline" className="potential-risks-6">
                    {" "}
                    {sectionsData?.data[4].attributes.title.titleNumber}
                  </Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                  <Typography className="potential-risks-subtitle">
                    {" "}
                    {sectionsData?.data[4].attributes.title.description}
                  </Typography>
                </Grid>
              </Grid>
            ) : null}

            {/* view risks */}

            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
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
                  {risksAccordionTitle?.data.attributes.title != null ? (
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
                  ) : null}
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
                      sm={11}
                      xs={11}
                      sx={{ alignItems: "center", justifyContent: "center" }}
                    >
                      {sectionsData?.data[5].attributes.title != null ? (
                        <Grid container>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography
                              display="inline"
                              className="FourTagsStyle"
                              bgcolor={lightGreen}
                            >
                              {" "}
                              {sectionsData?.data[5].attributes.title.title}
                            </Typography>
                            <Typography
                              sx={{ ml: "0.25rem" }}
                              display="inline"
                              className="cesarean-birth-8"
                            >
                              {
                                sectionsData?.data[5].attributes.title
                                  .titleNumber
                              }
                            </Typography>
                          </Grid>

                          {/* line */}
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Divider
                              sx={{ mt: "0.75rem" }}
                              className="vector-risks"
                            />
                          </Grid>
                        </Grid>
                      ) : null}
                      <Grid
                        container
                        item
                        xl={10}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        sx={{
                          mt: "4rem",
                        }}
                        justifyContent="space-between"
                      >
                        <Grid item>
                          {sectionsData?.data[5].attributes.content1[0].picture1
                            .data.attributes.url != null ? (
                            <img
                              width="180.45px"
                              height="243px"
                              src={
                                REACT_APP_api_base_url +
                                sectionsData?.data[5].attributes.content1[0]
                                  .picture1.data.attributes.url
                              }
                            />
                          ) : null}
                        </Grid>
                        <Grid item>
                          {REACT_APP_api_base_url +
                            sectionsData?.data[5].attributes.content2[0]
                              .picture1.data.attributes.url !=
                          null ? (
                            <img
                              width="180.45px"
                              height="243px"
                              src={
                                REACT_APP_api_base_url +
                                sectionsData?.data[5].attributes.content2[0]
                                  .picture1.data.attributes.url
                              }
                            />
                          ) : null}
                        </Grid>
                        <Grid item>
                          {REACT_APP_api_base_url +
                            sectionsData?.data[5].attributes.content3[0]
                              .picture1.data.attributes.url !=
                          null ? (
                            <img
                              width="180.45px"
                              height="283px"
                              src={
                                REACT_APP_api_base_url +
                                sectionsData?.data[5].attributes.content3[0]
                                  .picture1.data.attributes.url
                              }
                            />
                          ) : null}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      item
                      xl={11}
                      lg={11}
                      md={11}
                      sm={11}
                      xs={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                      }}
                    >
                      {sectionsData?.data[6].attributes.title != null ? (
                        <Grid container>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography
                              display="inline"
                              className="FourTagsStyle"
                            >
                              {" "}
                              {sectionsData?.data[6].attributes.title.title}
                            </Typography>
                            <Typography
                              sx={{ ml: "0.25rem" }}
                              display="inline"
                              className="cesarean-birth-8"
                            >
                              {
                                sectionsData?.data[6].attributes.title
                                  .titleNumber
                              }
                            </Typography>
                          </Grid>

                          {/* line */}
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Divider
                              sx={{ mt: "0.75rem" }}
                              className="vector-risks"
                            />
                          </Grid>
                        </Grid>
                      ) : null}
                      <Grid
                        container
                        item
                        xl={10}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        sx={{
                          mt: "4rem",
                        }}
                        justifyContent="space-between"
                      >
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            {REACT_APP_api_base_url +
                              sectionsData?.data[6].attributes.content1[0]
                                .picture1.data.attributes.url !=
                            null ? (
                              <img
                                width="180.45px"
                                height="239px"
                                src={
                                  REACT_APP_api_base_url +
                                  sectionsData?.data[6].attributes.content1[0]
                                    .picture1.data.attributes.url
                                }
                              />
                            ) : null}
                          </Grid>
                          <Grid item>
                            <Typography className="potential-risks-small-content"></Typography>
                          </Grid>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            {REACT_APP_api_base_url +
                              sectionsData?.data[6].attributes.content2[0]
                                .picture1.data.attributes.url !=
                            null ? (
                              <img
                                width="446px"
                                height="239px"
                                src={
                                  REACT_APP_api_base_url +
                                  sectionsData?.data[6].attributes.content2[0]
                                    .picture1.data.attributes.url
                                }
                              />
                            ) : null}
                          </Grid>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid
                              item
                              xl={8}
                              lg={8}
                              md={8}
                              sm={8}
                              xs={8}
                              sx={{
                                mt: "2rem",
                                ml: "6.3rem",
                              }}
                            >
                              {sectionsData?.data[6].attributes.content2[0]
                                .content1 != null ? (
                                <Typography className="potential-risks-small-content">
                                  {
                                    sectionsData?.data[6].attributes.content2[0]
                                      .content1
                                  }
                                </Typography>
                              ) : null}
                            </Grid>
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
                      sm={11}
                      xs={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                      }}
                    >
                      {sectionsData?.data[7].attributes.title != null ? (
                        <Grid container>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography
                              display="inline"
                              className="FourTagsStyle"
                            >
                              {" "}
                              {sectionsData?.data[7].attributes.title.title}
                            </Typography>
                            <Typography
                              sx={{ ml: "0.25rem" }}
                              display="inline"
                              className="cesarean-birth-8"
                            >
                              {
                                sectionsData?.data[7].attributes.title
                                  .titleNumber
                              }
                            </Typography>
                          </Grid>

                          {/* line */}
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Divider
                              sx={{ mt: "0.75rem" }}
                              className="vector-risks"
                            />
                          </Grid>
                        </Grid>
                      ) : null}
                      <Grid
                        container
                        item
                        xl={10}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        sx={{
                          mt: "4rem",
                        }}
                        justifyContent="space-between"
                      >
                        <Grid item xl={5} lg={5} md={5} sm={5} xs={5}>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            {REACT_APP_api_base_url +
                              sectionsData?.data[7].attributes.content1[0]
                                .picture1.data.attributes.url !=
                            null ? (
                              <img
                                width="180.45px"
                                height="254px"
                                src={
                                  REACT_APP_api_base_url +
                                  sectionsData?.data[7].attributes.content1[0]
                                    .picture1.data.attributes.url
                                }
                              />
                            ) : null}
                          </Grid>
                          <Grid item>
                            <Typography className="potential-risks-small-content"></Typography>
                          </Grid>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            {REACT_APP_api_base_url +
                              sectionsData?.data[7].attributes.content2[0]
                                .picture1.data.attributes.url !=
                            null ? (
                              <img
                                width="449px"
                                height="264px"
                                src={
                                  REACT_APP_api_base_url +
                                  sectionsData?.data[7].attributes.content2[0]
                                    .picture1.data.attributes.url
                                }
                              />
                            ) : null}
                          </Grid>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid
                              item
                              xl={8}
                              lg={8}
                              md={8}
                              sm={8}
                              xs={8}
                              sx={{
                                mt: "2rem",
                                ml: "6.3rem",
                              }}
                            >
                              {sectionsData?.data[7].attributes.content2[0]
                                .content1 != null ? (
                                <Typography className="potential-risks-small-content">
                                  {
                                    sectionsData?.data[7].attributes.content2[0]
                                      .content1
                                  }
                                </Typography>
                              ) : null}
                            </Grid>
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
                      sm={11}
                      xs={11}
                      sx={{
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "1.5rem",
                        mb: "1.5rem",
                      }}
                    >
                      {sectionsData?.data[8].attributes.title != null ? (
                        <Grid container>
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography
                              display="inline"
                              className="FourTagsStyle"
                            >
                              {" "}
                              {sectionsData?.data[8].attributes.title.title}
                            </Typography>
                            <Typography
                              sx={{ ml: "0.25rem" }}
                              display="inline"
                              className="cesarean-birth-8"
                            >
                              {
                                sectionsData?.data[8].attributes.title
                                  .titleNumber
                              }
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            xl={12}
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            sx={{ mt: "0.5rem" }}
                          >
                            <Typography className="four-tags-subtitle">
                              {" "}
                              {
                                sectionsData?.data[8].attributes.title
                                  .description
                              }
                            </Typography>
                          </Grid>

                          {/* line */}
                          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Divider
                              sx={{ mt: "0.75rem" }}
                              className="vector-risks"
                            />
                          </Grid>
                        </Grid>
                      ) : null}
                      <Grid
                        container
                        item
                        xl={10}
                        lg={10}
                        md={10}
                        sm={10}
                        xs={10}
                        sx={{
                          mt: "4rem",
                        }}
                        justifyContent="space-between"
                      >
                        <Grid
                          item
                          xl={3}
                          lg={3}
                          md={3}
                          sm={3}
                          xs={3}
                          sx={{ mt: "4.5rem" }}
                        >
                          {sectionsData?.data[8].attributes.content1[0]
                            .content1 != null ? (
                            <Typography className="potential-risks-small-content">
                              {
                                sectionsData?.data[8].attributes.content1[0]
                                  .content1
                              }
                            </Typography>
                          ) : null}
                        </Grid>
                        <Grid item>
                          {REACT_APP_api_base_url +
                            sectionsData?.data[8].attributes.content2[0]
                              .picture1.data.attributes.url !=
                          null ? (
                            <img
                              width="180.45px"
                              height="243px"
                              src={
                                REACT_APP_api_base_url +
                                sectionsData?.data[8].attributes.content2[0]
                                  .picture1.data.attributes.url
                              }
                            />
                          ) : null}
                        </Grid>

                        <Grid item>
                          {REACT_APP_api_base_url +
                            sectionsData?.data[8].attributes.content3[0]
                              .picture1.data.attributes.url !=
                          null ? (
                            <img
                              width="180.45px"
                              height="235.66px"
                              src={
                                REACT_APP_api_base_url +
                                sectionsData?.data[8].attributes.content3[0]
                                  .picture1.data.attributes.url
                              }
                            />
                          ) : null}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </AccordionDetails>
                {forAll ? (
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
                    <Grid item xl={7} lg={7} md={7} sm={7} xs={7}>
                      <Typography className="potential-risks-small-content">
                        {forAll?.data[0].attributes.title}
                      </Typography>
                    </Grid>
                    <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
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
                            title={forAll?.data[1].attributes.title}
                            text={forAll?.data[1].attributes.content[0].content}
                          />{" "}
                          <Typography
                            display="inline"
                            className="potential-risks-small-content2"
                            bgcolor={lightGreen}
                            onClick={handleClickPneu}
                          >
                            {forAll?.data[0].attributes.content[0].popup2}
                          </Typography>
                          <Popup
                            open={openPneu}
                            anchorEl={anchorElPneu}
                            handleClose={handleClosePneu}
                            title={forAll?.data[2].attributes.title}
                            text={forAll?.data[2].attributes.content[0].content}
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
                ) : null}
              </Accordion>
            </Grid>
          </Grid>
          {/* Learn about your choices */}
          {learnAboutData ? (
            <Grid
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              sx={{
                mt: "5.4375rem",
              }}
            >
              <Typography className="learn-choices">
                {learnAboutData?.data.attributes.title}
              </Typography>
            </Grid>
          ) : null}
          {learnAboutData ? (
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
              sx={{ mt: "2.7rem" }}
            >
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
              >
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
                sm={11}
                xs={11}
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
          ) : null}
          {/*Sources */}'
          {sourceData ? (
            <Grid
              container
              item
              xl={8}
              lg={8}
              md={8}
              sm={8}
              xs={8}
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
          ) : null}
          {/* need help */}
          {needHelpData ? (
            <Grid
              container
              item
              className="need-help"
              xl={12}
              lg={12}
              md={12}
              sm={12}
              xs={12}
              direction="column"
              sx={{ mt: "5.25rem" }}
            >
              <Grid item width="16.4375rem" height="25.6875rem">
                <img
                  src={
                    REACT_APP_api_base_url +
                    needHelpData?.data.attributes.helpImage.data.attributes.url
                  }
                  id="william-image"
                />
              </Grid>
              <Grid
                item
                sx={{
                  ml: "3rem",
                  mt: "9.9375rem",
                  width: "23.8125rem",
                  height: "6.0625rem",
                }}
              >
                <Typography className="need-help-choosing">
                  {needHelpData?.data.attributes.title}
                </Typography>
                <Typography className="need-help-choosing-text">
                  {needHelpData?.data.attributes.content}
                </Typography>
              </Grid>
              <Grid item></Grid>
              <Grid item sx={{ ml: "3rem", mt: "1.5rem" }}>
                <Link to="/MyValues">
                  <button className="find-out-button ">
                    {needHelpData?.data.attributes.buttonContent}
                  </button>
                </Link>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      </Layout>
    </StyledEngineProvider>
  );
};

export default MyChoices;
