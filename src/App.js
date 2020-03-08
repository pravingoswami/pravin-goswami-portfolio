import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import BannerSection from './components/BannerSection';
import AboutSection from './components/AboutSection';
import Service from './components/Service';
import Work from './components/Work';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
        <div>
      <div className="KW_progressContainer">
      <div className="KW_progressBar">

      </div>
    </div>
    <div className="page">
      <Navbar />

    <div id="colorlib-page">

      <Header />
    
      <BannerSection />

      <AboutSection />

      <Service />
      
      <Work />
      
      <Footer />

      <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>

      </div>

    </div>


    </div>
    </BrowserRouter>
  );
}

export default App;
