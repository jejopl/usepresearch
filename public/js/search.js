const coverDiv = document.querySelector(".coverDiv");
const browserContent = document.querySelector("#browserContent");
const searchInput = document.querySelector("#searchInput");
const stepOnePopup = document.querySelector("#stepOnePopup");
const stepTwoPopup = document.querySelector("#stepTwoPopup");
const stepThreePopup = document.querySelector("#stepThreePopup");

setTimeout(() => {
  coverDiv.classList.toggle("hide");
}, 1000);
setTimeout(() => {
  coverDiv.style = "visibility: hidden";
  urlTypeWriter();
  stepOnePopup.classList.toggle("show");
}, 1950);

let i = 0;
const browserUrl = document.querySelector("#browserLink");
const urlText = "https://presearch.org";
const speed = 100;
function urlTypeWriter() {
  if (i < urlText.length) {
    browserUrl.value += urlText.charAt(i);
    i++;
    setTimeout(urlTypeWriter, speed);
  } else {
    stepOnePopup.classList.toggle("hide");
    setTimeout(() => {
      stepOnePopup.style = "visibility: hidden";
    }, 900);
    browserContent.style = "visibility: visible !important; -webkit-animation: fadeIn 1s;animation: fadeIn 1s;";
    setTimeout(() => {
      stepTwoPopup.classList.toggle("show");
      stepOneFunction();
    }, 1500);
  }
}

let j = 0;

function searchTypeWriter() {
  if (j < searchText.length) {
    searchInput.value += searchText.charAt(j);
    j++;
    setTimeout(searchTypeWriter, speed);
  } else {
    setTimeout(() => {
      stepTwoPopup.classList.toggle("hide");
      stepThreePopup.classList.toggle("show");
    }, 1000);

    setTimeout(() => {
      stepTwoPopup.style = "visibility: hidden";
      stepTwoFunction();
    }, 1900);
  }
}

function stepOneFunction() {
  searchTypeWriter();
}

function stepTwoFunction() {
  setTimeout(() => {
    window.location = `https://presearch.org/extsearch?term=${searchText}`
  }, 2500);
}
