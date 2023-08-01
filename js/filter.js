import { DEFAULT_EFFECT, Effects } from './constants.js';

let currentEffect = DEFAULT_EFFECT;

const effectsListElement = document.querySelector('.img-upload__effects');
const uploadEffectElement = document.querySelector('.img-upload__effect-level');
const effectValueElement = document.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const imgFilterPreviewElement = document.querySelector('.img-upload__preview img');

const closeSlider = () => uploadEffectElement.classList.add('hidden');

const openSlider = () => uploadEffectElement.classList.remove('hidden');

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    start: DEFAULT_EFFECT.max,
    range: {
      min: DEFAULT_EFFECT.min,
      max: DEFAULT_EFFECT.max
    },
    step: DEFAULT_EFFECT.step,
    connect: 'lower'
  });
};

const checkDefault = () => currentEffect === DEFAULT_EFFECT;

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    start: currentEffect.max,
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    step: currentEffect.step,
    connect: 'lower',
  });
};

const onEffectChange = (evt) => {
  currentEffect = Effects.find((effect) => effect.name === evt.target.value);
  if (!checkDefault()) {
    updateSlider();
    openSlider();
  } else {
    updateSlider();
    closeSlider();
  }
};

const onSliderUpdate = () => {
  const currentValue = sliderElement.noUiSlider.get();
  if (checkDefault()) {
    imgFilterPreviewElement.style.filter = DEFAULT_EFFECT.style;
  } else {
    imgFilterPreviewElement.style.filter = `${currentEffect.style}(${currentValue}${currentEffect.unit})`;
  }
  effectValueElement.value = currentValue;
};

export const addEffects = () => {
  effectsListElement.addEventListener('change', onEffectChange);
};

export const destroyEffects = () => {
  effectsListElement.removeEventListener('change', onEffectChange);
};

export const switchToDefault = () => {
  createSlider();
  closeSlider();
  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

export const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};
