'use strict';
let seattle ={
  minHourlyCustomers:23,
  maxHourlyCustomers:65,
  avgCookie:6.3,
  customersPerHour: [],
  cookiesAmount:[],


  getRandom:function(min, max) {
    for (let h=1; h<=14;h++){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  amountsOfCookies:function(){
    for (let h=0; h<=13;h++){
      this.cookiesAmount.push(Math.imul(this.customersPerHour[h],this.avgCookie));
    }
  },
  render:function(){
    seattle.getRandom(23,65);
    seattle.amountsOfCookies();
    let container =document.getElementById('sales');
    let articalEl= document.createElement('article');
    container.appendChild(articalEl);
    let h2El= document.createElement('h2');
    h2El.textContent ='SEATTLE';
    articalEl.appendChild(h2El);
    let ulEl = document.createElement('ul');
    articalEl.appendChild(ulEl);
    let total = 0;
    let timeAm =5;
    let timePm=0;
    for (let i=0;i<this.cookiesAmount.length;i++)
    {

      if(i<=6){
        timeAm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timeAm} am :  ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
      else {
        timePm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timePm} pm : ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= ('Total: '+total);
  },


};

let tokyo ={
  minHourlyCustomers:3,
  maxHourlyCustomers:24,
  avgCookie: 1.2,
  customersPerHour: [],
  cookiesAmount:[],


  getRandom:function(min, max) {
    for (let h=1; h<=14;h++){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  amountsOfCookies:function(){
    for (let h=0; h<=13;h++){
      this.cookiesAmount.push(Math.imul(this.customersPerHour[h],this.avgCookie));
    }
  },
  render:function(){
    tokyo.getRandom(3,24);
    tokyo.amountsOfCookies();
    let container =document.getElementById('sales');
    let articalEl= document.createElement('article');
    container.appendChild(articalEl);
    let h2El= document.createElement('h2');
    h2El.textContent ='TOKYO';
    articalEl.appendChild(h2El);
    let ulEl = document.createElement('ul');
    articalEl.appendChild(ulEl);
    let total = 0;
    let timeAm =5;
    let timePm=0;
    for (let i=0;i<this.cookiesAmount.length;i++)
    {

      if(i<=6){
        timeAm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timeAm} am :  ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
      else {
        timePm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timePm} pm : ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= ('Total: '+total);
  },


};

let dubai ={
  minHourlyCustomers:11,
  maxHourlyCustomers:38,
  avgCookie:3.7,
  customersPerHour: [],
  cookiesAmount:[],


  getRandom:function(min, max) {
    for (let h=1; h<=14;h++){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  amountsOfCookies:function(){
    for (let h=0; h<=13;h++){
      this.cookiesAmount.push(Math.imul(this.customersPerHour[h],this.avgCookie));
    }
  },
  render:function(){
    dubai.getRandom(23,65);
    dubai.amountsOfCookies();
    let container =document.getElementById('sales');
    let articalEl= document.createElement('article');
    container.appendChild(articalEl);
    let h2El= document.createElement('h2');
    h2El.textContent ='DUBAI';
    articalEl.appendChild(h2El);
    let ulEl = document.createElement('ul');
    articalEl.appendChild(ulEl);
    let total = 0;
    let timeAm =5;
    let timePm=0;
    for (let i=0;i<this.cookiesAmount.length;i++)
    {

      if(i<=6){
        timeAm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timeAm} am :  ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
      else {
        timePm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timePm} pm : ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= ('Total: '+total);
  },


};

let paris ={
  minHourlyCustomers:20,
  maxHourlyCustomers:38,
  avgCookie:2.3,
  customersPerHour: [],
  cookiesAmount:[],


  getRandom:function(min, max) {
    for (let h=1; h<=14;h++){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  amountsOfCookies:function(){
    for (let h=0; h<=13;h++){
      this.cookiesAmount.push(Math.imul(this.customersPerHour[h],this.avgCookie));
    }
  },
  render:function(){
    paris.getRandom(23,65);
    paris.amountsOfCookies();
    let container =document.getElementById('sales');
    let articalEl= document.createElement('article');
    container.appendChild(articalEl);
    let h2El= document.createElement('h2');
    h2El.textContent ='PARIS';
    articalEl.appendChild(h2El);
    let ulEl = document.createElement('ul');
    articalEl.appendChild(ulEl);
    let total = 0;
    let timeAm =5;
    let timePm=0;
    for (let i=0;i<this.cookiesAmount.length;i++)
    {

      if(i<=6){
        timeAm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timeAm} am :  ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
      else {
        timePm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timePm} pm : ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= ('Total: '+total);
  },


};

let lima ={
  minHourlyCustomers:2,
  maxHourlyCustomers:16,
  avgCookie:4.6,
  customersPerHour: [],
  cookiesAmount:[],


  getRandom:function(min, max) {
    for (let h=1; h<=14;h++){
      min = Math.ceil(min);
      max = Math.floor(max);
      this.customersPerHour.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  },

  amountsOfCookies:function(){
    for (let h=0; h<=13;h++){
      this.cookiesAmount.push(Math.imul(this.customersPerHour[h],this.avgCookie));
    }
  },
  render:function(){
    lima.getRandom(23,65);
    lima.amountsOfCookies();
    let container =document.getElementById('sales');
    let articalEl= document.createElement('article');
    container.appendChild(articalEl);
    let h2El= document.createElement('h2');
    h2El.textContent ='LIMA';
    articalEl.appendChild(h2El);
    let ulEl = document.createElement('ul');
    articalEl.appendChild(ulEl);
    let total = 0;
    let timeAm =5;
    let timePm=0;
    for (let i=0;i<this.cookiesAmount.length;i++)
    {

      if(i<=6){
        timeAm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timeAm} am :  ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
      else {
        timePm++;
        let liEl = document.createElement('li');
        liEl.textContent = (` ${timePm} pm : ${this.cookiesAmount[i]} cookies`);
        ulEl.appendChild(liEl);
        total=total+this.cookiesAmount[i] ;
      }
    }
    let liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent= ('Total: '+total);
  },


};


seattle.render();
tokyo.render();
dubai.render();
paris.render();
