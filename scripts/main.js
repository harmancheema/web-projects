let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.jpeg") {
    myImage.setAttribute("src", "images/firefox-1.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-logo.png");
  }
};

function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
