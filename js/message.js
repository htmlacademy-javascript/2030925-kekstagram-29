import { isEscapeKey } from './functions.js';

let messageType;

const Response = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const showSuccessMessage = (success = true) => {
  if (success === true) {
    messageType = Response.SUCCESS;
  }
  messageType = Response.ERROR;


  const messageTemplate = document.querySelector(`#${messageType}`).content.querySelector(`.${messageType}`);
  const messageElement = messageTemplate.cloneNode(true);
  const buttonElement = messageElement.querySelector(`.${messageType}__button`);
  const bodyElement = document.querySelector('body');

  const removeElement = (element) => element.remove();

  const closeWithEscape = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeElement(messageElement);
      bodyElement.removeEventListener('keydown', closeWithEscape);
    }
  };

  const closeMessage = () => {
    removeElement(messageElement);
    bodyElement.removeEventListener('keydown', closeWithEscape);
  };

  const closeOnElementClick = () => {
    closeMessage();
  };

  const closeOnOutsideClick = (evt) => {
    if (evt.target === messageElement) {
      closeMessage();
    }
  };

  buttonElement.addEventListener('click', closeOnElementClick);

  bodyElement.addEventListener('keydown', closeWithEscape);

  bodyElement.addEventListener('click', closeOnOutsideClick);

  bodyElement.append(messageElement);

};
