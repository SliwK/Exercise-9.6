var btn = document.getElementById('addElem');
btn.addEventListener('click', function(e) {
  console.log('it was clicked');

var listWeb = document.getElementById('list');
var newElem = document.createElement('li');
var num = document.getElementsByTagName('li').length;
//console.log(num);

newElem.innerHTML = 'item ' + num;
listWeb.appendChild(newElem);

});
