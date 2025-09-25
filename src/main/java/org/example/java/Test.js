// console.log("hallo")

// function isTextOnPage(inputText) {
//     if (typeof inputText !== 'string') return 0;
//     const token = inputText.match(/[\p{L}\p{N}]+/gu) || [];
//     return token.length;
// }
//
// const textTitle = "GreenCity — Build Eco-Friendly Habits Today";
// console.log(isTextOnPage(textTitle));
//
//
// function isTextOnPage(inputText) {
//     if (typeof inputText !== 'string') return 0;
//     const token = inputText.match(/[\p{L}\p{N}]+/gu) || [];
//     return token.length;
// }
//
// const textTitle = document.title;
// console.log(isTextOnPage(textTitle));


// isTextOnPage("google");


function uniqValues(arr) {
    if (!Array.isArray(arr)) {
        console.log("arr must be an array")
        return null;
    }
    const seen = new Set;
    return arr.filter(item => {
        if (seen.has(item)) return false;
        seen.add(item);
        return true;
    });
}


const numbers = [12, 7, 3, 22, 7, 15, 3, 18, 21, 35, 3];
const value = 15;
console.log(uniqValues(numbers))
