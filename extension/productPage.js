//I couldnt get utag_data to work so went with parsing the path at the top of each product to determine it's category
let path = document.getElementsByClassName('c-breadcrumb')[0].outerText;
let category = path.split(' ')[0];

//Here is the reference to the add-to-cart button
let addToCart = Array.from(
  document.getElementsByClassName('js-add-to-cart')
)[0];

/*
Increase storage function that takes the category (from above), and the type (page-view or add-to-cart)
I wasn't sure what to name CSE_Challenge due to the 5 categories. I had trouble creating a CSE_Challenge object on window.localStorage to hold the various categories so created them on local storage directly.
*/

const increaseStorage = (cat, type) => {
  if (type === 'page-view') {
    window.localStorage[cat]
      ? window.localStorage[cat]++
      : (window.localStorage[cat] = 1);
  } else if (type === 'add-to-cart') {
    let num = +window.localStorage[cat];
    window.localStorage[cat] = num + 3;
  }
};

//increase the storage immediately for any page view
increaseStorage(category, 'page-view');

//Event listener for add to cart button
addToCart.addEventListener('click', () =>
  increaseStorage(category, 'add-to-cart')
);
