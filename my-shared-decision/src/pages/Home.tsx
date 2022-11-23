import React from 'react';
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyChoices from './MyChoices';
import MyStuff from './MyStuff';
import MyValues from './MyValues';
import FooterBar from '../components/Footer/FooterBar';
import { render } from '@testing-library/react';
import Welcome from './Welcome'
function Home() {
  // render(<div>
  //   <Navbar/>
  //   <FooterBar/>
  // </div>)
  
  return (
    <div>

    <div>
    <h2>When is labor induction recommended in healthy pregnancies?</h2>
    <p>The American College of Obstetricans and Gynecologists recommends 
      offering labor induction between 41 and 42 weeks and
      recommendeds labor induction</p>
    </div>

    <div>
      <h1>What are my choices?</h1>
      <div>
        <button>Compare All</button>
      </div>

    </div>
    </div>
  );
}
  
export default Home;


