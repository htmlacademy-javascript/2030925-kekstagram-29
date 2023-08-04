import { DEFAULT_SCALE, MAX_SCALE, MIN_SCALE, SCALE_STEP } from './constants.js';

const pictureElement = document.querySelector('.img-upload__preview');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleElement = document.querySelector('.scale__control--value');

const pictureScale = (value) => {
  pictureElement.style.transform = `scale(${value / 100})`;
  scaleElement.value = `${value}%`;
};

const onDecreaseButtonClick = () => {
  pictureScale(Math.max(parseInt(scaleElement.value, 10) - SCALE_STEP, MIN_SCALE));
};

const onIncreaseButtonClick = () => {
  pictureScale(Math.min(parseInt(scaleElement.value, 10) + SCALE_STEP , MAX_SCALE));
};

export const resetScale = () => pictureScale(DEFAULT_SCALE);

smallerButtonElement.addEventListener('click', onDecreaseButtonClick);

biggerButtonElement.addEventListener('click', onIncreaseButtonClick);
