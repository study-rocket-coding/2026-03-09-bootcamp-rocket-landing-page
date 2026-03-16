import MainLayout from '../components/common/MainLayout';
import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero';
import AboutRocket from '../components/home/AboutRocket';
import SuccessfulCase from '../components/home/SuccessfulCase';
import AboutTraining from '../components/home/AboutTraining';
import Faq from '../components/home/Faq';
import Organizers from '../components/home/Organizers';
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
