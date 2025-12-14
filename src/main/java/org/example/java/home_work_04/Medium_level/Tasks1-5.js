
// Проходимось по документу та знаходимо всі теги img, а також перевіряємо кожне на розмір в px.
const imgs = document.querySelectorAll("img");
let counter = 0;

imgs.forEach(img => {
    if (img.naturalHeight > 300) {
        console.log("Зображення з висотою > 300px: ", img.src);
        counter++;
    }
});
console.log("Всього знайдено зображень більше 300px: ", counter);


// Збираємо всю інформацію по CSS, а саме по color, background-color та записуємо в колекцію Set
const elements = document.querySelectorAll('*');
const colors = new Set();

elements.forEach(el => {
    const styles = getComputedStyle(el);
    colors.add(styles.color);
    colors.add(styles.backgroundColor);
});

console.log("Кількість унікальних кольорів:", colors.size);


// Збираємо інформацію про кількість кнопок на сторінці.
const buttons = document.querySelectorAll('button');
console.log("Загальна кількість кнопок:", buttons.length);


// Знаходимо наявний на сторінці input та одразу виводимо його чип через виклик методу .type
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(`Input type: ${input.type}`, input);
});


// Так як посилання на соціальні мережі не є активними, а посилання являються "заглушкою" href="#" то було вирішено пройтись по іконкам та вивести текст назви соц. мережі.
const socialButtons = document.querySelectorAll('.footer_social-link');

socialButtons.forEach(btn => {
    const img = btn.querySelector('img');
    const name = img ? img.alt : "unknown";
    console.log(`Кнопка: ${name}, URL: ${btn.href}`);
});

document.querySelector("img[alt='Twitter link']")
document.querySelector("img[alt='LinkedIn link']")
document.querySelector("img[alt='Facebook link']")
document.querySelector("img[alt='Instagram link']")
document.querySelector("img[alt='YouTube link']")




