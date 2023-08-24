import { Routes, Route } from 'react-router-dom'
import './App.css'
// import React from "react";
// import FooterBar from './components/Footer/FooterBar'
// import Welcome from './pages/Welcome';

import Welcome from './pages/Welcome'
import Home from './pages/Home_New'
import MyStuff from './pages/MyStuff'
import MyValues from './pages/MyValues'
import MyChoices from './pages/MyChoices'
import Details from './pages/Details'
import Question from './components/Questions/Question'
import QuizResult from './components/Questions/QuizResult'
import { BrowserRouter } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'
import Article from './pages/Article'

//navigation bar styling, please do not remove
const majorTheme = createTheme({
  palette: {
    secondary: {
      main: '#FFFFFF',
      contrastText: '#0c3a25',
    },
    primary: {
      main: '#0C3A25',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: [
      'ClashGrotesk',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: "ClashGrotesk";
        src: local("ClashGrotesk"),
          url("./ClashGrotesk_Complete/ClashGrotesk_Complete/Fonts/WEB/fonts/ClashGrotesk-Regular.ttf")
            format("truetype");
        /* 
        Include font again */
        /* //Issues with rendering ClashGrotesk font, already downloaded and in directory, must be accessed for styling purposes */
      }`,
    },
  },
})

majorTheme.typography.body1 = {
  color: '#0C3A25',
}
//Routing, i.e. directing to other pages on the website, using page components and useNavigate to achieve
const Main = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={majorTheme}>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Article/:id" element={<Article />} />
          <Route path="/Home/WaitingForLabor" />
          <Route path="/MyChoices" element={<MyChoices />} />
          <Route path="/MyStuff" element={<MyStuff />} />
          <Route path="/MyValues" element={<MyValues />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/QuizResult" element={<QuizResult />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default Main
