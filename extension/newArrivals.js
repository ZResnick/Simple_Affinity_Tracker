//Get the parent node that holds all the category sections.
let modules = Array.from(
  document.getElementsByClassName('dom-landing-page-modules')[0].childNodes
).filter(node => node.className === 'o-row   ');

//Get each section and assign their innerHTML to an object, refs, for easy reference.
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

// get the affinities from local storage and sort them into a sorted array, sorted.  If no affinity exists or only some of the affinities exist, organize the rest according to Urban Outfitters original layout.  To do this, I set default values according to the original layout for each category if no affinity exists.
let affinity = {
  Mens: window.localStorage["Men's"] ? window.localStorage["Men's"] : 0.8,
  Womens: window.localStorage["Women's"] ? window.localStorage["Women's"] : 0.9,
  Beauty: window.localStorage.Beauty ? window.localStorage.Beauty : 0.5,
  Home: window.localStorage.Home ? window.localStorage.Home : 0.7,
  Lifestyle: window.localStorage.Lifestyle
    ? window.localStorage.Lifestyle
    : 0.6,
};

//sort the array by affinity value
let sorted = [];
for (let prop in affinity) {
  sorted.push([prop, affinity[prop]]);
}
sorted.sort(function(a, b) {
  return a[1] - b[1];
});

// Attach them to the DOM in order.  To do this, I iterate through all the modules found at the top of the page.  If the node is a category section, I pop off the end of the sorted array, --> ['Womens', 15] for example, then find in the refs object the HTML that corresponds to the 0th index of that popped off value --> refs[sorted.pop()[0]] --> refs[['Womens', 15]] --> refs['Womens'] === html of the Womens module. I then swap that HTML for the HTML currently within modules[i]

for (let i = 0; i < modules.length; i++) {
  if (modules[i].className === 'o-row   ') {
    let html = refs[sorted.pop()[0]];
    modules[i].innerHTML = html;
  }
}
