//Parse the path at the top of each product to determine it's category.  There are more categories than just Womens, Beauty, Home, Lifestyle, and Mens that don't exist on the New -Arrivals page, such as On Campus, so I store those too but dont actually do anything with them.
let path = document.getElementsByClassName('c-breadcrumb')[0].outerText;
let category = path.split(' ')[0];

//Here is the reference to the add-to-cart button
let addToCart = Array.from(
  document.getElementsByClassName('js-add-to-cart')
)[0];

/*
Below is thew increase storage function that takes the category (from above), and the type (page-view or add-to-cart).  The type represents how much to increase the storage by.
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

//create a function to sync the storage so the popup will update on pageview.
const syncStorage = () => {
  chrome.storage.sync.set(
    {
      Mens: window.localStorage["Men's"] ? window.localStorage["Men's"] : 0.8,
      Womens: window.localStorage["Women's"]
        ? window.localStorage["Women's"]
        : 0.9,
      Beauty: window.localStorage.Beauty ? window.localStorage.Beauty : 0.5,
      Home: window.localStorage.Home ? window.localStorage.Home : 0.7,
      Lifestyle: window.localStorage.Lifestyle
        ? window.localStorage.Lifestyle
        : 0.6,
    },
    function() {
      console.log('Storage sucessfully updated.');
    }
  );
};
syncStorage();

//Event listener for add to cart button that invokes the function with type === 'add-to-cart' as to increase the storage by 3, and also invokes the sync storage function to update the popup.
addToCart.addEventListener('click', () => {
  increaseStorage(category, 'add-to-cart');
  syncStorage();
});
