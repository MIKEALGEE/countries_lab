const RequestHelper = function (url) {
 this.url = url;
};

RequestHelper.prototype.get = function (onComplete){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.addEventListener('load', () =>{
    if (xhr.status !== 200) {
      console.error("BROKE AS FUCK");
      return;
      }
    const jsonString = xhr.responseText;
    const data = JSON.parse(jsonString);
    onComplete(data)
    console.log(data);
  });
  xhr.send();
};


module.exports = RequestHelper;
