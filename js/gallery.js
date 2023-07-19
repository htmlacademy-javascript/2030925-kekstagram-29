import { openBigPicture } from './big-picture-form.js';
import { renderPictures } from './create-picture.js';

const picturesContainer = document.querySelector('.pictures');

export const renderGallery = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const picture = evt.target.closest('[data-picture-id]');
    if(!picture) {
      return;
    }
    evt.preventDefault();
    const pictureItem = pictures.find((item) => item.id === +picture.dataset.pictureId);
    openBigPicture(pictureItem);
  });
  renderPictures(pictures, picturesContainer);
};
