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
import Quiz from './components/Quiz'
import Question from './components/Question'
import Details from './pages/Details'
import Question1 from './components/Questions/Question1'
import Question2 from './components/Questions/Question2'
import Question3 from './components/Questions/Question3'
import Question4 from './components/Questions/Question4'
import Question5 from './components/Questions/Question5'
import Question6 from './components/Questions/Question6'
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
      main: '#0c3a25',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['ClashGrotesk'].join(''),
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
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Question" element={<Question />} />
          <Route path="/Question1" element={<Question1 />} />
          <Route path="/Question2" element={<Question2 />} />
          <Route path="/Question3" element={<Question3 />} />
          <Route path="/Question4" element={<Question4 />} />
          <Route path="/Question5" element={<Question5 />} />
          <Route path="/Question6" element={<Question6 />} />
          <Route path="/QuizResult" element={<QuizResult />} />
          <Route path="/Details" element={<Details />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
export default Main
