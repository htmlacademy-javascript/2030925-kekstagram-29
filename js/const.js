import { getRandomArrayElement, getRandomInteger } from "./functions";
import { mockDescriptions, mockMessages, mockNames } from "./mocks";

export const RANDOM_USER_ID = getRandomIdFromRange(1,25);

export const RANDOM_PHOTO_URL = `photos/${getRandomIdFromRange(1,25)}.jpg`;

export const RANDOM_AVATAR_URL = `img/avatar-${getRandomInteger(1,6)}.svg`;

export const RANDOM_LIKES = getRandomInteger(15, 200);

export const RANDOM_DESCRIPTION = getRandomArrayElement(mockDescriptions);

export const RANDOM_NAME = getRandomArrayElement(mockNames);

export const RANDOM_MESSAGE = getRandomArrayElement(mockMessages);

export const RANDOM_COMMENTS_COUNT = getRandomInteger(0,30);

export const MAX_POSTS_COUNT = 25;
