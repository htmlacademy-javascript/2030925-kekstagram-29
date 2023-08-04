import { FORMATS } from './constants.js';

const pictureUploadElement = document.querySelector('.img-upload__input[type=file]');
const picturePreviewElement = document.querySelector('.img-upload__preview img');
const picturePreviewEffectsElement = document.querySelectorAll('.effects__preview');

export const uploadPicture = () => {
  pictureUploadElement.addEventListener('change', () => {
    const picture = pictureUploadElement.files[0];
    const pictureName = picture.name.toLowerCase();
    const matches = FORMATS.some((file) => pictureName.endsWith(file));

    if (matches) {
      picturePreviewElement.src = URL.createObjectURL(picture);
      picturePreviewEffectsElement.forEach((effect) => (effect.style.backgroundImage = `url(${URL.createObjectURL(picture)})`));
    }
  });
};
