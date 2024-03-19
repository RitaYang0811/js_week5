const tourCard = document.querySelector(".tour-card");
const searchResult = document.querySelector(".searchResult");
const addTicketBtn = document.querySelector("#addTicketBtn");
const addTicketForm = document.querySelector(".add-Ticket-form");
const formInput = document.querySelectorAll(".add-Ticket-form .form-input");

//取得資料
let data = [];
axios
  .get(
    "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json"
  )
  .then(function (res) {
    console.log(res);
    data = res.data.data;
    renderData(data);
    renderchart(data);
  })
  .catch(function (error) {
    console.log(error);
  });

//網頁初始化
function init() {
  renderData(data);
}
init();

//渲染畫面函式
function renderData(data) {
  let str = "";
  data.forEach(function (item, index) {
    let tourCardList = ` <li class="d-flex flex-column col-6  col-sm-12 g-1 mb-8">
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

  //將篩選的新陣列賦予到新變數上
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
function filterNum(input) {
  return Number(input.value.trim().replace(/[^\d-.]/g, ""));
}

//輸入完清除數輸入格
function clearValue() {
  formInput.forEach(function (item) {
    item.value = "";
  });
}

// 監聽新增套票按鈕點擊事件
addTicketBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let newData = {};
  newData.name = ticketName.value.trim();
  newData.imgUrl = ticketUrl.value.trim();
  newData.area = ticketArea.value.trim();
  newData.description = ticketDescription.value.trim();
  newData.group = filterNum(ticketNum);
  newData.price = filterNum(ticketPrice);
  newData.rate = filterNum(ticketRate);

  //無法中斷回圈該用for回圈
  // formInput.forEach(function (item) {
  //   console.log(item.value);
  //   if (item.value === "") {
  //     alert(`請填寫完整`);
  //   }
  //   return;
  // });

  //新增未填寫及星級分數判斷
  for (let i = 0; i < formInput.length; i++) {
    if (formInput[i].value.trim() === "") {
      alert(`欄位請填寫完整`);
      return;
    } else if (filterNum(ticketRate) < 0 || filterNum(ticketRate) > 10) {
      alert("套票星級請填寫1-10之間的分數");
      return;
    }
  }

  data.push(newData);
  renderData(data);
  renderchart(data);
  //將選單變為全部地區
  areaSearchFilter.value = "";
  clearValue();
});
//生成圖表
function renderchart(data) {
  //篩選統計地區，自動生成地區及數量物件
  //組完資料再渲染
  let totalObj = {};
  let newData = [];
  data.forEach(function (item) {
    if (totalObj[item.area] === undefined) {
      totalObj[item.area] = 1;
    } else {
      totalObj[item.area] += 1;
    }
  });
  let area = Object.keys(totalObj);
  //console.log(area); //['高雄', '台北', '台中']
  area.forEach(function (item) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  });

  //console.log(newData);//[ ["高雄",1],["台北",1],["台中",1] ]

  //統計圖表設定
  const chart = c3.generate({
    bindto: "#chart", // HTML 元素綁定
    data: {
      columns: newData, // 資料存放
      type: "donut", // 圖表種類
      colors: {
        高雄: "#E68618",
        台中: "#5151D3",
        台北: "#26BFC7",
      },
    },
    donut: {
      width: 10,
      title: "套票地區比重",
      label: {
        show: false, // 是否顯示標籤
      },
    },
    size: {
      width: 200,
      height: 200,
    },
  });
}
