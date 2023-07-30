import { DEFAULT_EFFECT, Effects } from './constants.js';

let currentEffect = DEFAULT_EFFECT;

/*const uploadElement = document.querySelector('.img-upload__form');*/
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

/*
const closeSlider = () => uploadEffectElement.classList.add('hidden');

const openSlider = () => uploadEffectElement.classList.remove('hidden');

const removeEffects = () => {
  effectValue.value = Effects.DEFAULT.max;
  imgFilterPreview.className = `effects__preview--${Effects.DEFAULT.name}`;
  imgFilterPreview.style.filter = `${Effects.DEFAULT.name}`;
};

const toggleEffects = (effect) => {
  if (effect.name === 'none') {
    removeEffects();
    return;
  }
  openSlider();

  slider.noUiSlider.updateOptions({
    range: {
      min: effect.min,
      max: effect.max
    },
    start: effect.max,
    step: effect.step
  });
};

const changeEffectPreview = (evt) => {
  if (evt.target.value === 'none') {
    closeSlider();
  }
  imgFilterPreview.className = `effects__preview--${evt.target.value}`;
  toggleEffects(Effects[evt.target.value]);
};

const changeEffectValue = () => {
  const sliderValue = slider.noUiSlider.get();
  const checkedEffects = effectsList.querySelector('.effects__radio:checked');
  const effectName = Effects[checkedEffects.value].name;
  const effectUnit = Effects[checkedEffects.value].unit;
  imgFilterPreview.style.filter = `${effectName}(${sliderValue}${effectUnit})`;
  effectValue.value = sliderValue;
};

const addSliderEffect = () => {
  noUiSlider.create(slider, {
    range: {
      min: Effects.DEFAULT.min,
      max: Effects.DEFAULT.max
    },
    start: Effects.DEFAULT.max,
    step: Effects.DEFAULT.step,
    connect: 'lower',
    format: {
      to: function(value) {
        if(Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function(value) {
        return parseFloat(value);
      }
    }
  });
  closeSlider();
  slider.noUiSlider.on('update', changeEffectValue);
};

export const addEffects = () => {
  effectsList.addEventListener('change', changeEffectPreview);
  addSliderEffect();
};

export const destroyEffects = () => {
  removeEffects();
  effectsList.removeEventListener('change', changeEffectPreview);
  if (!uploadEffectElement.classList.contains('hidden')) {
    closeSlider();
  }
  slider.noUiSlider.destroy();
};
*/
