import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyChoices from './pages/MyChoices';
import MyStuff from './pages/MyStuff';
import MyValues from './pages/MyValues';
import FooterBar from './components/Footer/FooterBar';
import { render } from '@testing-library/react';
import Welcome from './pages/Welcome'
import Home from './pages/Home'

function App() {
  // render(<div>
  //   <Navbar/>
  //   <FooterBar/>
  // </div>)
  
  return (
    <div>
<Router>
    <Navbar/>
      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/MyChoices" element={<MyChoices/>} />
        <Route path="/MyValues" element={<MyValues />} />
        <Route path="/MyStuff" element={<MyStuff/>} />
      </Routes>
      <FooterBar/>
    </Router>
    </div>
  );
}
  
export default App;


