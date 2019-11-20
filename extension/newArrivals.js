//get the parent node that holds all the sections
let modules = Array.from(
  document.getElementsByClassName('dom-landing-page-modules')[0].childNodes
).filter(node => node.className === 'o-row   ');

//get each section and assign their innerHTML to an object, refs, for easy reference
let mens = modules.filter(node => node.innerText.includes("Men's"));
let womens = modules.filter(node => node.innerText.includes("Women's"));
let beauty = modules.filter(node => node.innerText.includes('Beauty'));
let home = modules.filter(node => node.innerText.includes('Home'));
let lifestyle = modules.filter(node => node.innerText.includes('Lifestyle'));

let refs = {
  Mens: mens[0].innerHTML,
  Womens: womens[0].innerHTML,
  Beauty: beauty[0].innerHTML,
  Lifestyle: lifestyle[0].innerHTML,
  Home: home[0].innerHTML,
};

// get the affinities from local storage and sort them into a sorted array, sorted.
let affinity = {
  Mens: window.localStorage["Men's"],
  Womens: window.localStorage["Women's"],
  Beauty: window.localStorage.Beauty,
  Home: window.localStorage.Home,
  Lifestyle: window.localStorage.Lifestyle,
};

let sorted = [];
for (let prop in affinity) {
  if (affinity[prop]) sorted.push([prop, affinity[prop]]);
}

sorted.sort(function(a, b) {
  return a[1] - b[1];
});

console.log(sorted);

// attach them to the DOM in order
for (let i = 0; i < modules.length; i++) {
  if (modules[i].className === 'o-row   ') {
    let html = refs[sorted.pop()[0]];
    modules[i].innerHTML = html;
  }
}
