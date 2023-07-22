export const Photos = {
  MIN_PHOTOS: 1,
  MAX_PHOTOS: 25,
  MIN_AVATAR_PHOTOS: 1,
  MAX_AVATAR_PHOTOS: 6
};

export const Comments = {
  MIN_COMMENTS_ID: 1,
  MAX_COMMENTS_ID: 25,
  MIN_COMMENTS: 0,
  MAX_COMMENTS: 30
};

export const Posts = {
  MIN_ID: 1,
  MAX_ID: 25,
  MIN_LIKES: 15,
  MAX_LIKES: 200,
  MAX_POSTS: 25
};

export const COMMENTS_PORTION = 5;

export const MAX_HASHTAG = 5;

export const REGULAR_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;

export const ErrorMessage = {
  INVALID_HASHTAG_COUNT: `Максимальное число хештегов &mdash; ${MAX_HASHTAG} символов`,
  INVALID_HASHTAG_PATTERN: 'Хештег(и) составлен(ы) неправильно',
  NON_UNIQUE_HASHTAG: 'Соблюдайте уникальность при составлении ваших хештегов!'
};
