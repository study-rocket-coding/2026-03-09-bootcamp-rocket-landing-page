import icNo1 from '@/assets/icon/ic-no.1-lg.svg';
import icNo2 from '@/assets/icon/ic-no.2-lg.svg';
import icNo3 from '@/assets/icon/ic-no.3-lg.svg';
import icNo4 from '@/assets/icon/ic-no.4-lg.svg';
import icNo5 from '@/assets/icon/ic-no.5-lg.svg';

export const feeFaqs = [
  { icon: icNo1,
    alt: icNo1,
    question: '請問參加培訓需要費用嗎？',
    answer: '不會有任何費用，僅需要場地費 ( $1,200 / Month )，其餘完全免費。'
  },
  { icon: icNo2,
    alt: icNo2,
    question: '你們不是直銷吧？',
    answer: '不是，不會推銷任何東西。'
  },
  { icon: icNo3,
    alt: icNo3,
    question: '你們真的不是詐騙集團？台灣有其他單位做一樣的事了嗎？',
    answer: (
      <>
        其實在台灣已經有許多單位在做一樣的事了，但絕大部分都在中北部，例如{' '}
        <a href="https://aiworks.tw/" className="text-inherit underline">AppWorks School</a>、{' '}
        <a href="https://www.programmer101.org/" className="text-inherit underline">CMoney</a>，以及在台南的{' '}
        <a href="https://www.facebook.com/GoodideasStudio/" className="text-inherit underline">好想工作室</a>
        。一樣也是提供<strong className="font-bold">免費培訓</strong>。而在高雄上，我們是第一個單位舉辦此培訓營。
      </>
    )
  },
];

export const processFaqs = [
  { icon: icNo1,
    alt: icNo1,
    question: '那培訓的時間是多久呢？',
    answer: '培訓時間為七個月，您可以選擇要投入前端工程師、後端工程師或 UI 設計師。'
  },
  { icon: icNo2,
    alt: icNo2,
    question: '那如果七個月後，可以續留嗎？',
    answer: '當然可以，我們提供額外的進駐空間供您使用。在這裡，您可以與其他火箭隊夥伴保持緊密交流，分享心得，或者利用此空間接案和進行遠端工作，讓您的技能不斷精進。'
  },
  { icon: icNo3,
    alt: icNo3,
    question: '你們和其他的培訓單位有什麼差異呢？',
    answer: (
      <>
        我們的培訓流程，主要是將學員培育成
        <strong className="font-bold">「擁有自我解決問題的工程師」</strong>，大部分的實體補習班都會給您一個完整課綱，您照著它走完就結束。 但是不論任何工作，出社會才會發現，有很多事情都還是自己不懂的，您必須
        <strong className="font-bold">了解該如何找出問題癥結點，並解決問題</strong>。讓您有足夠的搜索與研究能力，自行打造火箭，航向您想去的星球。
      </>
    )
  },
  { icon: icNo4,
    alt: icNo4,
    question: '這麼說來，你們沒有一個完整課綱？',
    answer: (
      <>
        是的，我們只會針對您當下的狀態，並觀察您需要什麼養分，提供給您
        <strong className="font-bold">「目標」</strong>，您再依照此目標去達成，而我們也會從您研究的過程中，觀察您還需要哪些技術，以達到其目標。 舉例來說，您對 web layout 沒有從零到有的開發經驗，那教練就陪您跑過整個流程，甚至模擬自己是業主，與您討論網站建構流程。 或是後端您沒有自己架過郵件伺服器，那教練就會給您建立一個最小可行性的郵件服務，以達成目標。
      </>
    )
  },
  { icon: icNo5,
    alt: icNo5,
    question: '所以有很多的時間都是在自我研究技術？',
    answer: '是的，沒有錯，教練的存在是觀察您目前的狀態，並與您共同建立各階段性的目標，確保您方向沒有走歪，能順遂朝自己的方向邁進。'
  },
];