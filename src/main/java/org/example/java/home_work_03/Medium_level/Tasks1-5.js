
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

const imgs = document.querySelectorAll('img');
    let bigImgsCount = 0;
    imgs.forEach(img => {
        if (img.height > 300) bigImgsCount++;
    });
    alert(`Знайдено зображень: ${imgs.length}\nЗ них > 300px: ${bigImgsCount}`);


// Збираємо всю інформацію по CSS, а саме по color, background-color та записуємо в колекцію Set
const elements = document.querySelectorAll('*');
const colors = new Set();

elements.forEach(el => {
    const styles = getComputedStyle(el);
    colors.add(styles.color);
    colors.add(styles.backgroundColor);
});

console.log("Кількість унікальних кольорів:", colors.size);

{
    const all = document.querySelectorAll('*');
    const uniqueColors = new Set();
    all.forEach(el => uniqueColors.add(window.getComputedStyle(el).color));
    alert(`Унікальних кольорів знайдено: ${uniqueColors.size}`);
}


// Збираємо інформацію про кількість кнопок на сторінці.
const buttons = document.querySelectorAll('button');
console.log("Загальна кількість кнопок:", buttons.length);

{
    const btns = document.querySelectorAll('button');
    alert(`Кількість кнопок на сторінці: ${btns.length}`);
}


// Знаходимо наявний на сторінці input та одразу виводимо його чип через виклик методу .type
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    console.log(`Input type: ${input.type}`, input);
});

{
    const inputs = document.querySelectorAll('input');
    const types = Array.from(inputs).map(i => i.type || 'text');
    alert(`Типи знайдених полів (${inputs.length} шт): ${types.join(', ')}`);
}

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




