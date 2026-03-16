import coachWeijie from '@/assets/coach/coach-weijie-4x.png';
import coachYinmin from '@/assets/coach/coach-yinmin-4x.png';
import coachJustin from '@/assets/coach/coach-justin-4x.png';
import coachCasper from '@/assets/coach/coach-casper-4x.png';
import frontendTrainingImg from '@/assets/training/training-img-frontend-lg.svg';
import backendTrainingImg from '@/assets/training/training-img-backend-lg.svg';
import uiTrainingImg from '@/assets/training/training-img-ui-lg.svg';

export const trainings = [
  {
    title: '前端工程師',
    about: {
      title: '關於前端',
      content: '主要專精 JavaScript 前端 (65%)、後端 (35%) 開發，投入語言為 HTML、CSS、JavaScript，<span class="font-bold bg-gradient-to-t from-accent-yellow from-50% to-transparent to-50%">適合有一些 HTML、CSS、JS 基礎的學員報名</span>。'
    },
    requirement: {
      title: '應徵門檻',
      items: [
        '會用 CSS Flexbox 排過網頁，有 RWD 響應式網頁概念，需提交 CSS 切版作品，請<span class="font-bold bg-gradient-to-t from-accent-yellow from-50% to-transparent to-50%">在履歷上需附網頁切版作品</span>，Codepen、GitHub Pages 皆可',
        '了解 JS 變數、陣列物件、DOM、監聽、AJAX 等知識，尚未熟練也沒關係。'
      ]
    },
    learn: {
      title: '你會學到',
      skills: [
        '網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS',
        '前端開發技能：JavaScript、TypeScript、ES6、SPA、JS plugin 整合、API 介接、NPM',
        '後端開發技能：Node.js、MongoDB、heroku、express、JWT',
        'JS 框架：React(Hooks)、Vue3，會依照未來你想投入的公司進行調整',
        '程式版控：Git、GitHub、Git Flow 工作流程'
      ]
    },
    src: frontendTrainingImg,
    isReverse: false
  },
  {
    title: '後端工程師',
    about: {
      title: '關於後端',
      content: '後端工程師組主要專注為後端開發，投入後端語言為<span class="font-bold bg-gradient-to-t from-accent-yellow from-50% to-transparent to-50%"> C#、.Net，適合無程式背景的學員報名</span>。'
    },
    learn: {
      title: '你會學到',
      skills: [
        '後端語言：C#',
        '程式架構：ASP.NET Web Form、ASP.NET MVC、Web API',
        '資料庫與雲端主機：MSSQL、Microsoft Azure'
      ]
    },
    src: backendTrainingImg,
    isReverse: true
  },
  {
    title: 'UI 設計師',
    about: {
      title: '關於設計',
      content: '主要以網頁 UI 設計 50%、網頁前端 50% 的雙技能樹養成，<span class="font-bold bg-gradient-to-t from-accent-yellow from-50% to-transparent to-50%">適合具備視覺背景，操作過繪圖軟體尤佳，歡迎無工作經驗的學員報名</span>。'
    },
    learn: {
      title: '你會學到',
      skills: [
        '網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗',
        '介面繪製流程：Figma 操作、Mockup、Prototype、標註文件',
        '網頁切版技能：HTML5、CSS、Bootstrap5'
      ]
    },
    src: uiTrainingImg,
    isReverse: false
  }
];

export const coaches = [
  {
    id: 'weijie',
    name: '廖 洧 杰',
    title: '前端教練 | 廖洧杰',
    src: coachWeijie,
    experiences: [
      '2016-2022 過往經歷：六角學院校長、高雄火箭隊前端教練',
      '2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位',
      '2013-2019 授課人數：線上+線下授課學員超過 25,000 位',
      '2014-2019 線下授課：高雄大學前端領域兼任講師',
      '2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統'
    ]
  },
  {
    id: 'yinmin',
    name: '穎 旻',
    title: '前端教練 | 穎旻',
    src: coachYinmin,
    experiences: [
      '六角學院前端工程師',
      '六角學院前端講師',
      '金龍國小教育訓練講師',
      '國泰產險教育訓練講師'
    ]
  },
  { id: 'justin',
    name: '賈 斯 汀',
    title: '後端教練 | 賈斯汀',
    src: coachJustin,
    experiences: [
      '總統府全球資訊網系統維護及開發',
      '總統府 APP 新聞即時通系統開發',
      '金管會 EIP SSO 整合',
      '經濟部工業局電子書包加值應用計畫系統規劃、設計開發',
      '國立海生館活動與報名系統規劃開發',
      '國立海生館海洋教育網規劃開發',
      '台灣淨水器材百科商務平台規劃開發',
      '高雄捷運網站',
      '高雄世運志工服務系統'
    ]
  },
  { id: 'casper',
    name: '卡 斯 伯',
    title: 'UI 教練 | 卡斯伯',
    src: coachCasper,
    experiences: [
      '2016-2022 過往經歷：六角學院共同創辦人',
      '2016-2022 近期授課經驗：Vue 3 直播班講師',
      '2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師',
      '六屆 IT 鐵人邦獲選紀錄',
      'Modern Web 研討會講者',
      '線上課程超過萬人註冊'
    ]
  }
];