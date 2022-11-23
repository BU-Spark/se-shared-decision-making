import React from 'react';
import Navbar from '../components/Navbar';
import FooterBar from '../components/Footer/FooterBar'


const Welcome = () => {
return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
	}}>
    <div>
        
        <p>Pick one to continue</p>

        <h1>Welcome <a href = "Home">&#xf061;</a> </h1>
        <p>View the site in English</p>

        <h1>Bienvenidos</h1>
        <p>Ver el sitio en español <a href = "Home">&#xf061;</a> </p>

        <h1>Akeyi</h1>
        <p>Gade sit la nan kreyòl ayisyen <a href = "Home">&#xf061;</a></p>

    </div>
    {/* <FooterBar/> */}

    </div>
);
};

export default Welcome;
