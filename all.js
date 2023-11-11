let data = [
  {
    id: 0,
    name: "山林悠遊雙人套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_3.png?raw=true",
    area: "台中",
    description:
      "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    group: 0,
    price: 880,
    rate: 9.3,
  },
  {
    id: 1,
    name: "漁樂碼頭釣魚體驗套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_2.png?raw=true",
    area: "台中",
    description:
      "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    group: 48,
    price: 1280,
    rate: 8.8,
  },
  {
    id: 2,
    name: "熊森公園親子二日遊套票",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_5.png?raw=true",
    area: "高雄",
    description:
      "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    group: 3,
    price: 2480,
    rate: 8.6,
  },
  {
    id: 3,
    name: "綠島自由行套裝行程",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_1.png?raw=true",
    area: "台東",
    description:
      "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    group: 8,
    price: 1280,
    rate: 8.6,
  },
  {
    id: 4,
    name: "清境高空觀景步道二日遊",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_4.png?raw=true",
    area: "台中",
    description:
      "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    group: 12,
    price: 2580,
    rate: 8.2,
  },
  {
    id: 5,
    name: "南庄度假村露營車二日遊",
    imgUrl:
      "https://github.com/hexschool/2022-web-layout-training/blob/main/js_week5/travel_6.png?raw=true",
    area: "苗栗",
    description:
      "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    group: 2,
    price: 2480,
    rate: 9.2,
  },
];

const tourCard = document.querySelector(".tour-card");
const searchResult = document.querySelector(".searchResult");

//網頁初始化
function init() {
  renderData(data);
}
init();

//畫面渲染函式
function renderData(data) {
  let str = "";
  data.forEach(function (item, index) {
    let tourCardList = ` <li class="d-flex flex-column col-4 col-md-6 col-sm-12 g-1 mb-8">
    <div class="card-img position-relative">
      <span
        class="bg-secondary fz-20 text-white position-absolute top-n2 px-5 py-2 border-radius-4"
        >${item.area} </span
      >
      <img
        src=${item.imgUrl}
        alt=""
        class="card-img-hover"
      />
    </div>
    <div
      class="card d-flex flex-column bg-white box-shadow-4 px-5 py-5 flex-grow-1 position-relative"
    >
      <span
        class="bg-primary fz-16 text-white position-absolute top-n3 start-0 px-2 py-1 border-radius-4"
        >${item.rate}</span
      >
      <div class="card-title mb-4">
        <h2 class="fz-24 text-primary border-bottom-3 fw-medium">
        ${item.name}
        </h2>
      </div>
      <div class="card-body flex-grow-1">
        <p class="text-grey mb-8">
        ${item.description}
        </p>
      </div>
      <div
        class="card-foot d-flex align-item-center justify-content-between"
      >
        <span class="d-flex align-item-center text-primary fz-16">
          <span class="material-icons-outlined me-1"> error </span
          >剩下最後  ${item.group} 組</span
        >
        <p class="text-primary fz-32 d-flex align-item-center">
          <span class="text-primary fz-16 me-1"> TWD</span>${item.price} 
        </p>
      </div>
    </div>
  </li>`;
    str += tourCardList;
  });
  tourCard.innerHTML = str;
  searchResult.innerHTML = `<p>本次搜尋共 ${data.length} 筆資料</p>`;
}

//監聽地區選擇;
const areaSearchFilter = document.querySelector("#areaSearch");
areaSearchFilter.addEventListener("change", function (e) {
  //無結果函式
  function renderNoResult() {
    tourCard.innerHTML = `<li class="text-grey fz-16 m0-auto ">目前沒有${e.target.value}地區的行程</li>`;
  }

  //取得option比對符合的陣列
  const filterData = data.filter((item) => e.target.value === item.area);
  //判斷選取值及輸出內容
  if (e.target.value === "") {
    renderData(data);
  } else if (e.target.value !== "" && filterData.length == 0) {
    renderNoResult();
  } else {
    renderData(filterData);
  }
});

//將數字及負號字元外的字符刪除
function filterNum(value) {
  return Number(value.replace(/[^\d-.]/g, ""));
}

const addTicketBtn = document.querySelector("#addTicketBtn");
const addTicketForm = document.querySelector(".add-Ticket-form");

addTicketBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const ticketNameValue = ticketName.value.trim();
  const ticketUrlValue = ticketUrl.value.trim();
  const ticketAreaValue = ticketArea.value.trim();
  const ticketDescriptionValue = ticketDescription.value.trim();
  const ticketNumValue = filterNum(ticketNum.value.trim());
  const ticketPriceValue = filterNum(ticketPrice.value.trim());
  const ticketRateValue = filterNum(ticketRate.value.trim());
  let newData = {};
  newData.name = ticketNameValue;
  newData.imgUrl = ticketUrlValue;
  newData.area = ticketAreaValue;
  newData.description = ticketDescriptionValue;
  newData.group = ticketNumValue;
  newData.price = ticketPriceValue;
  newData.rate = ticketRateValue;

  console.log(ticketUrlValue);

  if (
    ticketNameValue === "" ||
    ticketUrlValue === "" ||
    ticketAreaValue === "" ||
    ticketDescriptionValue === "" ||
    ticketNumValue === "" ||
    ticketPriceValue === "" ||
    ticketRateValue === ""
  ) {
    alert("請填寫完整");
    return;
  } else if (ticketRateValue < 0 || ticketRateValue > 10) {
    alert("請填寫1-10之間的分數");
    return;
  }

  data.push(newData);
  renderData(data);

  ticketName.value = "";
  ticketUrl.value = "";
  ticketArea.value = "";
  ticketDescription.value = "";
  ticketNum.value = "";
  ticketPrice.value = "";
  ticketRate.value = "";
});
