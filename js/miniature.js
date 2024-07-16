import {createDescriptionsFoto} from './create-element.js';
const sectionOtherUsers = document.querySelector('.pictures');
sectionOtherUsers.querySelector('.pictures__title').classList.remove('visually-hidden');

const similarFotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarFotos = createDescriptionsFoto();
const similarFotoFragment = document.createDocumentFragment();

similarFotos.forEach(({url, comments, id, likes, description}) => {
  const fotoElement = similarFotoTemplate.cloneNode(true);
  fotoElement.querySelector('.picture__img').src = url;
  fotoElement.querySelector('.picture__comments').textContent = comments.length;
  fotoElement.querySelector('.picture__likes').textContent = likes;
  fotoElement.querySelector('.picture__img').alt = description;
  fotoElement.dataset.id = id;
  similarFotoFragment.appendChild(fotoElement);
});

sectionOtherUsers.appendChild(similarFotoFragment);

export {similarFotos};

