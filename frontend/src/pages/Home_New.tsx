import useFetch from "../hooks/useFetch";
import "./pageStyle/Home.scss"
import Layout from "../components/Layout";
import AnnHeadShot from "../siteImages/Screen Shot 2022-08-12 at 10.35 1.jpg";
import MotherImg from "../siteImages/pexels-anna-shvets-11369288.jpg";
import CoupleImg from "../siteImages/pexels-nappy-3584088.jpg";
import { Button, CardContent, Container, responsiveFontSizes, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import {api_config} from '../utils/axios_config'
import { section_data, home_choice_section, home_info_section, decision_aid_section} from "../utils/types";
import { Box, display, fontSize } from "@mui/system";
import Card from '@mui/material/Card';
import { Fragment } from "react";
import Progress from "../components/Graphics/Progress";
import { store } from "../redux/store";

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

  const [languageState, setLanguageState] = useState('en');

  // store.subscribe(() => {
  //   // When state will be updated(in our case, when items will be fetched), 
  //   // we will update local component state and force component to rerender 
  //   // with new data.

  //   setLanguageState(store.getState().language.language)
  // });

  useEffect(() => {
    axios.get(process.env.REACT_APP_api_base_url + '/api/homes?populate=deep&locale=' + languageState, api_config).then(result => {
      console.log(result)
      setMainSectionData(result.data.data[0].attributes.home_hero)
      setChoiceSectionData(result.data.data[0].attributes.fact_card_section)
      return result;
    })
  }, [languageState]);

  useEffect(() => {
    window.addEventListener('storage', () => {
      console.log(localStorage.getItem('language'))
       setLanguageState(localStorage.getItem('language') || 'en')   
    });
  }, []);

  useEffect(() => {
    console.log(mainSectionData)
    if(mainSectionData && choiceSectionData){
      console.log(mainSectionData.data.attributes.Hero_Image.data.attributes.url)
      setDataLoaded(true);
      axios.get(process.env.REACT_APP_api_base_url + '/api/information-sections?&populate=deep', api_config).then(result => {
        setInfoSectionData(result.data.data[0].attributes.info_section_data);
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
    axios.get(process.env.REACT_APP_api_base_url + '/api/decisions-aid-sections?&populate=deep', api_config).then(result => {
      console.log(result);
      setDecisonAidSection(result.data.data[0].attributes)
    })
  }, []);

  useEffect(() => {
    if(decisonAidSection){
      setDecisionSectionLoaded(true)
      console.log(decisonAidSection)
    }
  }, [decisonAidSection]);

  const changeSelection = (title:string) => {
    setSelectedInfoSectionData(getSelection(infoSectionData, title))
  }

  return (
    <Layout>
      {dataLoaded?
        (
          <Container className="hero_container" maxWidth={false}>
            <Container className="inner_container">
              <Container className="text_container">
                <Typography variant="h2" className="title_text" color="text.primary" gutterBottom>
                  {mainSectionData?.data.attributes.Hero_Title}
                </Typography>
                <Typography className="description_text" color="text.primary" gutterBottom>
                  {mainSectionData?.data.attributes.Hero_Description}
                </Typography>
              </Container>
              {mainSectionData?
                  <img className="hero_image" src={(process.env.REACT_APP_api_base_url || "") + mainSectionData.data.attributes.Hero_Image.data.attributes.url} alt="" />
                  :null
              }
            </Container>
          </Container>
        )
        :null
      }
      {dataLoaded?
        (
          <Fragment>
          <Container maxWidth={false} sx={{display:'flex', justifyContent:'space-between', alignItems:'start', padding:'30px', flexDirection:'column', width:'100%', minHeight:'60vh', backgroundColor:'#0C3A25'}}>
            <h1 style={{color:'white', fontSize:'46px', marginBottom:'20px'}}>{choiceSectionData?.Title}</h1>
            <Container sx={{display:"flex", flexDirection:'row', justifyContent:'space-evenly', alignItems:'flex-start'}}>
              {choiceSectionData?.data.attributes.Fact_Card_Content.map(card => {
                return(
                  <Card variant="outlined" sx={{minHeight:'699px', maxHeight:'699px', width:'337px', background:'#F4FCF0', borderRadius:'12px', padding:'0'}}>
                    <CardContent sx={{padding:'0px'}}>
                      <Container sx={{background:'#DFF0D8', padding:'10px'}}>
                        <Typography sx={{ fontSize: 24}} color="text.primary" gutterBottom>
                          {card.card_title}
                        </Typography>
                      </Container>
                      <Container disableGutters={true} sx={{padding:'10px', display:'flex', flexDirection:'column', minHeight:'259px', justifyContent:'flex-start', alignItems:'flex-start'}}>
                        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
                          {card.card_subtext}
                        </Typography>
                      </Container>
                      <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'flex-start', flexDirection:'column', width:'80%', fontSize:'16px', padding:'20px'}}>
                        <h4 style={{marginBottom:'10px'}}>Quick Facts</h4>
                        <Container sx={{maxWidth:'100%'}} disableGutters={true}>
                          {card.Fact_Point.map(fact => {
                            return (
                              <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', padding:'0px', marginBottom:'5px'}}>
                                <img style={{marginRight:'10px'}} src={process.env.REACT_APP_api_base_url + fact.fact_icon.data.attributes.url} width="24" height="24"/>
                                <Typography sx={{ fontSize: 14}} color="text.primary" gutterBottom>
                                  {fact.fact_body}
                                </Typography>
                              </div>
                            )
                          })}
                        </Container>
                      </Box>
                      
                    </CardContent>
                  </Card>
                )
              })}
            </Container>
          </Container>
          </Fragment>
        )
        :null
      }
      {infoSectionLoaded?
        (
          <Fragment>
            <Container maxWidth={false} className="info_section">
              <Container className="info_nav">
                {infoSectionData.map(data => {
                  return (
                    <Typography id={data.Information_Short_Title} onClick={() => changeSelection(data.Information_Short_Title)} className={`info_nav_text ${data.Information_Short_Title==selectedInfoSectionData?.Information_Short_Title? 'active':null}`} component={'h4'}>{data.Information_Short_Title}</Typography>
                  )
                })}
              </Container>
              <Container maxWidth={false} className="info_content">
                <Container className="info_content_left">
                  <Typography className="info_content_title" component={'h2'}>{selectedInfoSectionData?.Information_Full_Title}</Typography>
                  <Typography component={'small'}>{selectedInfoSectionData?.Information_Caution_Text}</Typography>
                  <Typography className="info_content_answer" component={'h1'}>{selectedInfoSectionData?.Information_Answer}</Typography>
                  <Typography className="info_content_description" component={'p'}>{selectedInfoSectionData?.Information_Description}</Typography>
                </Container>
                <Container className="info_content_right">
                  <Progress offset={`${selectedInfoSectionData?.Information_Stat_Number}`}></Progress>
                  <Container className="stats_text" maxWidth={false} disableGutters={true}>
                    <Typography className="info_stat_number" component={'h1'}>{selectedInfoSectionData?.Information_Stat_Number + '%'}</Typography>
                    <Typography className="info_content_additional" component={'p'}>{selectedInfoSectionData?.Information_Additional_Info}</Typography>
                  </Container>
                </Container>
              </Container>
            </Container>
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
                      <img className="hero_image" src={(process.env.REACT_APP_api_base_url || "") + decisonAidSection.Section_Image.data.attributes.url} alt="" />
                      :null
                  }
                </Container>
            </Container>
          </Fragment>
        )
        :
        null
      }
    </Layout>
  );
}
