import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');

let page = 1;
let query = '';
let hitsPerPage = 15;
let maxPage = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  hideLoadMoreButton();

  query = event.target.elements['search-text'].value.trim();

  if (!query) {
    iziToast.warning({ message: 'Заповніть пусте поле' });
    return;
  }
  clearGallery();

  showLoader();

  try {
    const data = await getImagesByQuery(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        message: `Sorry, there are no images matching your search query. Please try again!`,
      });
      return;
    }

    maxPage = Math.ceil(data.totalHits / hitsPerPage);

    createGallery(data.hits);
    if (data.totalHits > hitsPerPage) {
      showLoadMoreButton();
    } else {
      iziToast.warning({
        message: "We are sorry, but you've reached the end of search results",
      });
    }
  } catch (error) {
    iziToast.warning({ message: 'Помилка відповіді від сервера' });
  } finally {
    hideLoader();
  }
});

const loadBtn = document.querySelector('.load-more');

loadBtn.addEventListener('click', async () => {
  page++;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    createGallery(data.hits);

    let elem = document.querySelector('.galleryblock');
    let { height } = elem.getBoundingClientRect();

    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });

    if (maxPage === page) {
      hideLoadMoreButton();
      iziToast.warning({
        message: "We are sorry, but you've reached the end of search results",
      });
    }
  } catch (error) {
    iziToast.warning({ message: 'Помилка відповіді від сервера' });
  } finally {
    hideLoader();
  }
});
