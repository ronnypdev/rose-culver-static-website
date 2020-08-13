// this is the data for holding which page we're on
let pageNumber = 0;

// Select Relevant Tags
const outputTag = document.querySelector('h2');
const nextTag = document.querySelector('.next');
const previousTag = document.querySelector('.prev');

// make a next function to increase the pageNumber
const next = () => {
  pageNumber = pageNumber + 1;

  if (pageNumber > 10) {
    pageNumber = 1;
  }

  updateSection();
};

// Make a previous function decrease the pageNumber
const previous = () => {
  pageNumber = pageNumber - 1;

  if (pageNumber < 1) {
    pageNumber = 10;
  }

  updateSection();
};

// This will update the section's content and style
const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

// on click of nextTag, run this
nextTag.addEventListener('click', function () {
  next();
});

// on click of previousTag, run this
previousTag.addEventListener('click', function () {
  previous();
});
