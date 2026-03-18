import frontendImg from '@/assets/group/about-rocket-frontend.svg';
import backendImg from '@/assets/group/about-rocket-backend.svg';
import uiImg from '@/assets/group/about-rocket-ui.svg';

export const rocketData = [
  {
    title: {
      'zh-tw': '前端工程師',
      en: 'Front-end engineer',
    },
    badges: ['HTML', 'CSS', 'JavaScript'],
    src: frontendImg,
  },
  {
    title: {
      'zh-tw': '後端工程師',
      en: 'Back-end engineer',
    },
    badges: ['C#', '.Net'],
    src: backendImg,
  },
  {
    title: {
      'zh-tw': 'UI 設計師',
      en: 'UI designer',
    },
    badges: ['Figma', 'HTML', 'CSS'],
    src: uiImg,
  },
];