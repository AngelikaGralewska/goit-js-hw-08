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
      .join("");
  }


  galleryContainer.addEventListener("click", openGalleryItem);

  function openGalleryItem(event){
    event.preventDefault();
    if(event.target.classList.contains("gallery_item"))
    return;
    
    const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="400" height="400">`);
  
    instance.show();
  
  
  window.addEventListener("keydown", escapeGalleryItem);

  function escapeGalleryItem(event){
    if(event.code === "Escape") {

    instance.close();
    }
  }
};