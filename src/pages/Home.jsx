import React from 'react';
import MainLayout from '../components/common/MainLayout';
import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero';
import AboutRocket from '../components/home/AboutRocket/AboutRocket';
import SuccessfulCase from '../components/home/SuccessfulCase/SuccessfulCase';
import AboutTraining from '../components/home/AboutTraining/AboutTraining';
import Faq from '../components/home/Faq/Faq';
import Organizers from '../components/home/Organizers/Organizers';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMarquee />
      <MainLayout>
        <HomeHero />
        <AboutRocket />
        <SuccessfulCase />
        <AboutTraining />
        <Faq />
        <Organizers />
      </MainLayout>
      <Footer />
    </div>
  );
};

export default Home;
