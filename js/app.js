//Scripts
let pageNumber = 0;
const outputTag = document.querySelector('h2');
const nextTag = document.querySelector('.next');

const next = () => {
  pageNumber = pageNumber + 1;
  updateSection();
};

const updateSection = function () {
  outputTag.innerHTML = pageNumber;
};

nextTag.addEventListener('click', function () {
  next();
});
