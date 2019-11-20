//get the parent node that hold all the sections
let modules = Array.from(
  document.getElementsByClassName('dom-landing-page-modules')[0].childNodes
).filter(node => node.className === 'o-row   ');

//get each section and assign them to an object for easy refernce
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

// get the affinities from local storage and sort them into a sorted array
let affinity = {
  Mens: window.localStorage["Men's"] ? window.localStorage["Men's"] : 0,
  Womens: window.localStorage["Women's"] ? window.localStorage["Women's"] : 0,
  Beauty: window.localStorage.Beauty ? window.localStorage.Beauty : 0,
  Home: window.localStorage.Home ? window.localStorage.Home : 0,
  Lifestyle: window.localStorage.Lifestyle ? window.localStorage.Lifestyle : 0,
};

let sorted = [];
for (let prop in affinity) {
  sorted.push([prop, affinity[prop]]);
}

sorted.sort(function(a, b) {
  return a[1] - b[1];
});

console.log('Chrome Extension Output Here:');
console.log(affinity);

// attach them to the dom in order
for (let i = 0; i < modules.length; i++) {
  if (modules[i].className === 'o-row   ') {
    let html = refs[sorted.pop()[0]];
    modules[i].innerHTML = html;
  }
}
