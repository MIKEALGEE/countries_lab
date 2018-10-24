const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Countries = function () {
  this.text = null;
};

Countries.prototype.getData = function () {
  const request = new RequestHelper('https://www.restcountries.eu/rest/v2/all');
      request.get((countryData) => {
        // this.text = countryData.name
        const batman = [];
        countryData.forEach( (country) => {
          batman.push(country);
        });
        this.text = batman;
        console.log(this.text);
      PubSub.publish('Countries:all-countries-loaded', this.text);
  });
};

Countries.prototype.bindEvents = function() {
  PubSub.subscribe('SelectView:selected', (event) =>{
    const selectedItem = event.detail;
    console.log(this.text[selectedItem]);
  });
}





module.exports = Countries;
