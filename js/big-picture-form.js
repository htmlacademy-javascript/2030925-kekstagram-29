import { isEscapeKey } from './util.js';
import './create-picture.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCancelElement = document.querySelector('.big-picture__cancel');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');
const commentsCount = document.querySelector('.comments-count');
const commentsLoader = document.querySelector('.comments-loader');
const bodyElement = document.querySelector('body');

const createPictureComment = ({avatar,message,name}) => {
  const comment = commentElement.cloneNode(true);
  comment.querySelector('.social__picture').src = avatar;
  comment.querySelector('.social__picture').alt = name;
  comment.querySelector('.social__text').textContent = message;

  return comment;
};

const createPictureInfo = ({url, likes, description}) => {
  bigPictureElement.querySelector('.big-picture__img img').src = url;
  bigPictureElement.querySelector('.big-picture__img img').alt = description;
  bigPictureElement.querySelector('.likes-count').textContent = likes;
  bigPictureElement.querySelector('.social__caption').textContent = description;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const comment = createPictureComment(item);
    fragment.append(comment);
  });
  commentsList.append(fragment);
};

const closeWithEscape = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureElement.classList.add('hidden');
    bodyElement.classList.remove('.modal-open');
  }
};

const cancelBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('.modal-open');
  document.removeEventListener('keydown', closeWithEscape);
};

const closeOnClick = () => {
  cancelBigPicture();
};


export const openBigPicture = (data) => {
  bigPictureElement.classList.remove('hidden');
  bigPictureElement.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentsCount.classList.add('hidden');
  document.addEventListener('click', closeWithEscape);
  createPictureInfo(data);
  renderComments(data.comments);
};

bigPictureCancelElement.addEventListener('click', closeOnClick);
