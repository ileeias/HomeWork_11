// Task 1
// const header = document.createElement("h1");
// const headerText = document.createTextNode("Hello, World");
// header.appendChild(headerText);
// document.body.appendChild(header);
const listElements = ["Введение в DOM", "Создание элементов", "Изменение атрибутов"]
const info = document.getElementById("info");
const list = document.createElement("ul");
info.appendChild(list);
const ulAppend = info.querySelector("ul")
for (const element of listElements) {
    let listElement = document.createElement("li");
    let textElement = document.createTextNode(element);
    listElement.appendChild(textElement)
    ulAppend.appendChild(listElement)
}

// Task 2
const createA = document.createElement("a"); //создаю элемент
const textInA = document.createTextNode("Мой профиль в Linkedin/Instagram/другая любая соц.сеть"); //создаю текст
createA.appendChild(textInA); //устанавливаю текст
//добавляю атрибуты
createA.setAttribute("href", "https://www.linkedin.com/in/%D0%B8%D0%BB%D0%B8%D1%8F%D1%81-%D0%BE%D0%BC%D0%B0%D1%80%D0%BE%D0%B2-342084341/");
createA.setAttribute("target", "_blank");
header.appendChild(createA) //добавляю а в header

// Task 3
const createSection = document.createElement("section"); //создаем section
createSection.setAttribute("class", "dinamic"); //назначаем класс
const adresMain = document.getElementById("main");//дериктория контейнера
const adferfirstselement = document.querySelector("section"); //первый элемент контейнера
adresMain.insertBefore(createSection, adferfirstselement); //вставка перед первым элементом контейнера

const createH2 = document.createElement("h2");
const textforH2 = document.createTextNode("Обучение JavaScript");
createH2.appendChild(textforH2);

const createP = document.createElement("p");
const textforP = document.createTextNode("Динамическое создание элементов позволяет улучшить интерфейс пользователя");
createP.appendChild(textforP);

const newadresDinamik = adresMain.querySelector("section");
newadresDinamik.appendChild(createH2);
newadresDinamik.appendChild(createP);

// Task 4
const infodir = document.getElementById("info");
const unnecessaryP = infodir.querySelector("p")
infodir.removeChild(unnecessaryP)

// Task 5
const footer = document.getElementById("footer");
while (footer.firstChild) {
    footer.removeChild(footer.firstChild);
}