"use strict";

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((item) => {
    return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
 class="gallery__image"
 src="${item.preview}"
title="${item.description}"
alt="${item.description}"
width="900" height="650"
/>
 </a>
 </li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(ligthBox);

// const ligthBox = new SimpleLightbox('.gallery a', {
// 	captionDelay: 250
// }) - из библиотеки https://simplelightbox.com/ "usage"

// captionDelay - задержка заголовка. добавляет задержку перед отображением подписи (в мс) - "options"

// captionsData - получить заголовок из заданного атрибута - "options"
