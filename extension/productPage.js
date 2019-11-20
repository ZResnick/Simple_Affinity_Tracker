let path = document.getElementsByClassName('c-breadcrumb')[0].outerText;

let category = path.split(' ')[0];

const increaseStorage = cat => {
  window.localStorage[cat]
    ? window.localStorage[cat]++
    : (window.localStorage[cat] = 1);
};
increaseStorage(category);

let addToCart = Array.from(
  document.getElementsByClassName('js-add-to-cart')
)[0];
const increaeByThree = cat => {
  let num = +window.localStorage[cat];
  window.localStorage[cat] = num + 3;
};
addToCart.addEventListener('click', () => increaeByThree(category));

let affinity = {
  Mens: window.localStorage["Men's"],
  Womens: window.localStorage["Women's"],
  Beauty: window.localStorage.Beauty,
  Home: window.localStorage.Home,
  Lifestyle: window.localStorage.Lifestyle,
};

console.log('Chrome Extension Output!');
console.log(affinity);
