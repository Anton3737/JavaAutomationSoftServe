// Used for-cycle used to filter an array
function filterGreaterThanMarkNumber(arr, threshold) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [12, 7, 9, 22, 76, 15, 3, 18, 21, 35, 10];
const value = 15;
console.log("Вихідний відфільтрований масив:", filterGreaterThanMarkNumber(numbers, value));



// Callback function used to filter an array
function filterGreaterThanMarkNumber(arr, threshold) {
    return arr.filter(number => number > threshold);
}

const numbers = [12, 7, 9, 22, 76, 15, 3, 18, 21, 35, 10];
const value = 15;
console.log("Вихідний відфільтрований масив:", filterGreaterThanMarkNumber(numbers, value));



// Used for-cycle used to filter an array with uniq numbers
function filterGreaterThanMarkNumber(arr, threshold) {
    const result = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num > threshold && !seen.has(num)) {
            result.push(num);
            seen.add(num);
        }
    }
    return result;
}

//               !   !     !   !                          !   !       !
const numbers = [12, 7, 9, 22, 76, 15, 3, 18, 21, 35, 18, 22, 76, 10, 7, 12, 23];
const value = 15;
console.log("Вихідний відфільтрований масив:", filterGreaterThanMarkNumber(numbers, value));
// Вихідний відфільтрований масив: Set(6) { 22, 76, 18, 21, 35, 23 }
// Вихідний відфільтрований масив: [ 22, 76, 18, 21, 35, 23 ]
