import './create-picture.js';
import { isEscapeKey } from './functions.js';
import { COMMENTS_PORTION } from './constants.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsListElement = document.querySelector('.social__comments');
const postCommentsCountElement = document.querySelector('.comments-shown-count');
const commentsCountElement = document.querySelector('.comments-count');
const commentsLoaderButtonElement = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');
const bigPictureImageElement = document.querySelector('.big-picture__img img');

let commentsPortion = 0;
let comments = [];

const createPictureComment = ({avatar,message,name}) => {
  const comment = commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return (comment);
};

const createPictureInfo = ({url, likes, description}) => {
  bigPictureImageElement.src = url;
  bigPictureImageElement.alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const renderComments = () => {
  commentsPortion += COMMENTS_PORTION;

  if (commentsPortion >= comments.length) {
    commentsLoaderButtonElement.classList.add('hidden');
    commentsPortion = comments.length;
  } else {
    commentsLoaderButtonElement.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsPortion; i++) {
    const comment = createPictureComment(comments[i]);
    fragment.append(comment);
  }

  commentsListElement.innerHTML = '';
  commentsListElement.append(fragment);
  commentsCountElement.textContent = comments.length;
  postCommentsCountElement.textContent = commentsPortion;
};

const cancelBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeClick);
  commentsPortion = 0;
};

function onEscapeClick(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    cancelBigPicture();
  }
}

const onMouseClick = () => {
  cancelBigPicture();
};

const onCommentsLoaderClick = () => renderComments();

export const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  commentsLoaderButtonElement.classList.remove('hidden');
  commentsCountElement.classList.remove('hidden');
  document.addEventListener('keydown', onEscapeClick);
  createPictureInfo(data);
  comments = data.comments;

  if (comments.length > 0) {
    renderComments();
  }
};

bigPictureCancelElement.addEventListener('click', onMouseClick);
commentsLoaderButtonElement.addEventListener('click', onCommentsLoaderClick);
