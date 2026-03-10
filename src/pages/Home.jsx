import React from 'react';
import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero';
import AboutRocket from '../components/home/AboutRocket';
import SuccessfulCase from '../components/home/SuccessfulCase';
import AboutTraining from '../components/home/AboutTraining';
import FAQ from '../components/home/FAQ';
import Organizers from '../components/home/Organizers';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMarquee />
      <main className="mt-16 flex-1">
        <HomeHero />
        <AboutRocket />
        <SuccessfulCase />
        <AboutTraining />
        <FAQ />
        <Organizers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
