var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var storeNames = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue", "Alki Beach"];
var minCustomers = [17, 6, 11, 20, 3];
var maxCustomers = [88, 24, 38, 48, 24];
var avgCookieSales = [5.2, 1.2, 1.9, 3.3, 2.6];

var elTable = document.getElementById("dataTable");
var storeObjects = [];

var Store = function(storeName, minCust, maxCust, avgSales) {
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  storeObjects.push(this);
  this.salesHourly = [];
  this.salesTotal = 0;
  this.storeRender();
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
Store.prototype.storeRender = function() {
  this.salesGenerator();
  var tableStoreRow = document.createElement('tr');
  var tableStoreHeader = document.createElement('th');
  tableStoreHeader.textContent = this.name;
  tableStoreRow.appendChild(tableStoreHeader);
  elTable.appendChild(tableStoreRow);
  for (var i = 0; i < storeHours.length; i++) {
    var tableSalesHourly = document.createElement('td');
    tableSalesHourly.textContent = this.salesHourly[i];
    tableStoreRow.appendChild(tableSalesHourly);
  };
  var tableSalesTotal = document.createElement('th')
  tableSalesTotal.textContent = this.salesTotal;
  tableStoreRow.appendChild(tableSalesTotal);
};

function tableHours () {
  var tableTopRow = document.createElement('tr');
  var tableEmptyHeaderCell = document.createElement('th');
  tableTopRow.appendChild(tableEmptyHeaderCell);
  for (var i = 0; i < storeHours.length; i++) {
    console.log(storeHours[i]);
    var tableStoreHours = document.createElement('th');
    tableStoreHours.textContent = storeHours[i];
    tableTopRow.appendChild(tableStoreHours);
    console.log(elTable);
  }
  var tableTotalHeader = document.createElement('th')
  tableTotalHeader.textContent = "Total Sales";
  tableTopRow.appendChild(tableTotalHeader);
  elTable.appendChild(tableTopRow);
};
var formClear = function(reallyShitName) {
  reallyShitName.target.storeName.value = null;
  reallyShitName.target.storeMin.value = null;
  reallyShitName.target.storeMax.value = null;
  reallyShitName.target.storeAvg.value = null;
};

var elForm = document.getElementById("storeForm");
elForm.addEventListener("submit", function(e) {
  e.preventDefault();
  var storeName = e.target.storeName.value;
  var minCust = parseInt(e.target.storeMin.value);
  var maxCust = parseInt(e.target.storeMax.value);
  var avgSales = parseInt(e.target.storeAvg.value);
  new Store(storeName, minCust, maxCust, avgSales);
  formClear(e);
})

window.onload = function() {
  tableHours();
  for (var i = 0; i < storeNames.length; i++) {
    new Store(storeNames[i], minCustomers[i], maxCustomers[i], avgCookieSales[i]);
  }
};
