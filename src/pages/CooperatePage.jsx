import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero/index';
import LocationSection from '../components/cooperate/LocationSection';
import FieldAndServiceSection from '../components/cooperate/FieldAndServiceSection';
import PricingSection from '../components/cooperate/PricingSection';
import Footer from '../components/common/Footer';

const App = () => {
  return (
    <div className="coworking-space-body font-main bg-white text-neutral-700 antialiased">
      <HeaderMarquee />
      <main className="coworking-space-main">
        <HomeHero />
        <LocationSection />
        <FieldAndServiceSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
