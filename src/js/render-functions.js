// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a');

const list = document.querySelector(".gallery")
const loader = document.querySelector(".loader")

export function createGallery(images) {
    const markUp = images.map( ({largeImageURL, webformatURL, tags, likes, views, comments, downloads}) => `
      <li>
      <a href="${largeImageURL}">
      <img src="${webformatURL}" alt="${tags}"></a>
     <ul class="gallery-info">
          <li>Likes<br><strong>${likes}</strong></li>
          <li>Views<br><strong>${views}</strong></li>
          <li>Comments<br><strong>${comments}</strong></li>
          <li>Downloads<br><strong>${downloads}</strong></li>
        </ul></li>  `

    ).join("");

    list.innerHTML = markUp;
    lightbox.refresh();
}

export function showLoader() {
loader.classList.remove('is-hidden')
}

export function hideLoader() {
loader.classList.add('is-hidden')
}

export function clearGallery() {
   if (list) {
    list.innerHTML = '';
  }
}

