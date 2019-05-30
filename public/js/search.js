const stepOne = document.querySelector("#stepOne");
const stepTwo = document.querySelector("#stepTwo");
const stepThree = document.querySelector("#stepThree");

const searchInput = document.querySelector("#searchInput");

const stepOnePopup = document.querySelector("#stepOnePopup");
const stepTwoPopup = document.querySelector("#stepTwoPopup");
const stepThreePopup = document.querySelector("#stepThreePopup");
stepOnePopup.classList.toggle("show");

let i = 0;
const browserUrl = document.querySelector("#browserLink");
const urlText = "https://presearch.org";
const speed = 70;
function urlTypeWriter() {
  if (i < urlText.length) {
    browserUrl.value += urlText.charAt(i);
    i++;
    setTimeout(urlTypeWriter, speed);
  } else {
    stepOnePopup.classList.toggle("hide");
    setTimeout(() => {
      stepOnePopup.style = 'visibility: hidden'
      stepOneFunction();
      stepTwoPopup.classList.toggle("show");
    }, 1000);
  }
}
urlTypeWriter();

let j = 0;
searchText = searchText.replace(/\+/g, " ");

function searchTypeWriter() {
  if (j < searchText.length) {
    searchInput.value += searchText.charAt(j);
    j++;
    setTimeout(searchTypeWriter, speed);
  } else {
    stepTwoPopup.classList.toggle("hide");

    setTimeout(() => {
      stepTwoPopup.style = "visibility: hidden";
      stepTwoFunction();
      stepThreePopup.classList.toggle("show");
    }, 1000);
  }
}

function stepOneFunction() {
  stepOne.classList.add("completed");
  stepOne.classList.remove("active");
  stepTwo.classList.add("active");
  searchTypeWriter();
}

function stepTwoFunction() {
  stepTwo.classList.add("completed");
  stepTwo.classList.remove("active");
  stepThree.classList.add("active");
  setTimeout(() => {
    stepThree.classList.add("completed");
    stepThree.classList.remove("active");
    window.location = `https://presearch.org/extsearch?term=${searchText}`
  }, 3000);
}
