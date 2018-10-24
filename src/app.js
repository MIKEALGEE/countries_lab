const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const countries = new Countries();
  countries.bindEvents();
  countries.getData();

  const countryContainer = document.querySelector('#countries');
  const selectView = new SelectView(countryContainer);
  selectView.bindEvents();
  console.log("app.js line 13");

  // const infoDisplay = document.querySelector("div#country")
  // const countryInfoDisplay = new

});
