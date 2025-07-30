import{a as d,S as g,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(n,o){const t=new URLSearchParams({key:"51545892-4b8f299c7368d58b68a280d40",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const{data:s}=await d(`https://pixabay.com/api/?${t}`);return s.hits}catch(s){console.log(s)}}const y=new g(".gallery a"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(n){const o=n.map(({largeImageURL:t,webformatURL:s,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
      <li class="galleryblock">
      <a href="${t}">
      <img src="${s}" alt="${e}"></a>
     <ul class="gallery-info">
          <li>Likes<br><strong>${r}</strong></li>
          <li>Views<br><strong>${i}</strong></li>
          <li>Comments<br><strong>${u}</strong></li>
          <li>Downloads<br><strong>${f}</strong></li>
        </ul></li>  `).join("");a.innerHTML=o,y.refresh()}function p(){c.classList.remove("is-hidden")}function b(){c.classList.add("is-hidden")}function L(){a&&(a.innerHTML="")}const w=document.querySelector(".form");w.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(console.log(o),!o){l.warning({message:"This field cannot be empty!"});return}p(),m(o).then(t=>{if(console.log(t),t.length===0){l.warning({message:`Sorry, there are no images matching your search query. Please try again!
`});return}L(),h(t)}).catch(t=>{console.log(t.message)}).finally(()=>{b()})});
//# sourceMappingURL=index.js.map
