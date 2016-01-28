var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var storeNames = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue", "Alki Beach"];
var storeId = ["pikeplace", "seatac", "southcenter", "bellevue", "alki"];
var minCustomers = [17, 6, 11, 20, 3];
var maxCustomers = [88, 24, 38, 48, 24];
var avgCookieSales = [5.2, 1.2, 1.9, 3.3, 2.6];

var storeObjects = [];

var Store = function(storeName, storeId, minCust, maxCust, avgSales) {
  this.name = storeName;
  this.storeId = storeId;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  storeObjects.push(this);
  this.salesHourly = [];
  this.salesTotal = 0;
};

Store.prototype.salesRandomizer = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};
Store.prototype.salesGenerator = function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
  }
};
Store.prototype.storeRenderer = function() {
  this.salesGenerator();
  var elSection = document.getElementById(this.storeId);
  var elUl = document.createElement('ul');
  for(var i = 0; i < storeHours.length; i++) {
    var elLi = document.createElement('li');
    elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
    elUl.appendChild(elLi);
  }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elSection.textContent = this.name;
  elSection.appendChild(elUl);
};

// new Store()

window.onload = function() {
  for (var i = 0; i < storeNames.length; i++) {
    new Store(storeNames[i], storeId[i], minCustomers[i], maxCustomers[i], avgCookieSales[i]);
    storeObjects[i].storeRenderer();
  }
};
