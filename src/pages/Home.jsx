import MainLayout from '../components/common/MainLayout';
import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero/index';
import AboutRocket from '../components/home/AboutRocket/index';
import SuccessfulCase from '../components/home/SuccessfulCase/index';
import AboutTraining from '../components/home/AboutTraining/index';
import Faq from '../components/home/Faq/index';
import Organizers from '../components/home/Organizers/index';
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
