const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (container) {
  this.container = container;
};


SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:all-countries-loaded', (event) =>{
    // this.render(event.detail.name);
    console.log(event.detail);
    event.detail.forEach((steve, index) =>{
      this.render(steve.name, index);
    })
  });

  this.container.addEventListener('change', (event) => {
    const selectedItem = event.target.value;
    console.log(selectedItem);
    PubSub.publish('SelectView:selected', selectedItem);
  });

};

SelectView.prototype.render = function (name, index){
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  console.log(country);
  this.container.appendChild(option);
};

module.exports = SelectView;
