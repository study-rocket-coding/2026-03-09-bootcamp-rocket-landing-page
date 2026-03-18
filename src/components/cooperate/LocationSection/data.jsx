import React from 'react';
import mapLg from '../../../assets/map/map-lg.png';
import mapSm from '../../../assets/map/map-sm.png';

export const locationData = {
  eyebrow: 'About us',
  title: '共同空間簡介',
  description: (
    <>
      共同空間有近 100 坪的空間，在開放式的公共區域中有
      <strong className="font-bold">休憩區以及舒適沙發討論區</strong>，
      在設計上盡量讓空間規劃簡單俐落，沒有多餘的裝修，我們營運空間的理念很簡單，希望藉由這裡能與更多「人」締結關係，
      並凝聚更多熱愛分享程式的進駐培訓者，讓這裡打造實現開發能量的集聚地。
    </>
  ),
  images: {
    lg: mapLg,
    sm: mapSm,
    alt: '火箭共同空間地理位置圖',
  },
};
