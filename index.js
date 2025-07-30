import{a as d,i as a,S as m}from"./assets/vendor-BK_rxH-O.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function g(s){const t=new URLSearchParams({key:"51545892-4b8f299c7368d58b68a280d40",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const{data:o}=await d(`https://pixabay.com/api/?${t}`);return o.hits}catch{a.warning({message:"Помилка відповіді від сервера"})}}const y=new m(".gallery a"),l=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(s){const t=s.map(({largeImageURL:o,webformatURL:i,tags:e,likes:r,views:n,comments:u,downloads:f})=>`
      <li class="galleryblock">
      <a href="${o}">
      <img src="${i}" alt="${e}"></a>
     <ul class="gallery-info">
          <li>Likes<br><strong>${r}</strong></li>
          <li>Views<br><strong>${n}</strong></li>
          <li>Comments<br><strong>${u}</strong></li>
          <li>Downloads<br><strong>${f}</strong></li>
        </ul></li>  `).join("");l.innerHTML=t,y.refresh()}function p(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}function b(){l&&(l.innerHTML="")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){a.warning({message:"Заповніть пусте поле"});return}b(),p(),g(t).then(o=>{if(o.length===0){a.warning({message:`Sorry, there are no images matching your search query. Please try again!
`});return}h(o)}).catch(o=>{a.warning({message:"Помилка відповіді від сервера"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
