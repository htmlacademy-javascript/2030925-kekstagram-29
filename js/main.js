import {Photos, Posts, Comments } from './constants';
import {getRandomArrayElement, getRandomIdFromRange, getRandomInteger} from './functions';
import {mockComments, mockDescriptions, mockMessages, mockNames} from './mocks';


const createPost = () =>({
  id: getRandomIdFromRange(Posts.MIN_ID,Posts.MAX_ID),
  url:  `photos/${getRandomIdFromRange(1,25)}.jpg`,
  description: getRandomArrayElement(mockDescriptions),
  likes: getRandomInteger(Posts.MIN_LIKES, Posts.MAX_LIKES),
  comments: getRandomArrayElement(mockComments)
});

const createComment = () =>({
  id:  getRandomIdFromRange(Comments.MIN_COMMENTS_ID, Comments.MAX_COMMENTS_ID),
  avatar: `img/avatar-${getRandomInteger(Photos.MIN_AVATAR_PHOTOS, Photos.MAX_AVATAR_PHOTOS)}.svg`,
  message: getRandomArrayElement(mockMessages),
  name: getRandomArrayElement(mockNames)
});

const createMoreComments = () => {
  Array.from({length:  getRandomInteger(Comments.MIN_COM,Comments.MAX_COM)}, createComment);
};
createMoreComments();
const createMorePosts = () => {
  Array.from({length: Posts.MAX_POSTS}, createPost);
};
createMorePosts();
