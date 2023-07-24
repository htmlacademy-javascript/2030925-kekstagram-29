import { ErrorMessage, MAX_HASHTAG, REGULAR_SYMBOLS } from './constants.js';
import { isEscapeKey } from './functions.js';
import { resetScale } from './scale.js';

const bodyElement = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const uploadElement = uploadForm.querySelector('#upload-file');
const uploadCloseButton = uploadForm.querySelector('#upload-cancel');
const hashtagField = uploadForm.querySelector('.text__hashtags');
const commentField = uploadForm.querySelector('.text__description');

const isTextFieldFocused = () => document.activeElement === hashtagField || document.activeElement === commentField;

const pristine = new Pristine(uploadForm, {
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

pristine.addValidator(hashtagField, checkTagUnique, ErrorMessage.NON_UNIQUE_HASHTAG, 1 , false);

pristine.addValidator(hashtagField, hasValidTags, ErrorMessage.INVALID_HASHTAG_PATTERN, 2 , false);

pristine.addValidator(hashtagField, hasValidCount, ErrorMessage.INVALID_HASHTAG_COUNT, 3 , false);

const onFormSubmit = (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
};

const openModal = () => {
  uploadOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
};

const cancelModal = () => {
  uploadForm.reset();
  pristine.reset();
  resetScale();
  uploadOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  uploadCloseButton.removeEventListener('click', cancelModal);
  document.removeEventListener('click', closeWithEscape);
};

function closeOnClick() {
  cancelModal();
}

function closeWithEscape(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    cancelModal();
  }
}

const onUploadChange = () => {
  openModal();
  uploadCloseButton.addEventListener('click', closeOnClick);
  document.addEventListener('keydown', closeWithEscape);
};

export const renderModalForm = () => {
  uploadElement.addEventListener('change', onUploadChange);
};
/*
commentField.addEventListener('focus', function() {
  document.removeEventListener('keydown', closeWithEscape);
});

commentField.addEventListener('blur', function() {
  document.addEventListener('keydown', closeWithEscape);
});

hashtagField.addEventListener('focus', function() {
  document.removeEventListener('click', closeOnClick);
});

hashtagField.addEventListener('blur', function() {
  document.addEventListener('click', closeOnClick);
});
*/
uploadForm.addEventListener('submit', onFormSubmit);
