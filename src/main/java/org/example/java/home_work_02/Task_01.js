function isTextOnPage(inputWord) {
    if (typeof inputWord !== "string" || !inputWord.trim()) return false;

    const pageText = document.body.innerText;

    if (pageText.includes(inputWord)) {
        return {found: true, word: inputWord};
    }
    return {found: false};
}

console.log(isTextOnPage("Укр"));        // true
console.log(isTextOnPage("тест"));       // false
console.log(isTextOnPage("еко"));        // true
console.log(isTextOnPage("склянок"));    // true