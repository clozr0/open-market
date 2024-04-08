// Movement in the header of the site

var header = document.querySelector("#header");
window.onscroll = function () {
  if (scrollY >= 36) {
    header.style.top = "-80px";
  } else {
    header.style.top = "0px";
  }
};

// -------------------------------------------------------------------------------

let li = document.querySelectorAll(".varieties-and-quality");
let div1 = document.querySelectorAll(".main-title");
let h2 = document.querySelectorAll(".title-division");
let a1 = document.querySelectorAll(".a1");
let span1 = document.querySelectorAll(".img-title");
let img = document.querySelectorAll(".picture");
let strong = document.querySelectorAll(".quality-name");
let span2 = document.querySelectorAll(".show-sections");
let div2 = document.querySelectorAll(".sub-link-items");
let h3 = document.querySelectorAll(".sub-link");
let a2 = document.querySelectorAll(".a2");

let qualityName = [
  "لابتوب وكمبيوتر",
  "الكترونيات",
  "عقارات للايجار",
  "ازياء - موضة نسائية",
  "ازياء - موضة رجالي",
  "اطفال والعاب",
];
let subLinkItems1 = [
  "حاسبات",
  "كمبيوتر",
  "طابعات و اكسسوارات",
  "شاشات",
  "كمبيوتر العاب",
  "سيرفرات",
];
let subLinkItems2 = [
  "ثلاجات - فريزر",
  "غسالات - نشافات",
  "أفران",
  "تليفزيون",
  "مكانس كهربائية",
  "اككسوارات وقطع غيار",
];
let subLinkItems3 = [
  "شقق للايجار",
  "عقارات للإيجار على الخريطة",
  "تجاري للإيجار",
  "شقق وأجنحة فندقية",
  "غرف ومشاركة سكن",
  "عمارات للايجار",
];
let subLinkItems4 = [
  "ملابس",
  "احذية نسائية",
  "حقائب - شنط",
  "ساعات",
  "مستحضرات تجميل",
  "عطور - بخور",
  "مستحضرات عناية شخصية",
];
let subLinkItems5 = [
  "ملابس",
  "احذية رجالي",
  "عطور - بخور رجالي",
  "ساعات",
  "اكسسوارات رجالي",
  "أزياء رجالية - اخرى",
  "عناية شخصية رجالية",
  "مستحضرات عناية شخصية",
];
let subLinkItems6 = [
  "اثاث غرف نوم اطفال",
  "ملابس واحذية للاطفال",
  "ألعاب اطفال",
  "مستلزمات اطفال",
];

let dataPro = [];

function createData() {
  let newPro = {
    li: li,
    div1: div1,
    h2: h2,
    a1: a1,
    span1: span1,
    img: img,
    strong: strong,
    div2: div2,
    h3: h3,
    a2: a2,
  };
  dataPro.push(newPro);
  showdata();
}
createData();

function showdata() {
  let sectionsList = document.querySelector("#sections-list");
  let List = "";

  for (i = 0; i < dataPro.length; i++) {
    List = `<li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/computer.png"
                                        alt="لابتوب وكمبيوتر"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[0]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[3]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[4]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems1[5]}</a></h3>
                </div>
            </li>
            <li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/cpu.png"
                                        alt="الكترونيات"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[1]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[3]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[4]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems2[5]}</a></h3>
                </div>
            </li>
            <li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/house.png"
                                        alt="عقارات للايجار"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[2]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[3]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[4]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems3[5]}</a></h3>
                </div>
            </li>
            <li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/dress.png"
                                        alt="ازياء - موضة
                                        نسائية"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[3]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[3]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[4]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[5]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems4[6]}</a></h3>
                </div>
            </li>
            <li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/male-clothes.png"
                                        alt="ازياء - موضة
                                        رجالي"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[4]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[3]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[4]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[5]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[6]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems5[7]}</a></h3>
                </div>
            </li>
            <li class="varieties-and-quality">
                <div class="main-title">
                    <h2 class="title-division">
                        <a class="a1" href="#">
                            <span class="img-title">
                                    <img
                                        class="picture"
                                        src="../img/sections/playtime.png"
                                        alt="اطفال والعاب"
                                        />
                                </span>
                            <strong class="quality-name">${qualityName[5]}</strong>
                        </a>
                    </h2>
                    <span class="show-sections"> عرض الجميع </span>
                </div>
                <div id="items1" class="sub-link-items">
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[0]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[1]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[2]}</a></h3>
                    <h3 class="sub-link"><a class="a2" href="#">${subLinkItems6[3]}</a></h3>
                </div>
            </li>`;
  }
  sectionsList.innerHTML = List;
}


// شخبطة لتدقق بيها


// function loopItems() {
//     var divItemsLink = document.querySelector("#items1");

//     var h3Items = document.createElement("h3");
//     var aItems = document.createElement("a");
//     var text = document.createTextNode("text");

//     h3Items.appendChild(aItems);
//     aItems.appendChild(text)

//     console.log(h3Items)

// }

// loopItems()

// var qualityName = [ "لابتوب وكمبيوتر" , "الكترونيات" , "عقارات للايجار" , "ازياء - موضة نسائية" , "ازياء - موضة رجالي" , "اطفال والعاب" ];

// var subLinkItems1 = [ "حاسبات" , "كمبيوتر" , "طابعات و اكسسوارات" , "شاشات" , "كمبيوتر العاب" , "سيرفرات" ];
// var subLinkItems2 = [ "ثلاجات - فريزر" , "غسالات - نشافات" , "أفران" , "تليفزيون" , "مكانس كهربائية" , "اككسوارات وقطع غيار" ];
// var subLinkItems3 = [ "شقق للايجار" , "عقارات للإيجار على الخريطة" , "تجاري للإيجار" , "شقق وأجنحة فندقية" , "غرف ومشاركة سكن" , "عمارات للايجار" ];
// var subLinkItems4 = [ "ملابس" , "احذية نسائية" , "حقائب - شنط" , "ساعات" , "مستحضرات تجميل" , "عطور - بخور" , "مستحضرات عناية شخصية" ];
// var subLinkItems5 = [ "ملابس" , "احذية رجالي" , "عطور - بخور رجالي" , "ساعات" , "اكسسوارات رجالي" , "أزياء رجالية - اخرى" , "عناية شخصية رجالية" , "مستحضرات عناية شخصية" ];
// var subLinkItems6 = [ "اثاث غرف نوم اطفال" , "ملابس واحذية للاطفال" , "ألعاب اطفال" , "مستلزمات اطفال" ];

// function loopItems(name) {

//     let ul = document.querySelector("#sections-list")

//     // createElement
//     let li = document.createElement('li');
//     let div_1 = document.createElement('div');
//     let div_2 = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let a_1 = document.createElement('a');
//     let span_1 = document.createElement('span');
//     let span_2 = document.createElement('span');
//     let strong = document.createElement('strong');
//     let img = document.createElement('img');
//     let a_2 = document.createElement('a');
//     let h3 = document.createElement('h3');

//     // Elements within Elements
//     ul.appendChild(li);
//     li.appendChild(div_1);
//     li.appendChild(div_2);

//     div_1.appendChild(h2);
//     div_1.appendChild(span_1);
//     h2.appendChild(a_1);
//     a_1.appendChild(span_2);
//     a_1.appendChild(strong);
//     span_2.appendChild(img);

//     div_2.appendChild(h3);
//     h3.appendChild(a_2);

//     // content
//     let textStrong = document.createTextNode(name);
//     let textspan = document.createTextNode("عرض الجميع");

//     strong.appendChild(textStrong);
//     span_1.appendChild(textspan);

//     // list class

//     li.classList = "varieties-and-quality";
//     div_1.classList = "main-title";
//     h2.classList = "title-division";
//     div_2.classList = "sub-link-items";
//     span_2.classList = "img-title";
//     img.classList = "picture";
//     img.src = "../img/sections/computer.png";
//     strong.classList = "quality-name";
//     span_1.classList = "show-sections";
//     h3.classList = "sub-link";

// };

// let qualityName = [ "لابتوب وكمبيوتر" , "الكترونيات" , "عقارات للايجار" , "ازياء - موضة نسائية" , "ازياء - موضة رجالي" , "اطفال والعاب" ];

// let subLinkItems1 = [ "حاسبات" , "كمبيوتر" , "طابعات و اكسسوارات" , "شاشات" , "كمبيوتر العاب" , "سيرفرات" ];
// let subLinkItems2 = [ "ثلاجات - فريزر" , "غسالات - نشافات" , "أفران" , "تليفزيون" , "مكانس كهربائية" , "اككسوارات وقطع غيار" ];
// let subLinkItems3 = [ "شقق للايجار" , "عقارات للإيجار على الخريطة" , "تجاري للإيجار" , "شقق وأجنحة فندقية" , "غرف ومشاركة سكن" , "عمارات للايجار" ];
// let subLinkItems4 = [ "ملابس" , "احذية نسائية" , "حقائب - شنط" , "ساعات" , "مستحضرات تجميل" , "عطور - بخور" , "مستحضرات عناية شخصية" ];
// let subLinkItems5 = [ "ملابس" , "احذية رجالي" , "عطور - بخور رجالي" , "ساعات" , "اكسسوارات رجالي" , "أزياء رجالية - اخرى" , "عناية شخصية رجالية" , "مستحضرات عناية شخصية" ];
// let subLinkItems6 = [ "اثاث غرف نوم اطفال" , "ملابس واحذية للاطفال" , "ألعاب اطفال" , "مستلزمات اطفال" ];

// let imgSrc = [ "computer.png" , "cpu.png", "dress.png", "house.png", "male-clothes.png", "playtime.png" ];

// function itemsSectionsList(name) {
//   // Pre-existing items
//   let sectionsList = document.querySelector("#sections-list");

//   // Element
//   // Create new items inside the sections-list element
//   let li = document.createElement("li");
//   let div1 = document.createElement("div");
//   let div2 = document.createElement("div");
//   let h2 = document.createElement("h2");
//   let h3 = document.createElement("h3");
//   let a1 = document.createElement("a");
//   let a2 = document.createElement("a");
//   let span1 = document.createElement("span");
//   let span2 = document.createElement("span");
//   let img = document.createElement("img");
//   let strong = document.createElement("strong");

//   // content
//   let titleStrong = document.createTextNode(name);
//   let textspan = document.createTextNode("عرض الجميع");
//   let titleH3 = document.createTextNode(sub1);

//   // Elements within Elements
//   h3.appendChild(titleH3);
//   strong.appendChild(titleStrong);
//   span2.appendChild(textspan);
//   //-----------------------------------
//   sectionsList.appendChild(li);
//   li.appendChild(div1);
//   li.appendChild(div2);
//   div1.appendChild(h2);
//   div1.appendChild(span2);
//   div2.appendChild(h3);
//   h2.appendChild(a1);
//   a1.appendChild(span1);
//   a1.appendChild(strong);
//   h3.appendChild(a2);
//   a2.appendChild(titleH3);
//   span1.appendChild(img);

//   // set

//   li.classList = "varieties-and-quality";
//   div1.classList = "main-title";
//   div2.classList = "sub-link-items";
//   h2.classList = "title-division";
//   h3.classList = "sub-link";
//   span1.classList = "img-title";
//   span2.classList = "show-sections";
//   strong.classList = "quality-name";

// }

// itemsSectionsList("clozr")
