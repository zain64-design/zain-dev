// ═══════════════════════════════════════════
// 📘 DOM Targeting
// ═══════════════════════════════════════════

/************************ DOM Targeting ***************************/
// 🔹 "The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.";
// 🔹 "DOM represent the page body as html";
// 🔹 "mapping hoti hai entire document ki in a object";

// 💻
var a = document.querySelector(".sec-front-parallax-1");
a.innerHTML = "new text btn";
document.querySelector(".sec-front-parallax-1").getAttribute("id");

document.querySelectorAll(".sec-front-parallax-1")[0].getAttribute("id");

document.querySelector("header").className = "new fixed-top sticky";

document.querySelector("header").addClass = "new";

document.querySelector("header").classList.add("zain", "ali");

document.querySelector("header").classList.item(0);

document
  .querySelector(".index-third-section")
  .children[0].children[1].classList.add("portfolio");

document.querySelector("header").addEventListener("mouseenter", abc);
document.querySelector("header").addEventListener("mouseleave", XYZ);

function abc() {
  this.style.backgroundColor = "#000";
}

function xyz() {
  this.style.backgroundColor = "#555";
}

const img = document.querySelector(".img-rt");
const buttons = document.querySelectorAll(".bn-btn");
const buttonTwo = document.querySelector(".mn-btn");

const widthExpand = () => {
  img.style.width = "50%";
};

buttons.forEach((button) => {
  button.addEventListener("click", widthExpand);
});

buttonTwo.addEventListener("click", widthExpand);

// ═══════════════════════════════════════════
// 📘 append elements
// ═══════════════════════════════════════════

/************************append elements***************************/
// 🔹 ("childNodes,firtschild,lastchild selects all text nodes and html elements");
// 🔹 ("children,firtsElementChild,lastElementChild will targets only html elements.");

// 💻
let headAttribute = document.createElement("h1");
let textNode = document.createTextNode("append element");

headAttribute.appendChild(textNode);

const textChange = document.querySelector(".bn-btn");
textChange.childNodes[0].nodeValue = "explore projects";
textChange.childNodes[0].textContent = "explore projects";

document
  .querySelector(".river")
  .children[0].children[0].children[0].children[0].appendChild(headAttribute);
document
  .querySelector(".river")
  .children[0].children[0].children[0].children[0].insertBefore(
    headAttribute,
    textNode.childNodes[0],
  );
document.querySelector(".reply").appendChild(headAttribute);

// ═══════════════════════════════════════════
// 📘 append elements 2nd method
// ═══════════════════════════════════════════

/************************append elements 2nd method***************************/

// 💻
let headAttribute = document.createElement("h1");
let textNode = document.createTextNode("append element");
let heading =
  document.querySelector(".river").children[0].children[0].children[0]
    .children[0];

headAttribute.appendChild(textNode);

heading.insertBefore(headAttribute, heading.childNodes[0]);

// ═══════════════════════════════════════════
// 📘 adjacent elements
// ═══════════════════════════════════════════

/************************adjacent elements ***************************/

// 💻
let headAttribute = document.createElement("h1");
let textNode = document.createTextNode("append element");
let heading =
  document.querySelector(".about").children[0].children[0].children[0]
    .children[1];

headAttribute.appendChild(textNode);

heading.insertAdjacentElement("afterbegin", headAttribute);

// ═══════════════════════════════════════════
// 📘 adjacent elements text
// ═══════════════════════════════════════════

/************************adjacent elements text***************************/

// 💻
let element =
  document.querySelector(".about").children[0].children[0].children[0]
    .children[1];

let text = "zain is here";

element.insertAdjacentText("afterbegin", text);

// ═══════════════════════════════════════════
// 📘 adjacent elements html
// ═══════════════════════════════════════════

/************************adjacent elements html***************************/

// 💻
let element =
  document.querySelector(".about").children[0].children[0].children[0]
    .children[1];

let newelement = "<span>zain is here</span>";

element.insertAdjacentHTML("afterbegin", newelement);

// ═══════════════════════════════════════════
// 📘 or
// ═══════════════════════════════════════════

/************************ or ***************************/

// 💻
let click_Add = document.querySelector(".reply").addEventListener("click", abc);
let newelement = "<span>zain is here</span>";

function abc(click_Add) {
  this.insertAdjacentHTML("afterbegin", newelement);
}

// ═══════════════════════════════════════════
// 📘 clone node
// ═══════════════════════════════════════════

/************************clone node***************************/

// 💻
let element =
  document.querySelector(".about").children[0].children[0].children[0]
    .children[1];
let cloneNode = element.cloneNode(true);
let elementTwo =
  document.querySelector(".about").children[0].children[0].children[0]
    .children[5];

elementTwo.appendChild(cloneNode);

// ═══════════════════════════════════════════
// 📘 contains (find classes id in elements return boolean)
// ═══════════════════════════════════════════

/************************contains (find classes id in elements return boolean)***************************/

// 💻
let target = document.querySelector("body");
let Find = document.querySelector("#zain");
let search = target.contains(Find);

console.log(search);

// ═══════════════════════════════════════════
// 📘 BOM Browser object model
// ═══════════════════════════════════════════

/************************ BOM Browser object model ***************************/
// 🔹 we have the following content in js run in browser.

// ❓ "what is $0?"
// ✅ ("dom mein jab hum kisi bhi html element ko target karte hein to uske agay $0 auto asign hojata hai.");

// 💻
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(window.outerHeight);
console.log(window.outerWidth);
console.log(window.location.href);
console.log(window.screen.width);
console.log(window.screen.height);

// ═══════════════════════════════════════════
// 📘 BOM Navigator object model
// ═══════════════════════════════════════════

/************************ BOM Navigator object model ***************************/

// 💻
console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.appVersion);
console.log(navigator.language);
console.log(navigator.onLine);

// ═══════════════════════════════════════════
// 📘 BOM History object model
// ═══════════════════════════════════════════

/************************ BOM History object model ***************************/

// 💻
console.log(history.length);
console.log(history.state);
console.log(history.back());
console.log(history.forward());
console.log(history.go(-2));

// ═══════════════════════════════════════════
// 📘 BOM Location object model
// ═══════════════════════════════════════════

/************************ BOM Location object model ***************************/

// 💻
console.log(location.href);
console.log(location.host);
console.log(location.hostname);
console.log(location.pathname);
console.log(location.port);

// ═══════════════════════════════════════════
// 📘 BOM Screen object model
// ═══════════════════════════════════════════

/************************ BOM Screen object model ***************************/

// 💻
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
