import React from 'react';
import Navbar from '../components/Navbar';
import FooterBar from '../components/Footer/FooterBar'


const MyValues = () => {
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
	}}>
    <div>
        
    <h1>Your values,</h1>
	<h1>your choices!</h1>
	<p>Reflect on what is most 
		important to you. Answer six short 
		questions and use the to talk to your provider.</p>
	<div>
	<button>Begin</button>
	</div>
    </div>
    <FooterBar/>

    </div>
);
};

export default MyValues;
