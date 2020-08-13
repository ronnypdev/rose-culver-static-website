// this is the data for holding which page we're on
let pageNumber = 0;

// have the content for these pages
const pages = [
  {
    copy: 'a Brooklyn-based graphic designer',
    background: '#edc7a9',
    circle: '#3e78ed',
  },
  {
    copy: " Kanye West's biggest fan",
    background: '#a1fffe',
    circle: '#e34a47',
  },
  {
    copy: ' looking for a job at the start of October',
    background: '#d3c7f3',
    circle: '#f7fe00',
  },
  {
    copy: 'letting you <a href="pdf.pdf" >download her PDF</a>',
    background: '#faffb8',
    circle: '#b472e6',
  },
];

// Select Relevant Tags
const outputTag = document.querySelector('h2');
const nextTag = document.querySelector('.next');
const previousTag = document.querySelector('.prev');
const randomTag = document.querySelector('.random');
const circleTag = document.querySelector('.circle');
const bodyTag = document.querySelector('body');

// make a next function to increase the pageNumber
const next = () => {
  pageNumber = pageNumber + 1;

  if (pageNumber > pages.length - 1) {
    pageNumber = 0;
  }

  updateSection();
};

// Make a previous function decrease the pageNumber
const previous = () => {
  pageNumber = pageNumber - 1;

  if (pageNumber < 0) {
    pageNumber = pages.length - 1;
  }

  updateSection();
};

// Pick a Random Slide
const random = () => {
  pageNumber = Math.floor(Math.random() * pages.length);
  updateSection();
};

// This will update the section's content and style
const updateSection = function () {
  pages.forEach((page) => {
    outputTag.innerHTML = pages[pageNumber].copy;
    circleTag.style.backgroundColor = pages[pageNumber].circle;
    bodyTag.style.backgroundColor = pages[pageNumber].background;
  });
};

// on click of nextTag, run this
nextTag.addEventListener('click', function () {
  next();
});

// on click of previousTag, run this
previousTag.addEventListener('click', function () {
  previous();
});

randomTag.addEventListener('click', function () {
  random();
});

// When a user presses a key, check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', (event) => {
  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next();
  }

  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous();
  }
});
