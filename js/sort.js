import { Photos, SortType, TIMEOUT } from './constants.js';
import { renderPictures } from './create-picture.js';
import { debounce } from './functions.js';

const sortList = document.querySelector('.img-filters');
const sortButtons = document.querySelectorAll('.img-filters__button');

const sortSettings = (pictures, sortButton) => {
  if (sortButton.id === SortType.DEFAULT) {
    return pictures;
  }

  if (sortButton.id === SortType.RANDOM) {
    return pictures.slice().sort(() => Math.random() - 0.5).slice(Photos.MIN_RANDOM_PHOTOS, Photos.MAX_RANDOM_PHOTOS);
  }
  if (sortButton.id === SortType.POPULAR) {
    return pictures.slice().sort((a, b)=>(b.comments.length - a.comments.length));
  }
  return pictures;
};

const setSortByClick = (evt, cb) => {
  if (evt.target.classList.contains('img-filters__button')) {
    sortButtons.forEach((button) => button.classList.remove('img-filters__button--active'));

    const sortButton = evt.target;
    sortButton.classList.add('img-filters__button--active');
    document.querySelectorAll('.picture').forEach((element) => element.remove());
    renderPictures(sortSettings(cb, sortButton));
  }
};

const addSortListener = (cb) => {
  sortList.addEventListener('click', debounce((evt) => {
    setSortByClick(evt, cb);
  }, TIMEOUT));
};

export const renderSortedPictures = (pictures) => {
  sortList.classList.remove('img-filters--inactive');
  addSortListener(pictures);
};
