import { createMorePosts } from './create-post';

const randomUserPictureListElement = document.querySelectorAll('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const randomUserPictures = createMorePosts();
const randomUserPictureFragment = document.createDocumentFragment();

    randomUserPictures.forEach(({url, description, likes, comments}) => {
        const randomUserPicture = randomUserPictureTemplate.cloneNode(true);
        randomUserPicture.querySelector('.picture__img').src = url;
        randomUserPicture.querySelector('.picture__img').alt = description;
        randomUserPicture.querySelector('.picture__likes').value = likes;
        randomUserPicture.querySelector('.picture__comments').value = comments;
        randomUserPictureFragment.appendChild(randomUserPicture);
      });
      
      randomUserPictureListElement.appendChild(randomUserPictureFragment);


