'use strict';
let tableEl = document.getElementById('createTable');
let thead =document.createElement('thead');
tableEl.appendChild(thead);
let tbody = document.createElement('tbody');
tableEl.appendChild(tbody);
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
  let tr2 = document.createElement('tr');
  tbody.appendChild(tr2);
  let thE3 = document.createElement('td');
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


let tableHead =function(){
  let tr1 = document.createElement('tr');
  thead.appendChild(tr1);
  let thEl = document.createElement('th');
  tr1.appendChild(thEl);
  thEl.textContent = 'Locations';
  for(let i=0;i<hours.length;i++){
    let thE1 = document.createElement('th');
    tr1.appendChild(thE1);
    thE1.textContent = hours[i];
  }
  let thE2 = document.createElement('th');
  tr1.appendChild(thE2);
  thE2.textContent ='Daily Location Total' ;
};

let tableFoot = function(){
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
    let sum =0;
    for (let a=0;a<cookiesLocations.length;a++){
      sum +=cookiesLocations[a].cookiesAmount[i];
    }
    td3.textContent = sum;
  }
  let td3 =document.createElement('td');
  tr3.appendChild(td3);
  let sum =0;
  for (let a=0;a<cookiesLocations.length;a++){
    sum += cookiesLocations[a].totalCookies;
    td3.textContent = sum;
  }

};




let seattle = new Sales('SEATTLE', 23, 65, 6.3);

let tokyo = new Sales('TOKYO',3,24,1.2);

let dubai = new Sales('DUBAI',11,38,3.7);

let paris = new Sales('PARIS',20,38,2.3);

let lima = new Sales('LIMA',2,16,4.6);

tableHead();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
tableFoot();

