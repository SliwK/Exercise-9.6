//commmon function
function commonFnk(listWeb) {
  var newElem = document.createElement('li');
  var num = document.getElementsByTagName('li').length;
  //console.log(num);

  newElem.innerHTML = 'item ' + num;
  listWeb.appendChild(newElem);
}

//endless list creation
function addEvents() {
  var btn = document.getElementById('addElements');
  btn.addEventListener('click', function fnk() {
  console.log('it was clicked');

  var listWeb = document.getElementById('endlessList');

  commonFnk(listWeb);

});
}

addEvents();

//one element list creation
function addEvent() {
  var btn = document.getElementById('addOnce');
  btn.addEventListener('click', function fnk() {
  console.log('it was clicked too');

  var listWeb = document.getElementById('onceList');

  commonFnk(listWeb);

  btn.removeEventListener('click', fnk);

});
}


addEvent();
