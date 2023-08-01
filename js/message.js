import { isEscapeKey } from './functions.js';
import { Response } from './constants.js';

let messageType;

export const showSuccessMessage = (success = true) => {
  if (success === true) {
    messageType = Response.SUCCESS;
  } else {
    messageType = Response.ERROR;
  }


  const messageTemplate = document.querySelector(`#${messageType}`).content.querySelector(`.${messageType}`);
  const messageElement = messageTemplate.cloneNode(true);
  const buttonElement = messageElement.querySelector(`.${messageType}__button`);
  const bodyElement = document.querySelector('body');

  const removeElement = (element) => element.remove();

  const onEscapeClick = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      removeElement(messageElement);
      bodyElement.removeEventListener('keydown', onEscapeClick);
    }
  };

  const closeMessage = () => {
    removeElement(messageElement);
    bodyElement.removeEventListener('keydown', onEscapeClick);
  };

  const onElementClick = () => {
    closeMessage();
  };

  const onOutsideClick = (evt) => {
    if (evt.target === messageElement) {
      closeMessage();
    }
  };

  buttonElement.addEventListener('click', onElementClick);

  bodyElement.addEventListener('keydown', onEscapeClick);

  bodyElement.addEventListener('click', onOutsideClick);

  bodyElement.append(messageElement);

};
