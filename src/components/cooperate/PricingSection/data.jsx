export const pricingHeader = {
  title: '進駐費用',
  description: '進駐區域共分兩區塊：培訓區域及進駐區域，目前僅接受租期 1 個月以上，單日暫不開放。',
};

export const promoContent = {
  year: '2023',
  highlight: '限定優惠價',
  textBefore: '年為試營運階段，進駐可享有',
  textAfter: '!',
};

export const pricingCta = {
  text: '馬上填表單！',
  href: '/something',
};

export const pricingPlans = [
  {
    title: '進駐者',
    price: '3,200',
    unit: 'Month',
    isHighlighted: true,
    features: [
      { text: '進駐區域', isHighlighted: true },
      { text: '9:00-18:00 可使用' },
      { text: '固定座位', isHighlighted: true },
      { text: '專屬置物櫃', isHighlighted: true },
      { text: '免費無線網路' },
      { text: '免費咖啡茶水' },
      { text: '原價｜3,500 / Month', isOriginalPrice: true },
    ],
  },
  {
    title: '單日使用（暫不提供）',
    price: '300',
    unit: 'Day',
    isHighlighted: false,
    features: [
      { text: '培訓區域' },
      { text: '9:00-18:00 可使用' },
      { text: '非固定座位' },
      { text: '共用置物櫃' },
      { text: '免費無線網路' },
      { text: '免費咖啡茶水' },
      { text: '原價｜300 / Day', isOriginalPrice: true },
    ],
  },
];
