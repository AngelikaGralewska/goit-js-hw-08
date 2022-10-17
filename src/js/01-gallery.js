// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryImages = createGalleryItems(galleryItems);


galleryContainer.insertAdjacentHTML("beforeend", galleryImages);

function createGalleryItems(item) {
    return item

    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"          
                alt="${description}"
                />
            </a>
        </div>`;
      })
      .join("");
  }

  var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});