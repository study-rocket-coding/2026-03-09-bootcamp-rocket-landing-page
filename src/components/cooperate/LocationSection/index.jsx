import LocationMap from './LocationMap';
import LocationInfo from './LocationInfo';
import { locationData } from './data';
import { Card, CardContent } from '@/components/ui/card';

const LocationSection = () => {
  return (
    <section className="location-section notebook:px-0 flex w-full justify-center px-4">
      <Card className="bg-primary-violet-200 notebook:rounded-[40px] w-full max-w-[1440px] overflow-hidden rounded-2xl border-none shadow-none ring-0">
        <CardContent className="notebook:px-10 desktop:px-[72px] notebook:py-10 desktop:py-[60px] notebook:grid notebook:grid-cols-[minmax(0,636px)_minmax(0,500px)] notebook:gap-x-10 desktop:gap-x-[100px] notebook:items-start notebook:gap-0 flex flex-col items-center gap-6 p-9">
          {/* 地圖區域 */}
          <LocationMap className="notebook:order-1 order-2" />

          {/* 文字區域 */}
          <LocationInfo {...locationData} className="notebook:order-2 order-1" />
        </CardContent>
      </Card>
    </section>
  );
};

export default LocationSection;
