
https://www.greencity.cx.ua/#/greenCity


//1. Find all images that have an 'alt' attribute.
$x('//img[@alt]')
// result
// (21) [img, img, img.header_arrow, img.ubs-header-sing-in-img.ubs-header-sing-in-img-greencity.ng-star-inserted, img#path-2, img#path-4, img#path-5, img#guy-image, img, img, img, img, img, img, img.logo, img, img, img, img, img, img]


//2. Find images that are icons on the web.
$x('//img[@alt="Image green city logo"]')


//3. Find all button elements present on a specified web page
$x("//button")
// result
//(4) [button.warning_button_comment, button.primary-global-button.btn, button.primary-global-button.btn, button.chat-pop-up]
// length:4



//4. Find all input fields on a web page.
$x('//input')
// result
// input.ng-untouched.ng-pristine.ng-valid
// length 4







// result
// [li.search-icon.ng-star-inserted]
// 0:li.search-icon.ng-star-inserted
// length:1


//5. Check for the presence of checkboxes.
$x("//input[@type='checkbox']")
// !!! Візуально та через пошук по DevTools не знаходить чекбоксів на головній сторінці.



