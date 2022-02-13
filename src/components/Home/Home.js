import React from 'react';
import Body from '../BodyPages/Body/Body.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Services from '../Services/Services.js';

const Home = () => {
    return (
      <div>
        <Header />
        <Services />
        <Body/>
        <Footer />
      </div>
    );
};

export default Home;