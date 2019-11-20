let path = document.getElementsByClassName('c-breadcrumb')[0].outerText;

let category = path.split(' ')[0];

const addToStorage = cat => {
  window.localStorage[cat]
    ? window.localStorage[cat]++
    : (window.localStorage[cat] = 1);
};
addToStorage(category);

let affinity = {
  Mens: window.localStorage["Men's"],
  Womens: window.localStorage["Women's"],
  Beauty: window.localStorage.Beauty,
  Home: window.localStorage.Home,
  Lifestyle: window.localStorage.Lifestyle,
};
console.log('Chrome Extension Output!');
console.log('Category:  ', category);
console.log('Affinity:  ', affinity);
