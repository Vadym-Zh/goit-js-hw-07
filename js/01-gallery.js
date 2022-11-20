import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryImgMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  // console.log(e.target.nodeName);

  const instance = basicLightbox.create(
    `  <img src="${e.target.dataset.source}" alt="Big Pictures"/> `,
    {
      onShow: instance => {
        galleryEl.addEventListener('keydown', onEscClose);
      },
      onClose: instance => {
        galleryEl.removeEventListener('keydown', onEscClose);
      },
    },
  );
  instance.show();
  function onEscClose(evt) {
    if (evt.key === 'Escape') {
      instance.close();
    }
  }
}

function galleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
