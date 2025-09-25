function isTextOnWebPage(inputWord) {
    if (typeof inputWord !== "string" || !inputWord.trim()) return false;

    const pageText = document.body.innerText;

    if (pageText.includes(inputWord)) {
        return {found: true, word: inputWord};
    }
    return {found: false};
}

console.log(isTextOnWebPage("Укр"));        // true
console.log(isTextOnWebPage("тест"));       // false
console.log(isTextOnWebPage("еко"));        // true
console.log(isTextOnWebPage("склянок"));    // true