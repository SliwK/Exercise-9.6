var btn1 = document.getElementById('addElements');
btn1.addEventListener('click', function(e) {
  console.log('it was clicked');

var listWeb1 = document.getElementById('endlessList');
var newElem1 = document.createElement('li');
var num1 = document.getElementsByTagName('li').length;
//console.log(num);

newElem1.innerHTML = 'item ' + num1;
listWeb1.appendChild(newElem1);

});


var btn2 = document.getElementById('addOnce');
btn2.addEventListener('click', function(e) {
  console.log('it was clicked too');

var listWeb2 = document.getElementById('onceList');
var newElem2 = document.createElement('li');
var num2 = document.getElementsByTagName('li').length;
//console.log(num);

newElem2.innerHTML = 'item ' + num2;
listWeb2.appendChild(newElem2);

document.getElementById('addOnce').disabled = 'true';


});
