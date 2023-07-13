import {Posts} from './constants.js';
import {getRandomArrayElement, getRandomIdFromRange, getRandomInteger} from './functions.js';
import {mockComments, mockDescriptions} from './mocks.js';

const createPost = () => (
  {
    id: getRandomIdFromRange(Posts.MIN_ID,Posts.MAX_ID),
    url:  `photos/${getRandomIdFromRange(1,25)()}.jpg`,
    description: getRandomArrayElement(mockDescriptions),
    likes: getRandomInteger(Posts.MIN_LIKES, Posts.MAX_LIKES),
    comments: getRandomArrayElement(mockComments)
  }
);

export const createMorePosts = () =>  Array.from({length: Posts.MAX_POSTS}, createPost);
console.log(createMorePosts())
