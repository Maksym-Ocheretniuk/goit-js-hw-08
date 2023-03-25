// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Знаходимо галерею та її елементи "li"
const galleryEl = document.querySelector('.gallery');

// Додаємо розмітку в структуру
galleryEl.innerHTML = createListImg(galleryItems);

// Функція створення розмітки "li" списку в HTML
function createListImg(images) {
  return images
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
    .join('');
}

// бібліотека SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
