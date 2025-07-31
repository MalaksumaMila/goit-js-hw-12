import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import {getImagesByQuery} from "./js/pixabay-api"
import {clearGallery, createGallery, hideLoader, showLoader } from "./js/render-functions";

const form = document.querySelector('.form');

form.addEventListener ("submit", (event) =>{
event.preventDefault();

const inputValue = event.target.elements["search-text"].value.trim();

 
 
if (!inputValue) {
    iziToast.warning({message: 'Заповніть пусте поле'});
    return;
} 
clearGallery(); 
showLoader();

getImagesByQuery(inputValue)
.then ( data => {
       if(data.length === 0) {
        iziToast.warning ({message:`Sorry, there are no images matching your search query. Please try again!
`} )
return;
    }
   
    createGallery(data);
}

)
.catch (error => {
    iziToast.warning({message: 'Помилка відповіді від сервера'})
})

.finally ( () => {
    hideLoader();
})


})


const loadMore = document.querySelector(".load-more");

loadMore.addEventListener("click", onLoadMore);

async function onLoadMore() {
    page++;
    loadMore.disabled = true;
    
    try {
        const data = await getImagesByQuery(query, page);
        list.insertAdjacentHTML("beforeend", createGallery(data.hits));

        if(data.hits.length + 1 >= data.totalHits) {
            loadMore.classList.replace("load-more", "load-more-hidden");
        }
    }
}
