import{a as d,S as m,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function g(n){const o=new URLSearchParams({key:"51545892-4b8f299c7368d58b68a280d40",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const{data:r}=await d(`https://pixabay.com/api/?${o}`);return r.hits}catch(r){console.log(r)}}const y=new m(".gallery a"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(n){const o=n.map(({largeImageURL:r,webformatURL:i,tags:e,likes:t,views:s,comments:u,downloads:f})=>`
      <li>
      <a href="${r}">
      <img src="${i}" alt="${e}"></a>
     <ul class="gallery-info">
          <li>Likes<br><strong>${t}</strong></li>
          <li>Views<br><strong>${s}</strong></li>
          <li>Comments<br><strong>${u}</strong></li>
          <li>Downloads<br><strong>${f}</strong></li>
        </ul></li>  `).join("");a.innerHTML=o,y.refresh()}function p(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}function b(){a&&(a.innerHTML="")}const w=document.querySelector(".form");w.addEventListener("submit",n=>{n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(console.log(o),!o){l.warning({message:"This field cannot be empty!"});return}p(),g(o).then(r=>{if(console.log(r),r.length===0){l.warning({message:`Sorry, there are no images matching your search query. Please try again!
`});return}b(),h(r)}).catch(r=>{console.log(r.message)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
