import { DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_STEP } from './constants.js';

const pictureElement = document.querySelector('.img-upload__preview');
const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scale = document.querySelector('.scale__control--value');

const pictureScale = (value) => {
  pictureElement.style.transform = `scale(${value / 100})`;
  scale.value = `${value}%`;
};

const smallerButtonOnClick = () => {
  pictureScale(Math.max(parseInt(scale.value, 10) - SCALE_STEP, MIN_SCALE));
};

const biggerButtonOnClick = () => {
  pictureScale(Math.min(parseInt(scale.value, 10) + SCALE_STEP , MAX_SCALE));
};

export const resetScale = () => pictureScale(DEFAULT_SCALE);

smallerButton.addEventListener('click', smallerButtonOnClick);

biggerButton.addEventListener('click', biggerButtonOnClick);
