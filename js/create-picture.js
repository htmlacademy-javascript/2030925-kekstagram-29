const randomUserPictureListElement = document.querySelector('.pictures');
const randomUserPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

export function renderPictures(arr) {
  const randomUserPictureFragment = document.createDocumentFragment();

  arr.forEach(({id, url, description, likes, comments}) => {
    const randomUserPictureElement = randomUserPictureTemplate.cloneNode(true);
    const randomUserImageElement = randomUserPictureElement.querySelector('.picture__img');

    randomUserImageElement.src = url;
    randomUserImageElement.alt = description;
    randomUserPictureElement.querySelector('.picture__likes').textContent = likes;
    randomUserPictureElement.querySelector('.picture__comments').textContent = comments.length;
    randomUserPictureElement.dataset.pictureId = id;
    randomUserPictureFragment.appendChild(randomUserPictureElement);
  });

  randomUserPictureListElement.appendChild(randomUserPictureFragment);
}
