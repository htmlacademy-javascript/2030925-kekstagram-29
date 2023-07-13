import { createMorePosts } from './create-post';

const randomUserPostListElement = document.querySelectorAll('.pictures');
const randomUserPostTemplate = document.querySelector('#picture').content;
const randomUserPosts = createMorePosts();
const randomUserPostFragment = document.createDocumentFragment();

export const createRandomUserPost = function() {
    randomUserPosts.forEach((url, description, likes, comments) => {
        const randomUserPost = randomUserPostTemplate.cloneNode(true);
        randomUserPost.querySelector('.picture__img').src = url;
        randomUserPost.querySelector('.picture__img').alt = description;
        randomUserPost.querySelector('.picture__likes').textContent = likes;
        randomUserPost.querySelector('.picture__comments').textContent = comments;
        randomUserPostFragment.appendChild(randomUserPost);
      });
      
      randomUserPostListElement.appendChild(randomUserPostFragment);
}

