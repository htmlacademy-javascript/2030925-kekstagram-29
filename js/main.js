import { MAX_POSTS_COUNT, RANDOM_AVATAR_URL, RANDOM_COMMENTS_COUNT, RANDOM_DESCRIPTION, RANDOM_LIKES, RANDOM_MESSAGE, RANDOM_PHOTO_URL, RANDOM_USER_ID, RANDOM_NAME } from './const';

const createPost = () =>({
  id: RANDOM_USER_ID,
  url: RANDOM_PHOTO_URL,
  description: RANDOM_DESCRIPTION,
  likes: RANDOM_LIKES,
  comments: createMoreComments()
});

const createComment = () =>({
  id: RANDOM_USER_ID,
  avatar: RANDOM_AVATAR_URL,
  message: RANDOM_MESSAGE,
  name: RANDOM_NAME
});

const createMoreComments = () => {
  Array.from({length: RANDOM_COMMENTS_COUNT}, createComment);
};

const createMorePosts = () => {
  Array.from({length: MAX_POSTS_COUNT}, createPost);
};
