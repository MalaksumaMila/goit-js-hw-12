import{a as d,S as g,i as l}from"./assets/vendor-BK_rxH-O.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(s,o){const t=new URLSearchParams({key:"51545892-4b8f299c7368d58b68a280d40",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const{data:n}=await d(`https://pixabay.com/api/?${t}`);return n.hits}catch(n){console.log(n)}}const y=new g(".gallery a"),a=document.querySelector(".gallery"),c=document.querySelector(".loader");function h(s){const o=s.map(({largeImageURL:t,webformatURL:n,tags:e,likes:r,views:i,comments:u,downloads:f})=>`
      <li>
      <a href="${t}">
      <img src="${n}" alt="${e}"></a>
     <ul class="gallery-info">
          <li>Likes<br><strong>${r}</strong></li>
          <li>Views<br><strong>${i}</strong></li>
          <li>Comments<br><strong>${u}</strong></li>
          <li>Downloads<br><strong>${f}</strong></li>
        </ul></li>  `).join("");a.innerHTML=o,y.refresh()}function p(){c.classList.remove("is-hidden")}function L(){c.classList.add("is-hidden")}function b(){a&&(a.innerHTML="")}const w=document.querySelector(".form");w.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(console.log(o),!o){l.warning({message:"This field cannot be empty!"});return}p(),m(o).then(t=>{if(console.log(t),t.length===0){l.warning({message:`Sorry, there are no images matching your search query. Please try again!
`});return}b(),h(t)}).catch(t=>{console.log(t.message)}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
