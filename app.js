// var storeHours = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
// var storeNames = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue", "Alki Beach"];
// var minCustomers = [17, 6, 11, 20, 3];
// var maxCustomers = [88, 24, 38, 48, 24];
// var avgCookieSales = [5.2, 1.2, 1.9, 3.3, 2.6];
//
// var storeObjects = [];
//
// function StoreBuilder(storeName, minCust, maxCust, avgSales) {
//   this.name = storeName;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgSales = avgSales;
//   storeObjects.push(this);
// }
//
// for (var i = 0; i < storeNames.length; i++) {
//   new StoreBuilder(storeNames[i], minCustomers[i], maxCustomers[i], avgCookieSales[i]);
// }
//

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
  },
  salesGenerator: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgCookieSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
    }
  },
  storeRenderer: function() {
    this.salesGenerator();
    var elPikePlace = document.getElementById("pikePlace");
    var elUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      var elLi = document.createElement('li');
      elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
      elUl.appendChild(elLi);
    }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elPikePlace.textContent = this.storeName;
  elPikePlace.appendChild(elUl);
},
};

storePikePlace.storeRenderer();

var storeSeaTac = {
  storeName: "SeaTac Airport",
  minCust: 6,
  maxCust: 24,
  avgCookieSales: 1.2,
  salesHourly: [],
  salesTotal: 0,
  salesRandomizer: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  salesGenerator: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgCookieSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
    }
  },
  storeRenderer: function() {
    this.salesGenerator();
    var elSeaTac = document.getElementById("seaTac");
    var elUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      var elLi = document.createElement('li');
      elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
      elUl.appendChild(elLi);
    }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elSeaTac.textContent = this.storeName;
  elSeaTac.appendChild(elUl);
},
};

storeSeaTac.storeRenderer();

var storeSouthcenter = {
  storeName: "Southcenter",
  minCust: 11,
  maxCust: 38,
  avgCookieSales: 1.9,
  salesHourly: [],
  salesTotal: 0,
  salesRandomizer: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  salesGenerator: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgCookieSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
    }
  },
  storeRenderer: function() {
    this.salesGenerator();
    var elSouthcenter = document.getElementById("southcenter");
    var elUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      var elLi = document.createElement('li');
      elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
      elUl.appendChild(elLi);
    }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elSouthcenter.textContent = this.storeName;
  elSouthcenter.appendChild(elUl);
},
};

storeSouthcenter.storeRenderer();

var storeBellevue = {
  storeName: "Bellevue Square",
  minCust: 20,
  maxCust: 48,
  avgCookieSales: 3.3,
  salesHourly: [],
  salesTotal: 0,
  salesRandomizer: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  salesGenerator: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgCookieSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
    }
  },
  storeRenderer: function() {
    this.salesGenerator();
    var elBellevue = document.getElementById("bellevue");
    var elUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      var elLi = document.createElement('li');
      elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
      elUl.appendChild(elLi);
    }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elBellevue.textContent = this.storeName;
  elBellevue.appendChild(elUl);
},
};

storeBellevue.storeRenderer();

var storeAlki = {
  storeName: "Alki Beach",
  minCust: 3,
  maxCust: 24,
  avgCookieSales: 2.6,
  salesHourly: [],
  salesTotal: 0,
  salesRandomizer: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  salesGenerator: function() {
  for(var i = 0; i < storeHours.length; i++) {
    var salesRandom = Math.floor(this.salesRandomizer() * this.avgCookieSales);
    this.salesHourly.push(salesRandom);
    this.salesTotal += salesRandom;
    }
  },
  storeRenderer: function() {
    this.salesGenerator();
    var elAlki = document.getElementById("alkiBeach");
    var elUl = document.createElement('ul');
    for(var i = 0; i < storeHours.length; i++) {
      var elLi = document.createElement('li');
      elLi.textContent = storeHours[i] + ": " + this.salesHourly[i];
      elUl.appendChild(elLi);
    }
  var elTotalSales = document.createElement('li');
  elTotalSales.textContent = "Total Sales: " + this.salesTotal;
  elUl.appendChild(elTotalSales);
  elAlki.textContent = this.storeName;
  elAlki.appendChild(elUl);
},
};

storeAlki.storeRenderer();
