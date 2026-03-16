import React from 'react';
import LocationMap from './LocationMap';
import LocationInfo from './LocationInfo';
import { locationData } from './data';
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section className="location-section flex justify-center w-full px-4 notebook:px-0">
      <Card className="w-full max-w-[1440px] border-none shadow-none ring-0 bg-primary-violet-200 rounded-2xl notebook:rounded-[40px]   
      overflow-hidden">
        <CardContent className="p-9 notebook:px-10 desktop:px-[72px] notebook:py-10 desktop:py-[60px] flex flex-col notebook:grid       
      notebook:grid-cols-[minmax(0,636px)_minmax(0,500px)] notebook:gap-x-10 desktop:gap-x-[100px] items-center notebook:items-start gap-6    
      notebook:gap-0">

        
        {/* 地圖區域 */}
        <LocationMap className="order-2 notebook:order-1" />

        {/* 文字區域 */}
        <LocationInfo 
          {...locationData} 
          className="order-1 notebook:order-2" 
        />
      </CardContent>
      </Card>
    </section>
  );
};

export default LocationSection;
