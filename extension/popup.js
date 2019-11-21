//Get the synced local sroage values
chrome.storage.sync.get(
  ['Mens', 'Womens', 'Beauty', 'Home', 'Lifestyle'],
  function(result) {
    let affinity = {
      Mens: result.Mens >= 1 ? result.Mens : 0.8,
      Womens: result.Womens >= 1 ? result.Womens : 0.9,
      Beauty: result.Beauty >= 1 ? result.Beauty : 0.5,
      Home: result.Home >= 1 ? result.Home : 0.7,
      Lifestyle: result.Lifestyle >= 1 ? result.Lifestyle : 0.6,
    };

    //Find the table in the popup.html
    let table = Array.from(document.getElementsByTagName('TABLE'))[0];

    //Store the affinities in an array and sort by affinity value.
    let sorted = [];
    for (let prop in affinity) {
      sorted.push([prop, affinity[prop]]);
    }
    sorted.sort(function(a, b) {
      return a[1] - b[1];
    });

    //Function to add rows to popup table.
    let rowCreator = arr => {
      let count = 1;
      while (arr.length) {
        let cur = arr.pop();
        let row = document.createElement('tr');
        let num = document.createElement('td');
        num.innerText = count;
        let category = document.createElement('td');
        category.innerText = cur[0];
        let val = document.createElement('td');
        val.innerText = cur[1] >= 1 ? cur[1] : 0;
        row.appendChild(num);
        row.appendChild(category);
        row.appendChild(val);
        row.classList.add('rows');
        table.appendChild(row);
        count++;
      }
    };

    //invoke function
    rowCreator(sorted);
  }
);
