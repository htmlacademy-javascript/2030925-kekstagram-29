import {Posts} from './constants';
import {getRandomArrayElement, getRandomIdFromRange, getRandomInteger} from './functions';
import {mockComments, mockDescriptions} from './mocks';

const createPost = () =>({
  id: getRandomIdFromRange(Posts.MIN_ID,Posts.MAX_ID),
  url:  `photos/${getRandomIdFromRange(1,25)}.jpg`,
  description: getRandomArrayElement(mockDescriptions),
  likes: getRandomInteger(Posts.MIN_LIKES, Posts.MAX_LIKES),
  comments: getRandomArrayElement(mockComments)
});

const createMorePosts = () => {
  Array.from({length: Posts.MAX_POSTS}, createPost);
};
createMorePosts();
