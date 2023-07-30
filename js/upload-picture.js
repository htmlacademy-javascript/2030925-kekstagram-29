import { FILE_TYPES } from './constants.js';

const pictureUploadElement = document.querySelector('.img-upload__input[type=file]');
const picturePreview = document.querySelector('.img-upload__preview img');
const picturePreviewEffects = document.querySelectorAll('.effects__preview');

export const uploadPicture = () => {
  pictureUploadElement.addEventListener('change', () => {
    const picture = pictureUploadElement.files[0];
    const pictureName = picture.name.toLowerCase();
    const matches = FILE_TYPES.some((file) => pictureName.endsWith(file));

    if (matches) {
      picturePreview.src = URL.createObjectURL(picture);
      picturePreviewEffects.forEach((effect) => (effect.style.backgroundImage = `url(${URL.createObjectURL(picture)})`));
    }
  });
};
