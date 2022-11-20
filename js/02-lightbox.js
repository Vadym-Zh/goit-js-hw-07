import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryMarkup = galleryImgMarkup(galleryItems);
// console.log(galleryMarkup);
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
// galleryEl.addEventListener('click', onGalleryClick);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// function onGalleryClick(e) {
//   e.preventDefault();
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
// }

function galleryImgMarkup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `<li class="gallery__item">
            <a class="gallery__item"    
            href="${original}">
                <img class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
        </a>;
</li>`;
    })
    .join('');
}
