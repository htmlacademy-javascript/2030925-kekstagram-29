import { createMorePosts } from './create-post.js';

const randomUserPictureListElement = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const randomUserPictures = createMorePosts();
const randomUserPictureFragment = document.createDocumentFragment();

randomUserPictures.forEach(({url, description, likes, comments}) => {
  const randomUserPicture = randomUserPictureTemplate.cloneNode(true);
  randomUserPicture.querySelector('.picture__img').src = url;
  randomUserPicture.querySelector('.picture__img').alt = description;
  randomUserPicture.querySelector('.picture__likes').textContent = likes;
  randomUserPicture.querySelector('.picture__comments').textContent = comments.length;
  randomUserPictureFragment.appendChild(randomUserPicture);
});

randomUserPictureListElement.appendChild(randomUserPictureFragment);
