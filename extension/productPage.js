//I couldnt get utag_data to work so went with parsing the path at the top of each product to determine it's category.  There are more categories than just Womens, Beauty, Home, Lifestyle, and Mens that don't exist on the New -Arrivals page, such as On Campus, so I store those too but dont actually do anything with them.
let path = document.getElementsByClassName('c-breadcrumb')[0].outerText;
let category = path.split(' ')[0];

//Here is the reference to the add-to-cart button
let addToCart = Array.from(
  document.getElementsByClassName('js-add-to-cart')
)[0];

/*
Below is thew increase storage function that takes the category (from above), and the type (page-view or add-to-cart).  The type represents how much to increase the storage by.

I wasn't sure what variable to name CSE_Challenge due to the 5 categories so I tried to creat an object on localStorage where I could nest the affinity values. I had trouble creating a CSE_Challenge object on window.localStorage so held the affinities directly on localStorage.
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

//Invoke the function with type === 'page-view' as to increase the storage immediately for any page view.
increaseStorage(category, 'page-view');

//Event listener for add to cart button that invokes the function with type === 'add-to-cart' as to increase the storage by 3
addToCart.addEventListener('click', () =>
  increaseStorage(category, 'add-to-cart')
);
