import "./pageStyle/Home.scss"
import Layout from "../components/Layout";
import { Button, CardContent, Container, Grid, responsiveFontSizes, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { section_data, home_choice_section, home_info_section, decision_aid_section} from "../utils/types";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import { Fragment } from "react";
import Progress from "../components/Graphics/Progress";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { REACT_APP_api_base_url } from "../utils/url_config";

export default function Home() {
  // Home page still requires CSS styling to make responsiveness (ideally using bootsrap of grids), for testing use the Chrome inspection tools for diff devices
  //makes call to Strapi api, however pls check to make sure directory is still accurate
  // const data = useFetch<ResponseData[]>(
  //   "http://localhost:1337/api/home-pagees",
  //   []
  // );
  const [mainSectionData, setMainSectionData] = useState<section_data>();
  const [choiceSectionData, setChoiceSectionData] = useState<home_choice_section>();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [infoSectionData, setInfoSectionData] = useState<home_info_section[]>([]);
  const [selectedInfoSectionData, setSelectedInfoSectionData] = useState<home_info_section>();
  const [infoSectionLoaded, setInfoSectionLoaded] = useState(false);
  const [decisonAidSection, setDecisonAidSection] = useState<decision_aid_section>();
  const [decisionSectionLoaded, setDecisionSectionLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [languageState, setLanguageState] = useState('en');

  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  useEffect(() => {
    if(width<=768){
      setIsMobile(true)
    }
  }, [width]);

  useEffect(() => {
    // Sets the language at page load. If no language in local storage then uses english by default
    window.addEventListener('storage', () => {
       setLanguageState(localStorage.getItem('language') || 'en')   
    });
  }, []);

  // store.subscribe(() => {
  //   // When state will be updated(in our case, when items will be fetched), 
  //   // we will update local component state and force component to rerender 
  //   // with new data.

  //   setLanguageState(store.getState().language.language)
  // });

  useEffect(() => {
    axios.get(REACT_APP_api_base_url + '/api/homes?populate=deep&locale=' + localStorage.getItem("language")).then(result => {
      // console.log(result)
      setMainSectionData(result.data.data[0].attributes.hero)
      // setChoiceSectionData(result.data.data[0].attributes.home_choice_section)
      return result;
    })
    axios.get(REACT_APP_api_base_url + '/api/home-choice-sections?populate=deep&locale=' + localStorage.getItem("language")).then(result => {
      console.log("choice data", result.data.data[0].attributes)
      setChoiceSectionData(result.data.data[0].attributes)
      return result;
    })
    axios.get(REACT_APP_api_base_url + '/api/decisions-aid-sections?&populate=deep&locale='+localStorage.getItem("language")).then(result => {
      console.log(result);
      setDecisonAidSection(result.data.data[0].attributes)
    })
  }, [languageState]);

  useEffect(() => {
    // console.log(choiceSectionData)
    if(mainSectionData && choiceSectionData){
      setDataLoaded(true);
      axios.get(REACT_APP_api_base_url + '/api/information-sections?&populate=deep&locale=en').then(result => {
        console.log(result)
        setInfoSectionData(result.data.data[0].attributes.Information_Section_Data);
      })
    }
  }, [mainSectionData, choiceSectionData]);

  useEffect(() => {
    if(infoSectionData.length>0){
      setInfoSectionLoaded(true);
      setSelectedInfoSectionData(infoSectionData[0]);
    }
  }, [infoSectionData]);

  const getSelection = (data:home_info_section[], matchTitle:string):home_info_section => {
    return data.filter((element) => element.Information_Short_Title == matchTitle)[0]
  }

  useEffect(() => {
    if(decisonAidSection){
      setDecisionSectionLoaded(true)
      // console.log(decisonAidSection)
    }
  }, [decisonAidSection]);

  const changeSelection = (title:string) => {
    setSelectedInfoSectionData(getSelection(infoSectionData, title))
  }

  return (
    <Layout>
      <Grid container sx={{minHeight:'100vh'}}>
        {dataLoaded?
          (
            <Fragment>
            {!isMobile?
              <Grid className="hero_container" container minHeight={'70vh'} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center'}}> 
                  <Box className="textBox" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', position:'absolute', right:'550px', width:'50%'}} component={Container}>
                    <Typography variant="h2" className="title_text" color="text.primary" gutterBottom>
                      {mainSectionData?.data.attributes.Hero_Title}
                    </Typography>
                    <Typography sx={{width:'70%', alignSelf:'flex-start'}} className="description_text" color="text.primary" gutterBottom>
                      {mainSectionData?.data.attributes.Hero_Description}
                    </Typography>
                  </Box>
                  {mainSectionData?
                      <img className="hero_image" src={(REACT_APP_api_base_url || "") + mainSectionData.data.attributes.Hero_Image.data.attributes.url} alt="" />
                      :null
                  }
                </Grid>
              </Grid>
              :
              <Grid className="hero_container" container minHeight={'70vh'} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                <Grid container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}> 
                  <Box className="textBox" sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} component={Container}>
                    <Typography sx={{fontSize:46}} variant="h2" className="title_text" color="text.primary" gutterBottom>
                      {mainSectionData?.data.attributes.Hero_Title}
                    </Typography>
                    <Typography sx={{alignSelf:'flex-start'}} className="description_text" color="text.primary" gutterBottom>
                      {mainSectionData?.data.attributes.Hero_Description}
                    </Typography>
                  </Box>
                  {mainSectionData?
                      <img className="hero_image" src={(REACT_APP_api_base_url || "") + mainSectionData.data.attributes.Hero_Image.data.attributes.url} alt="" />
                      :null
                  }
                </Grid>
              </Grid>
            }
            </Fragment>
          )
          :null
        }
        {dataLoaded && choiceSectionData?
          (
            <Fragment>
              {!isMobile?
              <Grid container sx={{display:'flex', justifyContent:'space-between', alignItems:'start', padding:'30px', flexDirection:'column', width:'100%', minHeight:'60vh', backgroundColor:'#0C3A25'}}>
                <Typography component={'h1'} sx={{color:'white', fontSize:'46px', padding:'20px', marginBottom:'20px'}}>
                  {choiceSectionData?.Title}
                </Typography>
                <Grid container sx={{display:"flex", flexDirection:'row', justifyContent:'space-evenly', alignItems:'flex-start'}}>
                  {choiceSectionData?.Fact_Card_Content.map(card => {
                    return(
                      <Card variant="outlined" sx={{minHeight:'699px', maxHeight:'699px', width:'337px', background:'#F4FCF0', borderRadius:'12px', padding:'0'}}>
                        <CardContent sx={{padding:'0px'}}>
                          <Box component={Container} sx={{background:'#DFF0D8', padding:'10px'}}>
                            <Typography sx={{ fontSize: 24}} color="text.primary" gutterBottom>
                              {card.card_title}
                            </Typography>
                          </Box>
                          <Box sx={{padding:'10px', display:'flex', flexDirection:'column', minHeight:'259px', justifyContent:'flex-start', alignItems:'flex-start'}}>
                            <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
                              {card.card_subtext}
                            </Typography>
                          </Box>
                          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'flex-start', flexDirection:'column', width:'80%', fontSize:'16px', padding:'10px'}}>
                            <h4 style={{marginBottom:'10px'}}>Quick Facts</h4>
                            <Box component={Container} sx={{maxWidth:'100%'}} disableGutters={true}>
                              {card.fact_point.map(fact => {
                                return (
                                  <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding:'0px', marginBottom:'5px'}}>
                                    <img style={{marginRight:'10px'}} src={REACT_APP_api_base_url + fact.fact_icon.data.attributes.url} width="24" height="24"/>
                                    <Typography sx={{ fontSize: 12, lineHeight:2.5}} color="text.primary" gutterBottom>
                                      {fact.fact_body}
                                    </Typography>
                                  </div>
                                )
                              })}
                            </Box>
                          </Box>
                        </CardContent>
                        {card.card_link?
                          <Typography sx={{fontSize:16, marginLeft:5}} component="a" href={card.card_link}>
                            Learn More
                          </Typography>
                        :
                        null
                        }
                      </Card>
                    )
                  })}
                </Grid>
              </Grid>
              :
              <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center', padding:'30px', flexDirection:'column', width:'100%', minHeight:'60vh', backgroundColor:'#0C3A25'}}>
                <Typography component={'h1'} sx={{color:'white', fontSize:'26px', padding:'20px', marginBottom:'20px'}}>
                  {choiceSectionData?.Title}
                </Typography>
                <Grid container sx={{display:"flex", flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                  {choiceSectionData?.Fact_Card_Content.map(card => {
                    return(
                      <Accordion sx={{margin:'20px', borderRadius:'10px', backgroundColor:'#DDEFD8'}}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{card.card_title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <CardContent sx={{padding:'0px'}}>
                          <Box sx={{padding:'10px', display:'flex', flexDirection:'column', minHeight:'89px', justifyContent:'flex-start', alignItems:'flex-start'}}>
                            <Typography sx={{ fontSize: 20, lineHeight:1.5 }} color="text.primary" gutterBottom>
                              {card.card_subtext}
                            </Typography>
                          </Box>
                          <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'flex-start', flexDirection:'column', width:'80%', fontSize:'16px', padding:'10px'}}>
                            <h4 style={{marginBottom:'10px'}}>Quick Facts</h4>
                            <Box sx={{maxWidth:'100%'}}>
                              {card.fact_point.map(fact => {
                                return (
                                  <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding:'0px', marginBottom:'5px'}}>
                                    <img style={{marginRight:'10px'}} src={REACT_APP_api_base_url + fact.fact_icon.data.attributes.url} width="24" height="24"/>
                                    <Typography sx={{ fontSize: 16, lineHeight:1.5}} color="text.primary" gutterBottom>
                                      {fact.fact_body}
                                    </Typography>
                                  </div>
                                )
                              })}
                            </Box>
                          </Box>
                        </CardContent>
                        </AccordionDetails>
                      </Accordion>
                    )
                  })
                  }
                </Grid>
              </Grid>
              }
            </Fragment>
          )
          :null
        }
        {infoSectionLoaded?
          (
            <Fragment>
              {!isMobile?
              <Grid container sx={{paddingTop:'30px', display:'flex', flexDirection:'row', justifyContent:'center', alignItems:'center', minHeight:'60vh'}} className="info_section">
                <Box className="info_nav" component={Container} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px', fontSize: '25px'}}>
                  {infoSectionData.map(data => {
                    return (
                      <Typography id={data.Information_Short_Title} onClick={() => changeSelection(data.Information_Short_Title)} className={`info_nav_text ${data.Information_Short_Title==selectedInfoSectionData?.Information_Short_Title? 'active':null}`} component={'h4'}>{data.Information_Short_Title}</Typography>
                    )
                  })}
                </Box>
                <Container sx={{minHeight: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width:'70%'}} maxWidth={false}>
                  <Container sx={{width: '50%', minHeight: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography sx={{fontSize:'56px'}} className="info_content_title" component={'h2'}>{selectedInfoSectionData?.Information_Full_Title}</Typography>
                    <Typography component={'small'}>{selectedInfoSectionData?.Information_Caution_Text}</Typography>
                    <Typography sx={{fontSize:'36px'}} className="info_content_answer" component={'h1'}>{selectedInfoSectionData?.Information_Answer}</Typography>
                    <Typography sx={{width: '90%'}} className="info_content_description" component={'p'}>{selectedInfoSectionData?.Information_Description}</Typography>
                  </Container>
                  <Container sx={{width: '50%', height:'100%', minHeight: '40vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                    <Progress offset={`${selectedInfoSectionData?.Information_Stat_Number}`}></Progress>
                    <Container className="stats_text" sx={{marginLeft: '-30px'}} maxWidth={false} disableGutters={true}>
                      <Typography className="info_stat_number" component={'h1'}>{selectedInfoSectionData?.Information_Stat_Number + '%'}</Typography>
                      <Typography sx={{width:'100%'}} className="info_content_additional" component={'p'}>{selectedInfoSectionData?.Information_Additional_Info}</Typography>
                    </Container>
                  </Container>
                </Container>
              </Grid>
              :
              <Grid container sx={{paddingTop:'30px', display:'flex', flexDirection:'column', minHeight:'60vh'}} className="info_section">
                <Container maxWidth={false} className="info_content">
                  <Container className="info_content_left" sx={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
                    <Typography sx={{width:'100%', fontSize: 56}} component={'h2'}>{selectedInfoSectionData?.Information_Full_Title}</Typography>
                    <Typography sx={{width:'100%'}} component={'small'}>{selectedInfoSectionData?.Information_Caution_Text}</Typography>
                    <Typography className="info_content_answer" component={'h1'}>{selectedInfoSectionData?.Information_Answer}</Typography>
                    <Typography sx={{width:'100% !important', marginTop:'10px'}} className="info_content_description" component={'p'}>{selectedInfoSectionData?.Information_Description}</Typography>
                  </Container>
                  <Box className="info_nav" component={Container} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', fontSize: '25px'}}>
                    {infoSectionData.map(data => {
                      return (
                        <Typography id={data.Information_Short_Title} onClick={() => changeSelection(data.Information_Short_Title)} className={`info_nav_text ${data.Information_Short_Title==selectedInfoSectionData?.Information_Short_Title? 'active':null}`} component={'h4'}>{data.Information_Short_Title}</Typography>
                      )
                    })}
                  </Box>
                  <Container className="info_content_right">
                    <Progress offset={`${selectedInfoSectionData?.Information_Stat_Number}`}></Progress>
                    <Container className="stats_text" maxWidth={false} disableGutters={true}>
                      <Typography className="info_stat_number" component={'h1'}>{selectedInfoSectionData?.Information_Stat_Number + '%'}</Typography>
                      <Typography className="info_content_additional" component={'p'}>{selectedInfoSectionData?.Information_Additional_Info}</Typography>
                    </Container>
                  </Container>
                </Container>
              </Grid>
              }
            </Fragment>
          )
          :null
        }
        {decisionSectionLoaded?
          (
            <Fragment>
              <Container maxWidth={false} className="decisions_section">
                  <Container className="inner_container">
                    <Container className="text_container">
                      <Typography variant="h2" className="title_text" color="text.primary" gutterBottom>
                        {decisonAidSection?.Section_Title}
                      </Typography>
                      <Typography className="description_text" color="text.primary" gutterBottom>
                        {decisonAidSection?.Section_Description}
                      </Typography>
                      <Button className="Button">{decisonAidSection?.Button_Text}</Button>
                    </Container>
                    {decisonAidSection?
                        <img className="hero_image" src={(REACT_APP_api_base_url || "") + decisonAidSection.Section_Image.data.attributes.url} alt="" />
                        :null
                    }
                  </Container>
              </Container>
            </Fragment>
          )
          :
          null
        }
      </Grid>
    </Layout>
  );
}
