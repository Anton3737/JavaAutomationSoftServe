https://www.greencity.cx.ua/#/greenCity


//1. Find all images that have an 'alt' attribute.
    $x('//img[@alt]')
// result
// (21) [img, img, img.header_arrow, img.ubs-header-sing-in-img.ubs-header-sing-in-img-greencity.ng-star-inserted, img#path-2, img#path-4, img#path-5, img#guy-image, img, img, img, img, img, img, img.logo, img, img, img, img, img, img]


//2. Find images that are icons on the web.
$x('//img[@alt="Image green city logo"]')
// length:1

//3. Find all button elements present on a specified web page
$x("//button")
// result
// (6) [button.warning_button_comment, button.primary-global-button.btn, button.primary-global-button.btn, button.primary-global-button.btn, button.primary-global-button.btn, button.chat-pop-up]
// length:6

//4. Find all input fields on a web page.
$x('//input')
// result
// [input.ng-untouched.ng-pristine.ng-valid]
// length 1

// 5. Find the link that is responsible for going to the map to find a place to buy eco-bags.
$x('//div[contains(@class, "location-row")]//a')
// result
// (2) [a.tertiary-global-button.btn-link, a.tertiary-global-button.btn-link]
// length 2

