'use strict';
let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
let cookiesLocations = [];
function Sales(shopName, minHourlyCustomers, maxHourlyCustomers, avgCookie) {
  this.shopName = shopName;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookie = avgCookie;
  this.customersPerHour = [];
  this.cookiesAmount = [];
  this.totalCookies =0;
  cookiesLocations.push(this);
}
Sales.prototype.getRandom = function () {
  for (let h = 0; h < hours.length; h++) {
    let min = Math.ceil(this.minHourlyCustomers);
    let max = Math.floor(this.maxHourlyCustomers);
    this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
  }
};

Sales.prototype.amountsOfCookies = function () {
  // this.getRandom();
  for (let h = 0; h < hours.length; h++) {
    this.cookiesAmount.push(Math.imul(this.customersPerHour[h], this.avgCookie));
  }
};

Sales.prototype.render = function () {
  this.getRandom();
  this.amountsOfCookies();
  let tableEl = document.getElementById('table');
  let tbody = document.createElement('tbody');
  tableEl.appendChild(tbody);
  let tr2 = document.createElement('th');
  tbody.appendChild(tr2);
  let thE3 = document.createElement('th');
  tr2.appendChild(thE3);
  thE3.textContent = this.shopName;
  
  for(let i=0;i<hours.length;i++){
    let td1 = document.createElement('td');
    tr2.appendChild(td1);
    td1.textContent = this.cookiesAmount[i];
    this.totalCookies = this.totalCookies+this.cookiesAmount[i];
  }
  let tdEl =document.createElement('td');
  tr2.appendChild(tdEl);
  tdEl.textContent = this.totalCookies;
};
let table =function(){
  let tableEl = document.getElementById('table');
  let head =document.createElement('thead');
  tableEl.appendChild(head);
  let tr1 = document.createElement('tr');
  head.appendChild(tr1);
  let thEl = document.createElement('th');
  tr1.appendChild(thEl);
  thEl.textContent = ' ';
  for(let i=0;i<hours.length;i++){
    let thE1 = document.createElement('th');
    tr1.appendChild(thE1);
    thE1.textContent = hours[i];
  }
  let thE2 = document.createElement('th');
  tr1.appendChild(thE2);
  thE2.textContent ='Daily Location Total' ;
  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();

  let fooTer =document.createElement('tfoot');
  tableEl.appendChild(fooTer);
  let tr3 = document.createElement('tr');
  fooTer.appendChild(tr3);
  let th3 =document.createElement('th');
  tr3.appendChild(th3);
  th3.textContent = 'Total';
  for(let i =0;i<hours.length;i++){
    let td3 =document.createElement('td');
    tr3.appendChild(td3);
    td3.textContent = seattle.cookiesAmount[i]+tokyo.cookiesAmount[i]+dubai.cookiesAmount[i]+paris.cookiesAmount[i]+lima.cookiesAmount[i];
  }
  let td3 =document.createElement('td');
  tr3.appendChild(td3);
  td3.textContent = seattle.totalCookies+tokyo.totalCookies+dubai.totalCookies+paris.totalCookies+lima.totalCookies;
};




let seattle = new Sales('SEATTLE', 23, 65, 6.3);
// seattle.render();
let tokyo = new Sales('TOKYO',3,24,1.2);
// tokyo.render();
let dubai = new Sales('DUBAI',11,38,3.7);
// dubai.render();
let paris = new Sales('PARIS',20,38,2.3);
//paris.render();
let lima = new Sales('LIMA',2,16,4.6);
// lima.render();

table();
