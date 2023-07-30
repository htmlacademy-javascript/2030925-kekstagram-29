import { SortType } from './constants.js';

const sortList = document.querySelector('.img-filters');
const sortButtons = document.querySelectorAll('.img-filters__button');

let currentSortType = SortType.DEFAULT;
const picturesList = [];

const sortSettings = () => {
  if (currentSortType === SortType.POPULAR) {
    return picturesList.slice().sort((a, b) => b.comments.length - a.comments.length);
  } else if (currentSortType === SortType.RANDOM) {
    return picturesList.slice().sort(() => Math.random() - 0.5).slice(0, 10);
  }
  return picturesList;
};

const setSortByClick = (evt, cb) => {
  if (evt.target.classList.contains('img-filters__button')) {
    if (evt.target.id === currentSortType) {
      return;
    }

    const sortButton = evt.target;
    currentSortType = evt.target.id;
    sortButtons.forEach((button) => button.classList.remove('img-filters__button--active'));
    sortButton.classList.add('img-filters__button--active');
    cb(sortSettings());
  }
};

const addSortListener = (cb) => {
  sortList.addEventListener('click', (evt) => {
    setSortByClick(evt, cb);
  });
};

export const renderSortedPictures = (pictures, cb) => {
  sortList.classList.remove('img-filters--inactive');
  pictures = picturesList.slice();
  addSortListener(cb);
};
