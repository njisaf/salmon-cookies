var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

var storePikePlace = {
  storeName: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avgCookieSales: 5.2,
  salesHourly: [],
  salesTotal: 0,
  salesRandomizer: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  }
};
function salesGenerator(name) {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(name.salesRandomizer() * name.avgCookieSales);
    name.salesHourly.push(salesRandom);
    name.salesTotal += salesRandom;
  }
}
function storeRenderer(name) {
  salesGenerator(name);
  var elPikePlace = document.getElementById("pikePlace");
  var elUl = document.createElement('ul');
  for(var i = 0; i < storeHours.length; i++) {
    var elLi = document.createElement('li');
    elLi.textContent = storeHours[i] + ": " + name.salesHourly[i];
    elUl.appendChild(elLi);
  }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + name.salesTotal;
  elUl.appendChild(elTotalSales);
  elPikePlace.textContent = name.storeName;
  elPikePlace.appendChild(elUl);
}

storeRenderer(storePikePlace);
