import {Photos, Comments } from './constants';
import {getRandomArrayElement, getRandomIdFromRange, getRandomInteger} from './functions';
import {mockMessages, mockNames} from './mocks';

const createComment = () =>({
  id:  getRandomIdFromRange(Comments.MIN_COMMENTS_ID, Comments.MAX_COMMENTS_ID),
  avatar: `img/avatar-${getRandomInteger(Photos.MIN_AVATAR_PHOTOS, Photos.MAX_AVATAR_PHOTOS)}.svg`,
  message: getRandomArrayElement(mockMessages),
  name: getRandomArrayElement(mockNames)
});

export const createMoreComments = () => {
  Array.from({length:  getRandomInteger(Comments.MIN_COM,Comments.MAX_COM)}, createComment);
};
createMoreComments();
