import { sendData } from './api.js';
import { ErrorMessage, MAX_HASHTAG, REGULAR_SYMBOLS, SubmitButtonText } from './constants.js';
import { addEffects, destroyEffects, resetEffects } from './filter.js';
import { isEscapeKey } from './functions.js';
import { resetScale } from './scale.js';
import { showSuccessMessage } from './message.js';

const bodyElement = document.querySelector('body');
const uploadFormElement = document.querySelector('.img-upload__form');
const uploadButtonElement = uploadFormElement.querySelector('.img-upload__submit');
const uploadOverlayElement = uploadFormElement.querySelector('.img-upload__overlay');
const uploadElement = uploadFormElement.querySelector('#upload-file');
const uploadCloseButtonElement = uploadFormElement.querySelector('#upload-cancel');
const hashtagFieldElement = uploadFormElement.querySelector('.text__hashtags');
const commentFieldElement = uploadFormElement.querySelector('.text__description');

const isTextFieldFocused = () => document.activeElement === hashtagFieldElement || document.activeElement === commentFieldElement;

const disableSubmitButton = () => {
  uploadButtonElement.disabled = true;
};

const unlockSubmitButton = () => {
  uploadButtonElement.disabled = false;
};

const pristine = new Pristine(uploadFormElement, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper-error'
});

const normalizeTags = (tagStr) => tagStr.trim().split(' ').filter((tag) => Boolean(tag.length));

const checkTagUnique = (tags) => {
  const tagsToLowerCase = normalizeTags(tags).map((tag) => tag.toLowerCase());
  return tagsToLowerCase.length === new Set(tagsToLowerCase).size;
};

const hasValidCount = (tags) => normalizeTags(tags).length <= MAX_HASHTAG;

const hasValidTags = (tags) => normalizeTags(tags).every((tag) => REGULAR_SYMBOLS.test(tag));

pristine.addValidator(hashtagFieldElement, checkTagUnique, ErrorMessage.NON_UNIQUE_HASHTAG, 1 , false);

pristine.addValidator(hashtagFieldElement, hasValidTags, ErrorMessage.INVALID_HASHTAG_PATTERN, 2 , false);

pristine.addValidator(hashtagFieldElement, hasValidCount, ErrorMessage.INVALID_HASHTAG_COUNT, 3 , false);

const openModal = () => {
  uploadOverlayElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  addEffects();
};

const cancelModal = () => {
  uploadFormElement.reset();
  pristine.reset();
  resetScale();
  destroyEffects();
  resetEffects();
  uploadOverlayElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadCloseButtonElement.removeEventListener('click', cancelModal);
  document.removeEventListener('click', onEscapeClick);
};

function onMouseClick() {
  cancelModal();
}

function onEscapeClick(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    cancelModal();
  }
}

const onUploadChange = () => {
  openModal();
  uploadCloseButtonElement.addEventListener('click', onMouseClick);
  document.addEventListener('keydown', onEscapeClick);
};

export const renderModalForm = () => {
  uploadElement.addEventListener('change', onUploadChange);
};

uploadFormElement.addEventListener('change', () => {
  const isValid = pristine.validate();
  if (!isValid) {
    disableSubmitButton();
  }
  unlockSubmitButton();
});

const startSendData = () => {
  disableSubmitButton();
  uploadButtonElement.textContent = SubmitButtonText.AFTER;
  hashtagFieldElement.readonly = true;
  commentFieldElement.readonly = true;
};

const endSendData = () => {
  unlockSubmitButton();
  uploadButtonElement.textContent = SubmitButtonText.BEFORE;
  hashtagFieldElement.readonly = false;
  commentFieldElement.readonly = false;
};

export const setOnFormSubmit = () => {
  uploadFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      const formData = new FormData(evt.target);
      startSendData();
      sendData(formData, () => {})
        .then(() => {
          cancelModal();
          showSuccessMessage();
        })
        .catch(() => (
          showSuccessMessage(false)
        ))
        .finally(endSendData);
    }
  });
};
