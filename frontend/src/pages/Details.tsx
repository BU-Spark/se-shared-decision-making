import React from 'react'
import {
  Container,
  Grid,
  Paper,
  Typography,
  Link,
  Avatar,
  StyledEngineProvider,
} from '@mui/material'
import Layout from '../components/Layout'
import Button from '../components/Button/Button'
import { CloudUpload } from '@mui/icons-material'
import { Clock } from '@phosphor-icons/react'
import './pageStyle/Details.css'
import FirstImg from '../siteImages/pexels-william-fortunato-6392989.jpg'
import SecondImg from '../siteImages/pexels-william-fortunato-6393368.jpg'

function Details() {
  return (
    <StyledEngineProvider injectFirst>
      <Layout>
        <div className="root">
          <Container maxWidth="lg">
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
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
                  <Typography variant="h4" component="h2" className="title">
                    Wating for Labor
                  </Typography>
                  <Typography variant="subtitle1" className="subTitle">
                    37-42+Weeks
                  </Typography>
                  <Avatar
                    alt="Profile Picture"
                    src={FirstImg}
                    sx={{
                      width: '30rem',
                      height: '25rem',
                      borderRadius: '40%',
                      marginBottom: '2rem',
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
                    What is Spontaneous Labor?
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      marginLeft: '30px',
                      marginTop: '20px',
                      color: '#4D4D4D',
                      marginBottom: '50px',
                    }}
                  >
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
                  <Typography
                    variant="body1"
                    style={{
                      marginLeft: '30px',
                      marginTop: '25px',
                      color: '#4D4D4D',
                    }}
                  >
                    · You wait at home for signs of labor.
                    <br />
                    · You care provide will offer you extra check-ups after 41
                    weeks.
                    <br />· It can take 8-24 hours for your baby to be born
                    (sometimes shorter, sometimes longer).
                  </Typography>
                  <p
                    style={{
                      fontSize: '16px',
                      lineHeight: '20px',
                      marginLeft: '20px',
                      marginTop: '20px',
                      color: '#4D4D4D',
                    }}
                  >
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
                  <Typography
                    variant="body1"
                    style={{
                      marginLeft: '30px',
                      marginTop: '25px',
                      color: '#4D4D4D',
                    }}
                  >
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
                            fontSize: '2rem',
                          }}
                        >
                          37-42+
                        </Typography>
                        <Typography variant="body1">weeks</Typography>
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
                        <br />
                        <br />
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
                        }}
                      >
                        <Typography
                          variant="h4"
                          style={{
                            color: '#DFF0D8',
                            fontWeight: 'bold',
                            fontSize: '2rem',
                          }}
                        >
                          8-24
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: '#DFF0D8',
                          }}
                        >
                          hours
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
                      {/* <CircularProgress
                      variant="determinate"
                      value={49}
                      style={{
                        marginTop: '30px',
                        marginLeft: '30px',
                        color: '#0C3A25',
                        width: '150px',
                        height: '150px',
                      }}
                    /> */}
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
                            fontSize: '2rem',
                          }}
                        >
                          49%
                        </Typography>
                        <Typography
                          variant="body1"
                          style={{
                            color: '#DFF0D8',
                          }}
                        >
                          chance
                        </Typography>
                      </Avatar>
                    </Paper>
                  </Grid>
                  <Grid item xs={6}>
                    {/* Content for fourth grid item */}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} md={2}></Grid>
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
                <Grid container spacing={2} className="container">
                  <Grid item xs={4}>
                    <Button variant="contained" startIcon={<CloudUpload />}>
                      Link
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained">Email</Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained">Bookmark</Button>
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
