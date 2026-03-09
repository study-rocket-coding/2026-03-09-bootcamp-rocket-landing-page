import React, { useState } from 'react';
import trainingBg from '../../assets/training/training-bg.png';
import icGoRocket from '../../assets/icon/ic-go-rocket.svg';
import coachWeijie from '../../assets/coach/coach-weijie-4x.png';
import coachYinmin from '../../assets/coach/coach-yinmin-4x.png';
import coachJustin from '../../assets/coach/coach-justin-4x.png';
import coachCasper from '../../assets/coach/coach-casper-4x.png';
import frontendTrainingImg from '../../assets/training/training-img-frontend-lg.svg';
import backendTrainingImg from '../../assets/training/training-img-backend-lg.svg';
import uiTrainingImg from '../../assets/training/training-img-ui-lg.svg';

const DetailCard = ({ title, about, requirement, learn, img, isReverse }) => {
  return (
    <li className={`flex flex-col gap-12 rounded-2xl border-2 border-neutral-200 bg-white bg-cover bg-center p-6 pt-0 md:p-12 md:px-20 md:pb-10 lg:gap-24 ${isReverse ? 'md:flex-row-reverse' : 'md:flex-row'}`} style={{ backgroundImage: `url(${trainingBg})` }}>
      <div className="flex flex-1 flex-col gap-9 min-w-0">
        <div className="-mt-8 mb-6 w-full md:mb-8">
          <h3 className="w-fit rounded-xl border-2 border-neutral-700 bg-white px-10 py-3 text-xl font-bold shadow-[4px_4px_0_#363636] md:text-2xl">
            {title}
          </h3>
        </div>
        <div className="flex flex-col gap-9">
          <div className="flex flex-col gap-4">
            <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{about.title}</h4>
            <p className="text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: about.content }} />
          </div>
          {requirement && (
            <div className="flex flex-col gap-4">
              <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{requirement.title}</h4>
              <ol className="list-inside list-decimal text-base leading-relaxed">
                {requirement.items.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ol>
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h4 className="w-fit border-b-3 border-neutral-700 pb-0.5 text-xl font-bold">{learn.title}</h4>
            <ol className="list-inside list-decimal text-base leading-relaxed">
              {learn.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 items-center justify-center self-center">
        <img src={img} alt={title} className="max-w-full" />
      </div>
    </li>
  );
};

const AboutTraining = () => {
  const [activeCoach, setActiveCoach] = useState('weijie');

  const trainingData = [
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
        items: [
          '網頁切版技能：HTML5、CSS3、SCSS、Bootsrap5、TailwindCSS',
          '前端開發技能：JavaScript、TypeScript、ES6、SPA、JS plugin 整合、API 介接、NPM',
          '後端開發技能：Node.js、MongoDB、heroku、express、JWT',
          'JS 框架：React(Hooks)、Vue3，會依照未來你想投入的公司進行調整',
          '程式版控：Git、GitHub、Git Flow 工作流程'
        ]
      },
      img: frontendTrainingImg,
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
        items: [
          '後端語言：C#',
          '程式架構：ASP.NET Web Form、ASP.NET MVC、Web API',
          '資料庫與雲端主機：MSSQL、Microsoft Azure'
        ]
      },
      img: backendTrainingImg,
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
        items: [
          '網頁前置規劃：Logic Flow、Wireframe、網格系統、使用者體驗',
          '介面繪製流程：Figma 操作、Mockup、Prototype、標註文件',
          '網頁切版技能：HTML5、CSS、Bootstrap5'
        ]
      },
      img: uiTrainingImg,
      isReverse: false
    }
  ];

  const coaches = [
    { id: 'weijie', name: '廖 洧 杰', title: '前端教練 | 廖洧杰', img: coachWeijie, exp: [
      '2016-2022 過往經歷：六角學院校長、高雄火箭隊前端教練',
      '2013-2019 成功案例：協助無資訊背景轉職工程師人數超過 500 位',
      '2013-2019 授課人數：線上+線下授課學員超過 25,000 位',
      '2014-2019 線下授課：高雄大學前端領域兼任講師',
      '2007-2019 實務經驗：經手超過 100 個實際專案，其領域不乏中小企業、政府專案、銀行系統'
    ]},
    { id: 'yinmin', name: '穎 旻', title: '前端教練 | 穎旻', img: coachYinmin, exp: [
      '六角學院前端工程師',
      '六角學院前端講師',
      '金龍國小教育訓練講師',
      '國泰產險教育訓練講師'
    ]},
    { id: 'justin', name: '賈 斯 汀', title: '後端教練 | 賈斯汀', img: coachJustin, exp: [
      '總統府全球資訊網系統維護及開發',
      '總統府 APP 新聞即時通系統開發',
      '金管會 EIP SSO 整合',
      '經濟部工業局電子書包加值應用計畫系統規劃、設計開發',
      '國立海生館活動與報名系統規劃開發',
      '國立海生館海洋教育網規劃開發',
      '台灣淨水器材百科商務平台規劃開發',
      '高雄捷運網站',
      '高雄世運志工服務系統'
    ]},
    { id: 'casper', name: '卡 斯 伯', title: 'UI 教練 | 卡斯伯', img: coachCasper, exp: [
      '2016-2022 過往經歷：六角學院共同創辦人',
      '2016-2022 近期授課經驗：Vue 3 直播班講師',
      '2013-2016 實務經驗：鴻海軟體工程師，設計師轉職前端工程師',
      '六屆 IT 鐵人邦獲選紀錄',
      'Modern Web 研討會講者',
      '線上課程超過萬人註冊'
    ]}
  ];

  return (
    <section className="bg-neutral-100 font-sans">
      <div className="mx-auto max-w-[1076px] px-6 py-20 md:px-0">
        <hgroup className="flex flex-col items-center">
          <h2 className="text-[32px] font-bold md:text-[36px]">關於培訓</h2>
          <div className="mt-3 mb-12 flex items-center rounded-[50px] bg-white px-5 py-3 shadow-[0_2px_4px_#e8e8e8] md:mb-24 lg:px-6">
            <p className="mr-3 border-r-2 border-neutral-200 pr-3 font-bold whitespace-nowrap">近期梯次</p>
            <div className="flex max-w-[211px] overflow-hidden md:max-w-[332px] lg:max-w-[507px]">
              <p className="whitespace-nowrap font-medium md:animate-none animate-[marquee-ticker-first_20s_linear_infinite]">第十三梯 (2023/5/8~2023/11/30)<span className="md:inline hidden">、</span></p>
              <p className="whitespace-nowrap font-medium md:animate-none animate-[marquee-ticker-second_20s_linear_infinite] md:ml-0 ml-4">第十四梯 (2023/7/31~2024/2/28)</p>
            </div>
          </div>
        </hgroup>

        <ul className="mb-24 flex flex-col gap-12 lg:mb-32">
          {trainingData.map((data, index) => (
            <DetailCard key={index} {...data} />
          ))}
        </ul>

        <div className="mb-32 md:mb-12">
          <h3 className="mb-10 text-[28px] font-bold md:mb-15">教練團</h3>
          
          {/* Desktop Coach Tabs */}
          <ul className="mb-8 hidden justify-between list-none md:flex gap-6">
            {coaches.map((coach) => (
              <li key={coach.id} className="w-full max-w-[251px]">
                <button 
                  onClick={() => setActiveCoach(coach.id)}
                  className={`relative block h-[160px] w-full cursor-pointer rounded-xl border-2 border-neutral-700 bg-white transition-colors active:bg-primary-blue-100 ${activeCoach === coach.id ? 'bg-primary-blue-100' : ''}`}
                >
                  <div className="absolute bottom-0 left-0 z-10 h-[180px] w-[180px]">
                    <img src={coach.img} alt={coach.name} className="h-full w-full object-contain" />
                  </div>
                  <div className="absolute top-[-24px] right-5 z-20 flex w-12 flex-col items-center justify-center rounded-xl border-2 border-neutral-700 bg-white p-4 shadow-[4px_4px_0_#363636] transition-transform hover:-translate-y-2.5 [writing-mode:vertical-rl]">
                    <span className="text-base font-bold">{coach.name}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Profile */}
          <div className="hidden min-h-[200px] md:block">
            {activeCoach ? (
              <div className="animate-fadeIn">
                <p className="mb-3 text-2xl font-bold">{coaches.find(c => c.id === activeCoach).title}</p>
                <ul className="list-inside list-disc pl-4 leading-relaxed">
                  {coaches.find(c => c.id === activeCoach).exp.map((item, idx) => (
                    <li key={idx} className="text-neutral-700">{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="flex h-full items-center justify-center py-24 text-lg text-neutral-400">
                點擊上方教練卡片查看詳細資訊
              </div>
            )}
          </div>

          {/* Mobile Slider */}
          <ul className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-6 md:hidden scrollbar-none">
            {coaches.map((coach) => (
              <li key={coach.id} className="min-w-[calc(100vw-98px)] snap-start">
                <div className="relative mb-8 block h-[200px] w-full rounded-xl border-2 border-neutral-700 bg-white p-4">
                  <div className="absolute bottom-0 left-0 z-10 h-[220px] w-[220px]">
                    <img src={coach.img} alt={coach.name} className="h-full w-full object-contain" />
                  </div>
                  <div className="absolute top-[-24px] right-5 z-20 flex w-12 flex-col items-center justify-center rounded-xl border-2 border-neutral-700 bg-white p-4 shadow-[4px_4px_0_#363636] [writing-mode:vertical-rl]">
                    <span className="text-base font-bold">{coach.name}</span>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xl font-bold">{coach.title}</p>
                  <ul className="list-inside list-disc pl-4 leading-relaxed text-neutral-700">
                    {coach.exp.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="group relative flex h-20 items-center justify-center rounded-2xl border-2 border-neutral-700 bg-primary-blue-100 transition-all md:h-24 md:translate-y-24 translate-y-8">
          <a href="https://register.rocket-coding.com/" target="_blank" rel="noreferrer noopener" className="flex w-full items-center justify-center text-center text-inherit no-underline">
            <h3 className="text-2xl font-bold md:text-3xl">馬上報名！</h3>
            <img src={icGoRocket} alt="go" className="ml-0 h-6 w-6 opacity-0 transition-all group-hover:ml-5 group-hover:opacity-100 hidden md:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutTraining;
