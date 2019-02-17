const app = document.getElementById('root');

const title = document.createElement('h2');
title.textContent = 'Breweries Across the Country';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(title);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://api.openbrewerydb.org/breweries', true);
request.onload = function () {

  // Begin accessing JSON data
  var data = JSON.parse(this.response);
  data.forEach(brewery => {
  // Add a card with each brewery's name, city, and state
    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const h1 = document.createElement('h1');
    h1.textContent = brewery.name;

    const p = document.createElement('p');
    p.setAttribute('style', 'white-space: pre;');
    p.textContent = `Location: ${brewery.city}, ${brewery.state}\r\n`;
    p.textContent += `Address: ${brewery.street}\r\n`;
    p.textContent += `Phone: ${brewery.phone}`;
    if(brewery.phone == "") p.textContent += `N/A`;
    p.textContent += `\r\n`;
    p.textContent += `Type: ${brewery.brewery_type}`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
  });

}

request.send();
