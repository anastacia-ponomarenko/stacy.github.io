var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/avocado-heart.jpg') {
        myImage.setAttribute ('src','images/avocado-heart2.jpg');
    } else {
        myImage.setAttribute ('src','images/avocado-heart.jpg');
    }
}

var myButton = document.querySelector('button'); 
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Ave avocado, ' + myName + '!';
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Ave avocado, ' + storedName + '!'; 
  }

  myButton.onclick = function() {
    setUserName();
  }
