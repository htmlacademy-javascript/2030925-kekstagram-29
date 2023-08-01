import { DEFAULT_EFFECT, Effects } from './constants.js';

let currentEffect = DEFAULT_EFFECT;

const effectsList = document.querySelector('.img-upload__effects');
const uploadEffectElement = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');
const slider = document.querySelector('.effect-level__slider');
const imgFilterPreview = document.querySelector('.img-upload__preview img');

const closeSlider = () => uploadEffectElement.classList.add('hidden');

const openSlider = () => uploadEffectElement.classList.remove('hidden');

const createSlider = () => {
  noUiSlider.create(slider, {
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
  slider.noUiSlider.updateOptions({
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
  const currentValue = slider.noUiSlider.get();
  if (checkDefault()) {
    imgFilterPreview.style.filter = DEFAULT_EFFECT.style;
  } else {
    imgFilterPreview.style.filter = `${currentEffect.style}(${currentValue}${currentEffect.unit})`;
  }
  effectValue.value = currentValue;
};

export const addEffects = () => {
  effectsList.addEventListener('change', onEffectChange);
};

export const destroyEffects = () => {
  effectsList.removeEventListener('change', onEffectChange);
};

export const switchToDefault = () => {
  createSlider();
  closeSlider();
  slider.noUiSlider.on('update', onSliderUpdate);
};

export const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  updateSlider();
};
