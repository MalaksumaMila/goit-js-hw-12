// Описаний у документації
import axios from 'axios';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export async function getImagesByQuery(query, page = 1) {
  const params = new URLSearchParams({
    key: '51545892-4b8f299c7368d58b68a280d40',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: 15,
  });

  try {
    const { data } = await axios(`https://pixabay.com/api/?${params}`);
    return data;
  } catch (error) {
    iziToast.warning({ message: 'Помилка відповіді від сервера' });
  }
}
