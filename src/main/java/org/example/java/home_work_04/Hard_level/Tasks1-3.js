
const currentDay = document.querySelector(".current-day");
const monthAndYear = document.querySelector(".month-year");

if (currentDay) {
    console.log("Поточний день:", currentDay.textContent.trim(), monthAndYear.textContent.trim());
} else {
    console.log("Елемент .current-day не знайдено");
}



const navButtons = document.querySelectorAll(".arrow-previous, .arrow-next");

console.log("Знайдено навігаційних кнопок:", navButtons.length);

navButtons.forEach((btn, i) => {
    if (btn.tagName === "img") {
        console.log(`Кнопка ${i + 1}:`, btn.src);
    } else {
        console.log(`Кнопка ${i + 1}:`, btn.innerText || "[порожня кнопка]");
    }
});