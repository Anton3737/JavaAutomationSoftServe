// To find the first h1 element on the main page.
const firstH1 = document.evaluate("//h1", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
console.log("First h1 element:", firstH1 ? firstH1.innerText : "Not found");


//Find all images that have the 'alt' attribute. Output the message in the console "Found (number) images with the alt attribute."
const imagesWithAlt = document.evaluate("//img[@alt]", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
console.log(`Found ${imagesWithAlt.snapshotLength} images with the alt attribute.`);


// Find the button element with the text "Start forming a habit!". If an element with such text is not found, display a corresponding message. Output the message with numbers of buttons in the console.
const buttonXpath = "//button[contains(normalize-space(), 'Start forming a habit!')]";
const habitButtons = document.evaluate(buttonXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

if (habitButtons.snapshotLength > 0) {
    console.log(`Found ${habitButtons.snapshotLength} buttons with this text.`);
} else {
    console.log("Element with such text is not found.");
}


// Validate the presence and visibility of the site search icon on the webpage, and ensure the image associated with the search icon has the appropriate alt text and a source (src) path.
const searchIconXpath = "//header//img[contains(@class, 'search') or contains(@alt, 'search') or contains(@src, 'search')]";
const searchIcon = document.evaluate(searchIconXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

if (searchIcon) {
    const isVisible = searchIcon.offsetParent !== null;
    console.log("Search icon present:", true);
    console.log("Search icon visible:", isVisible);
    console.log("Alt text:", searchIcon.alt || "No alt text");
    console.log("Src path:", searchIcon.src);
} else {
    console.log("Search icon not found via XPath.");
}


// Log in to your profile at https://www.greencity.cx.ua/#/profile.
// Go to the profile editing page by clicking on the "Edit your profile" button.
// Locate the checkboxes at the bottom of the page.
// Check the state of each checkbox: determine whether they are checked or unchecked.
// Display a message with the number of checked and unchecked checkboxes.
const checkboxXpath = "//input[@type='checkbox']";
const checkboxes = document.evaluate(checkboxXpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

let checked = 0;
let unchecked = 0;

if (checkboxes.snapshotLength > 0) {
    for (let i = 0; i < checkboxes.snapshotLength; i++) {
        const cb = checkboxes.snapshotItem(i);
        cb.checked ? checked++ : unchecked++;
    }
    console.log(`Total checkboxes found: ${checkboxes.snapshotLength}`);
    console.log(`Checked: ${checked}`);
    console.log(`Unchecked: ${unchecked}`);
} else {
    console.log("No checkboxes found. Make sure you are on the 'Edit Profile' page.");
}