
https://www.greencity.cx.ua/#/greenCity

//1.  Find the first h1 element on the main page.
$x('//h1')[0]
// result
// <h1 _ngcontent-ng-c2028559249>A new way to cultivate useful habits</h1>


//2. Find all images that have an 'alt' attribute.
$x('//img[@alt]')
// result
// (21) [img, img, img.header_arrow, img.ubs-header-sing-in-img.ubs-header-sing-in-img-greencity.ng-star-inserted, img#path-2, img#path-4, img#path-5, img#guy-image, img, img, img, img, img, img, img.logo, img, img, img, img, img, img]


//3. Find the button with the text "Start forming a habit!".
$x("//button[text() = 'Start forming a habit!']")
// result
// [button.primary-global-button.btn]
// 0:button.primary-global-button.btn
// length:1

//4. Check for the presence of a search icon on the webpage.
$x("//*[contains(@class, 'search')]")
//or
$x("//li[contains(@class, 'search-icon')]")

// result
// [li.search-icon.ng-star-inserted]
// 0:li.search-icon.ng-star-inserted
// length:1


//5. Check for the presence of checkboxes.
$x("//input[@type='checkbox']")
// !!! Візуально та через пошук по DevTools не знаходить чекбоксів на головній сторінці.



