import React from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Avatar,
  StyledEngineProvider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from '@mui/material'
import Layout from '../components/Layout'
import Button from '../components/Button/Button'
import { CloudUpload } from '@mui/icons-material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  LinkSimpleHorizontal,
  EnvelopeSimple,
  BookmarkSimple,
  Clock,
  Heart,
} from '@phosphor-icons/react'
import { Sources } from '../components/AccordionContent/Sources-details'
import './pageStyle/Details.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import FirstImg from '../siteImages/pexels-william-fortunato-6392989.jpg'
import SecondImg from '../siteImages/pexels-william-fortunato-6393368.jpg'
import DottedCircle6 from '../siteImages/DottedCircles/DottedCircle6.png'
import DottedCircle04 from '../siteImages/DottedCircles/DottedCircle04.png'
import DottedCircle22 from '../siteImages/DottedCircles/DottedCircle22.png'

function Details() {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <div className="root">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={12} md={7}>
                <Paper elevation={0} className="mainText">
                  <h4
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#666666',
                    }}
                  >
                    HOME WAITING FOR
                    LABOR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Clock size={20} style={{ marginRight: '5px' }} />5 MINS
                    READ
                  </h4>
                  <Typography variant="h4" className="title">
                    Wating for Labor
                  </Typography>
                  <Typography variant="subtitle1" className="subTitle">
                    37-42+Weeks
                  </Typography>
                  <img
                    src={FirstImg}
                    id="first-image"
                    alt="firstimg"
                    style={{ marginBottom: '30px' }}
                  />
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 15,
                        height: 35,
                        borderRadius: '0',
                        backgroundColor: '#DFF0D8',
                        marginRight: 20,
                      }}
                    />
                    What is Spontaneous Labor?
                  </Typography>
                  <Typography variant="body1" className="bodyText">
                    Spontaneous labor starts on its own and is powered by your
                    body and your baby. It is most likely to happen between 37
                    and 42 weeks.
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 15,
                        height: 35,
                        borderRadius: '0',
                        backgroundColor: '#DFF0D8',
                        marginRight: 20,
                      }}
                    />
                    What is it like to wait for <br />
                    &nbsp;&nbsp;&nbsp;Spontaneous Labor?
                  </Typography>
                  <Typography variant="body1" className="bodyText">
                    · You wait at home for signs of labor.
                    <br />
                    · You care provide will offer you extra check-ups after 41
                    weeks.
                    <br />· It can take 8-24 hours for your baby to be born
                    (sometimes shorter, sometimes longer).
                  </Typography>
                  <p className="linkText">
                    Learn more about{' '}
                    <Link
                      href="https://example.com"
                      style={{ color: '#00653E', fontWeight: 'bold' }}
                    >
                      starting labor
                    </Link>
                  </p>
                  <Avatar
                    alt="Profile Picture"
                    src={SecondImg}
                    sx={{
                      width: '40rem',
                      height: '25rem',
                      borderRadius: '5%',
                      marginBottom: '2rem',
                      marginTop: '3rem',
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                  >
                    <span
                      style={{
                        display: 'inline-block',
                        width: 15,
                        height: 35,
                        borderRadius: '0',
                        backgroundColor: '#DFF0D8',
                        marginRight: 20,
                      }}
                    />
                    What are the differences for me
                    <br />
                    &nbsp;&nbsp;&nbsp;and my baby if I choose to wait <br />
                    &nbsp;&nbsp;&nbsp;beyond 41-42 weeks?
                  </Typography>
                  <Typography variant="body1" className="bodyText">
                    Here is what we know from many, many studies over many
                    years. Think about what matters most to you.
                  </Typography>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '20px',
                      marginLeft: '20px',
                      marginTop: '20px',
                      marginBottom: '20px',
                      color: '#4D4D4D',
                    }}
                  >
                    Compare the differences using{' '}
                    <Link
                      href="https://example.com"
                      style={{ color: '#00653E', fontWeight: 'bold' }}
                    >
                      my choices
                    </Link>
                  </p>
                </Paper>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Paper elevation={0} className="whitePost">
                      <Typography
                        variant="h6"
                        component="h3"
                        className="bottomTitle"
                      >
                        Timing
                      </Typography>
                      <Typography variant="body1" className="space">
                        Labor is most likely to happen between
                      </Typography>
                      <Avatar
                        className="avatar"
                        sx={{
                          width: '150px',
                          height: '150px',
                        }}
                        style={{
                          backgroundColor: '#DFF0D8',
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{
                            color: '#0C3A25',
                            fontWeight: 'bold',
                            fontSize: '24px',
                          }}
                        >
                          37-42+
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            fontSize: '16px',
                          }}
                        >
                          Weeks
                        </Typography>
                      </Avatar>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={0} className="whitePost">
                      <Typography
                        variant="h6"
                        component="h3"
                        className="bottomTitle"
                      >
                        Labor Time
                      </Typography>
                      <Typography variant="body1" className="space">
                        Sometimes longer or shorter
                      </Typography>
                      <Avatar
                        className="avatar"
                        sx={{
                          width: '150px',
                          height: '150px',
                        }}
                        style={{
                          backgroundColor: '#0C3A25',
                          marginBottom: '2rem',
                          marginTop: '53px',
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{
                            color: '#DFF0D8',
                            fontWeight: 'bold',
                            fontSize: '24px',
                          }}
                        >
                          8-24
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: '#DFF0D8',
                            fontSize: '16px',
                          }}
                        >
                          Hours
                        </Typography>
                      </Avatar>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={0} className="whitePost">
                      <Typography
                        variant="h6"
                        component="h3"
                        className="bottomTitle"
                      >
                        Pain Medication
                      </Typography>
                      <Typography variant="body1" className="space">
                        Waiting for spontaneous labor possibly decrreases the
                        chance of using pain medication(epidural, analgesia) in
                        labor.
                      </Typography>
                      <Avatar
                        className="avatar"
                        sx={{
                          width: '150px',
                          height: '150px',
                        }}
                        style={{
                          // backgroundColor: '#0C3A25',
                          background:
                            'linear-gradient(45deg, #0C3A25 30%, #DFF0D8 90%)',
                          marginBottom: '2rem',
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{
                            color: '#DFF0D8',
                            fontWeight: 'bold',
                            fontSize: '24px',
                          }}
                        >
                          49%
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: '#DFF0D8',
                            fontSize: '16px',
                          }}
                        >
                          Chance
                        </Typography>
                      </Avatar>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    <Paper elevation={0} className="whitePost">
                      <Typography variant="h6" className="bottomTitle">
                        Satisfaction with Care
                      </Typography>
                      <Typography variant="body1" className="space">
                        Waiting probably increases your satisfaction with care
                        because you might experience less time in the hospital
                        and have fewer interventions.
                      </Typography>
                      <Heart
                        size={90}
                        color="#0C3A25"
                        weight="fill"
                        style={{ marginLeft: '70px' }}
                      />
                      <p
                        style={{
                          fontSize: '16px',
                          fontWeight: 'bold',
                          marginLeft: '45px',
                        }}
                      >
                        More Satisfaction
                      </p>
                    </Paper>
                  </Grid>
                </Grid>
                <Paper className="post1" elevation={0}>
                  <Typography variant="body1" className="bodyText1">
                    For all three options, there is the same change of being
                    able to <br />
                    <Link
                      href="https://example.com"
                      style={{ color: '#00653E' }}
                    >
                      breastfeed your baby
                    </Link>
                    .
                  </Typography>
                </Paper>
                <Paper elevation={0}>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                    style={{ color: '#A86133', marginTop: '50px' }}
                  >
                    Potential Risks
                  </Typography>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '20px',
                      marginTop: '20px',
                      marginBottom: '20px',
                      color: '#4D4D4D',
                    }}
                  >
                    This section contains information about risks to babies. It
                    is included for informed decision-making.
                  </p>
                  <Accordion elevation={0}>
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon style={{ color: '#FFFFFF' }} />
                      }
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      style={{
                        backgroundColor: '#A86133',
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                      }}
                    >
                      <Typography
                        className="view-risks-acc-title"
                        sx={{ flexGrow: 1, textAlign: 'center' }}
                      >
                        View risks
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: '#FAF6ED' }}>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Typography
                            display="inline"
                            className="ThreeTagsStyle"
                          >
                            {' '}
                            Baby Admitted to NICU
                          </Typography>
                          <Typography
                            sx={{ ml: '4px' }}
                            display="inline"
                            className="foot-big-nunmber"
                          >
                            6
                          </Typography>
                          <Typography className="potential-risks-content">
                            Waiting beyond 41-42 weeks increases the chance of
                            your baby being admitted to the NICU.
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            display="inline"
                            className="ThreeTagsStyle"
                          >
                            {' '}
                            Loss of Baby
                          </Typography>
                          <Typography
                            sx={{ ml: '4px' }}
                            display="inline"
                            className="foot-big-nunmber"
                          >
                            6,8
                          </Typography>
                          <Typography className="potential-risks-content">
                            Waiting beyond 41-42 weeks increases the chance of
                            infant death.
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            style={{ marginLeft: '58px', marginTop: '20px' }}
                            width="180.45px"
                            height="239px"
                            src={DottedCircle6}
                            alt="DottedCircle6"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <img
                            style={{ marginLeft: '58px', marginTop: '20px' }}
                            width="180.45px"
                            height="239px"
                            src={DottedCircle04}
                            alt="DottedCircle0.4"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            display="inline"
                            className="ThreeTagsStyle"
                          >
                            {' '}
                            Cesarean Birth
                          </Typography>
                          <Typography
                            sx={{ ml: '4px' }}
                            display="inline"
                            className="foot-big-nunmber"
                          >
                            6
                          </Typography>
                          <Typography className="potential-risks-content">
                            Waiting beyond 41-42 weeks probably increases the
                            the chance of cesarean birth (C-section).
                          </Typography>
                        </Grid>
                        <Grid item xs={6}></Grid>
                        <Grid item xs={6}>
                          <img
                            style={{ marginLeft: '58px', marginTop: '20px' }}
                            width="180.45px"
                            height="239px"
                            src={DottedCircle22}
                            alt="DottedCircle22"
                          />
                        </Grid>
                        <Grid item xs={6}></Grid>
                      </Grid>
                    </AccordionDetails>
                    <Grid
                      container
                      className="potential-risks"
                      sx={{ pt: '48px' }}
                    >
                      <Grid height="269px">
                        <Grid
                          item
                          width="649px"
                          height="27px"
                          sx={{ ml: '0px', mr: '114px' }}
                        >
                          <Typography className="potential-risks-small-content">
                            For all three options, there is{' '}
                            <span
                              style={{
                                fontWeight: 'bold',
                              }}
                            >
                              same chance
                            </span>{' '}
                            of the following:
                          </Typography>
                        </Grid>
                        <Grid
                          width="483px"
                          sx={{ ml: '100px', mr: '196px', mt: '24px' }}
                        >
                          <Typography className="potential-risks-foot-content">
                            <FiberManualRecordIcon
                              sx={{ fontSize: 10, pr: '5px' }}
                            />
                            Complications for baby{' '}
                            <Typography
                              display="inline"
                              className="potential-risks-foot-content"
                              bgcolor="#dff0d8"
                            >
                              (seizure
                            </Typography>
                            ,{' '}
                            <Typography
                              display="inline"
                              className="potential-risks-foot-content"
                              bgcolor="#dff0d8"
                            >
                              pneumonia
                            </Typography>
                            , harm to the baby’s body, or problems getting air
                            to baby’s brain.){' '}
                            <Typography
                              display="inline"
                              className="foot-small-number"
                            >
                              6
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid
                          width="483px"
                          sx={{ ml: '100px', mr: '196px', mt: '16px' }}
                        >
                          <Typography className="potential-risks-foot-content">
                            <FiberManualRecordIcon
                              sx={{ fontSize: 10, pr: '5px' }}
                            />
                            Needing help from tools like forcepts or a vaccum.{' '}
                            <Typography
                              display="inline"
                              className="foot-small-number"
                            >
                              6
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid
                          width="483px"
                          sx={{ ml: '100px', mr: '196px', mt: '16px' }}
                        >
                          <Typography className="potential-risks-foot-content">
                            <FiberManualRecordIcon
                              sx={{ fontSize: 10, pr: '5px' }}
                            />
                            Too much bleeding after birth.{' '}
                            <Typography
                              display="inline"
                              className="foot-small-number"
                            >
                              6
                            </Typography>
                          </Typography>
                        </Grid>
                        <Grid
                          width="483px"
                          sx={{ ml: '100px', mr: '196px', mt: '16px' }}
                        >
                          <Typography className="potential-risks-foot-content">
                            <FiberManualRecordIcon
                              sx={{ fontSize: 10, pr: '5px' }}
                            />
                            Severe tearing of vagina.{' '}
                            <Typography
                              display="inline"
                              className="foot-small-number"
                            >
                              6
                            </Typography>
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Accordion>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                    style={{
                      marginTop: '50px',
                    }}
                  >
                    Authors
                  </Typography>
                  <Divider
                    style={{
                      height: '3px',
                    }}
                  />
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '20px',
                      marginTop: '20px',
                      color: '#4D4D4D',
                    }}
                  >
                    This decision aid was made by a group of public health and
                    medical experts.
                  </p>
                  <Link
                    href="https://example.com"
                    style={{
                      color: '#00653E',
                      fontWeight: 'bold',
                      marginBottom: '30px',
                    }}
                  >
                    Led by Partner to Decide
                  </Link>
                  <Grid
                    container
                    spacing={0}
                    style={{ marginTop: 10, marginBottom: 10 }}
                  >
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: '10px',
                        }}
                      >
                        Dr. Ann Peralta (MPH, DrPH)
                      </p>
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          fontWeight: 'bold',
                          color: '#4D4D4D',
                        }}
                      >
                        Lead Author
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    />
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    />
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: '10px',
                        }}
                      >
                        Kari Radoff (CNM)
                      </p>
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          fontWeight: 'bold',
                          color: '#4D4D4D',
                        }}
                      >
                        Key contributors
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: '7px',
                        }}
                      >
                        Emily Bearse (CNM, MPH)
                      </p>
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          fontWeight: 'bold',
                          color: '#4D4D4D',
                        }}
                      >
                        Key contributors
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <Avatar alt="Remy Sharp" sx={{ width: 70, height: 70 }} />
                    </Grid>
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          marginTop: '10px',
                        }}
                      >
                        Dr. Jennifer Pfau (MD)
                      </p>
                      <p
                        style={{
                          fontSize: '16px',
                          lineHeight: '20px',
                          fontWeight: 'bold',
                          color: '#4D4D4D',
                        }}
                      >
                        Key contributors
                      </p>
                    </Grid>
                    <Grid
                      item
                      xs={2}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    />
                    <Grid
                      item
                      xs={4}
                      style={{ marginTop: 10, marginBottom: 10 }}
                    />
                  </Grid>
                  <Accordion style={{ marginTop: '50px' }}>
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
          
                          risk estimate. The 2020 Cochrane Review includes the ARRIVE trial and the SWEPSIS trial within the findings."
                          text2="Source"
                        />
                      </Grid>
                      <Grid sx={{ mt: '28px' }}>
                        <Sources
                          number="7"
                          text1="Coates D, Goodfellow A, Sinclair L. Induction of labour: Experiences of care and decision-making of women and clinicians. 
                          Women and Birth. 2020;33:e1-e14. 8. Sotiriadis A, Petousis S, Thilaganathan B, et al. Maternal and perinatal outcomes after elective induction of labor at 39 weeks in uncomplicated singleton pregnancy: a meta-analysis. Ultrasound Obstet Gynecol. 2019;53(1):26-35. doi:10.1002/UOG.20140. "
                          text2="Source"
                        />
                      </Grid>
                      <Grid sx={{ mt: '28px' }}>
                        <Sources
                          number="8"
                          text1="C8. Sotiriadis A, Petousis S, Thilaganathan B, et al. Maternal and perinatal outcomes after elective induction of labor at 39 weeks in uncomplicated singleton pregnancy: a meta-analysis. Ultrasound Obstet Gynecol. 2019;53(1):26-35. doi:10.1002/UOG.20140."
                          text2="Source"
                        />
                      </Grid>
                    </AccordionDetails>
                  </Accordion>
                  <Typography
                    variant="h4"
                    component="h2"
                    className="secondTitle"
                    style={{
                      marginTop: '50px',
                    }}
                  >
                    Explore
                  </Typography>
                  <Divider
                    style={{
                      height: '3px',
                      marginBottom: '20px',
                    }}
                  />
                  <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                    <Grid item xs={12} md={4}>
                      <Button>41-42 WK induction</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button>39-41 WK induction</Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Button>Compare Choices</Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
              <Grid item xs={12} md={4}>
                <Paper elevation={0} className="post">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="rightTitle"
                  >
                    Topics
                  </Typography>
                  <Typography variant="body1" className="space">
                    What is Spontaneous Labor?
                  </Typography>
                  <Typography variant="body1" className="space">
                    What is it like to wait for Spontaneous Labor?
                  </Typography>
                  <Typography variant="body1" className="space">
                    What are the differences for me and my baby if I choose to
                    wait beyond 41-42 weeks?
                  </Typography>
                </Paper>
                <Grid container spacing={2} style={{ marginBottom: '20px' }}>
                  <Grid item xs={12} md={4}>
                    <Button>
                      <LinkSimpleHorizontal
                        size={24}
                        style={{ marginRight: '5px' }}
                      />
                      Link
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button>
                      <EnvelopeSimple
                        size={24}
                        style={{ marginRight: '5px' }}
                      />
                      Email
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Button>
                      <BookmarkSimple
                        size={24}
                        style={{ marginRight: '5px' }}
                      />
                      Bookmark
                    </Button>
                  </Grid>
                </Grid>
                <Paper elevation={0} className="whitePost">
                  <Typography
                    variant="h6"
                    component="h3"
                    className="bottomTitle"
                  >
                    Take Notes As You Go!
                  </Typography>
                  <Typography variant="body1" className="space">
                    Store your notes, summary, and checklist by accepting
                    cookies for this site. All data is encrypted to protect your
                    privacy.
                  </Typography>
                  <Button variant="contained">Accept</Button>
                  <h3 className="btmTip">Where does my data go?</h3>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </div>
      </Layout>
    </StyledEngineProvider>
  )
}

export default Details
