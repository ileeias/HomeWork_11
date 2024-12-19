// Task 1
const MyNameinTitle = document.querySelector("title");
MyNameinTitle.textContent = "Omarov Ileeias";
console.log("Задание 1:", MyNameinTitle.text);

// Task 2
const headerId = document.getElementById("header")
const h1Change = headerId.querySelector("h1")
h1Change.textContent = "Изучение JavaScript"
console.log("Задание 2:", h1Change.textContent);

// Task 3
console.log("Задание 3:");
const menu = document.querySelectorAll(".menu-link")
for (const menulist of menu) {
    console.log("✅", menulist.text);
}

// Task 4
let count = 0;
const features_list = document.querySelector(".features-list")
const features_list2 = features_list.querySelectorAll("li");
// console.log("Задание 4:", features_list2[1].textContent="Поддержка API");
console.log("Задание 4(исправил):", features_list2[1].innerHTML = "Поддержка <b>API</b>");
