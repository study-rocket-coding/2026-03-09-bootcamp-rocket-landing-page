import HeaderMarquee from '../components/common/HeaderMarquee';
import HomeHero from '../components/home/HomeHero/HomeHero';
import LocationSection from '../components/cooperate/LocationSection';
import FieldAndServiceSection from '../components/cooperate/FieldAndServiceSection';
import PricingSection from '../components/cooperate/PricingSection';
import Footer from '../components/common/Footer';

const App = () => {
  return (
    <div className="coworking-space-body antialiased font-main text-neutral-700 bg-white">
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
