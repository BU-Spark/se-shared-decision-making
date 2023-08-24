import "./pageStyle/Article.scss"
import { Container, Typography, Breadcrumbs, Link, Divider, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import axios from 'axios';
import { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api_config } from '../utils/axios_config';
import { article } from '../utils/types';
import Layout from "../components/Layout";
import { Box } from "@mui/system";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from "react-router-dom";


const Article = (): JSX.Element => {
    const navigate = useNavigate();
    const [articleData, setArticleData] = useState<article>();
    const [dataLoaded, setDataLoaded] = useState(false);
      
    let { id } = useParams()
    useEffect(() => {
        console.log(id)
        axios.get(process.env.REACT_APP_api_base_url + `/api/articles?filters[article_title][$contains]=${id?.replace("_", "%20")}&populate=deep`, api_config).then(result => {
            console.log(result)
            setArticleData(result.data.data[0].attributes)
        })
    }, []);
    useEffect(() => {
        if(articleData){
            console.log(articleData)
            setDataLoaded(true)
        }
    }, [articleData]);
    return ( 
        <Layout>
            <Fragment>
                <Container className="main_container">
                    <Container className="article_container">
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                underline="hover"
                                color="inherit"
                                onClick={() => navigate("/Home")}
                            >
                                Home
                            </Link>
                            <Typography color="text.primary">{articleData?.article_title}</Typography>
                        </Breadcrumbs>
                        {dataLoaded?(
                            <Fragment>
                                <Typography className="article-header" component={'h1'}>{articleData?.article_title}</Typography>
                                <img className="feature_image" src={`${process.env.REACT_APP_api_base_url}${articleData?.feature_image.data.attributes.url}`} alt=""/>
                                {articleData?.Article_Section?.map(section => {
                                   return (
                                    <Container className="article_section">
                                        <Typography id={`${section.article_section_title.replace(" ", "_")}`} className="article_section_title" component={'h3'}>{section.article_section_title}</Typography>
                                        <Divider sx={{marginBottom:'30px'}}/>
                                        <Container className="article_section_subsection">
                                            <Box sx={{width:'50%'}}>
                                                {section.article_dropdown_section_data?.data?.map(rb_section => {
                                                    return (
                                                    <Container disableGutters maxWidth={false}>
                                                        <Container disableGutters maxWidth={false} className="article_subsection_data">
                                                            <Container disableGutters maxWidth={false}>
                                                                <Typography id={`${rb_section.attributes.dropdown_section_title.replace(" ", "_")}`} component={'h4'}>{rb_section.attributes.dropdown_section_title}</Typography>
                                                                <Typography component={'p'}>{rb_section.attributes.dropdown_section_description}</Typography>
                                                            </Container>
                                                            <img className="article_subsection_image" src={`${process.env.REACT_APP_api_base_url}${rb_section.attributes.article_section_image.data.attributes.url}`} alt="" />
                                                        </Container>
                                                        <Accordion defaultExpanded={true} className="rb_drop">
                                                            <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel1a-content"
                                                            id="panel1a-header"
                                                            sx={{padding:'0px'}}
                                                            >
                                                            <Typography>Risk and Benefits</Typography>
                                                            </AccordionSummary>
                                                            <Divider/>
                                                            <AccordionDetails>
                                                                {rb_section.attributes.risk_and_benefits.map(rb_data => {
                                                                    return (
                                                                        <Container disableGutters={true} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                                                                            <img style={{width:'32px', height:'32px', marginRight:'20px'}} src={`${process.env.REACT_APP_api_base_url}${rb_data.risk_and_benefits_image.data.attributes.url}`} alt="" />
                                                                            <Typography>
                                                                                {rb_data.risk_and_benefits_text}
                                                                            </Typography>
                                                                        </Container>
                                                                    )
                                                                })}
                                                            
                                                            </AccordionDetails>
                                                        </Accordion>
                                                    </Container>
                                                    )
                                                })}
                                            </Box>
                                        </Container>
                                    </Container>
                                   )
                                })}
                            </Fragment>
                        ):null}
                    </Container>
                    <Container className="index_container">
                            <Container className="index-box">
                                <Typography component={'h3'}>Topics</Typography>

                                <Container className="index">
                                    {articleData?.Article_Section.map(section => {
                                        return (
                                            <Fragment>
                                            <Typography component={'p'} onClick={() => navigate(`#${section.article_section_title.replace(" ", "_")}`)}> {section.article_section_title}</Typography>
                                            <Container>
                                                {section.article_dropdown_section_data?.data.map(dropdown => {
                                                    return (
                                                        <Typography onClick={() => navigate(`#${dropdown.attributes.dropdown_section_title.replace(" ", "_")}`)}  component={'p'}> {dropdown.attributes.dropdown_section_title}</Typography>
                                                    )
                                                })}
                                            </Container>
                                            </Fragment>
                                        )
                                    })}
                                </Container>
                            </Container>
                    </Container>
                </Container>
            </Fragment>
        </Layout>
     );
}
 
export default Article;