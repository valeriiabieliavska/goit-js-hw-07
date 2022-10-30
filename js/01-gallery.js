"use strict";

import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
const markup = galleryItems
  .map((item) => {
    return `<div class = "gallery__item>
      <a class = "gallery__link" href = "${item.original}">
      <img
 class="gallery__image"
 src="${item.preview}"
 data-source="${item.original}"
alt="${item.description}"
width="900" height="650"
/>
 </a>
</div>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", onOpenModalImage);

function onOpenModalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
<img src="${event.target.dataset.source}" >`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onModalClose);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onModalClose);
      },
    }
  );
  function onModalClose(event) {
    if (event.key === "Escape") instance.close();
  }
  instance.show();
}

// const gallery = document.querySelector(".gallery");
// const items = [];

// galleryItems.forEach((el) => {
//   const galleryItem = document.createElement("div");
//   galleryItem.className = "gallery__item";
//   const galleryLink = document.createElement("a");
//   galleryLink.className = "gallery__link";
//   const galleryImage = document.createElement("img");
//   galleryImage.className = "gallery__image";
//   galleryImage.src = el.preview;
//   galleryImage.setAttribute("data-source", el.original);
//   galleryImage.alt = el.description;

//   galleryItem.append(galleryLink);
//   galleryLink.append(galleryImage);
//   items.push(galleryItem);
// });

// gallery.append(...items);

// console.log(galleryItems);

// gallery.addEventListener("click", (event) => {
//   event.preventDefault();

//   const instance = basicLightbox.create(`
//     <img src="${event.target.dataset.source}" width="900" height="650">
// `);

// galleryItems.forEach((el) => {
// const galleryItem = document.createElement('div');  додає div
// galleryItem.className = 'gallery__item'; додає класс div
// const galleryLink = document.createElement('a'); додає посилання на зображення
// galleryLink.className = 'gallery__link'; додає класс посиланню
// const galleryImage = document.createElement('img'); додає img
// galleryImage.className = 'gallery__image'; додає класс зображенню
// galleryImage.src = element.preview; додає src - превью зображення(маленьке)
// galleryImage.setAttribute('data-source', element.original); додає оригінальне зображення, яке відкривається
// galleryImage.alt = element.description; додає опис зображення

// preventDefault(). метод Для скасування дії браузера за замовчуванням в об'єкта події
// event.currentTarget - елемент, на якому виконується обробник події.
// JavaScript свойство nodeName объекта Node возвращает строку (DOMString), содержащую имя текущего узла

// 'keydown' - Натискаючи клавішу, спочатку відбувається keydown, після чого - keyup, коли клавішу відпустили.
// Властивість key повертає символ, згенерований натисканням клавіші, враховуючи стан клавіш-модифікаторів,
// наприклад, Shift, а також поточну мову.
// Властивість code повертає код фізичної клавіші на клавіатурі і не залежить від мови.
// insertAdjacentHTML - Метод insertAdjacentHTML позволяет вставить строку HTML кода в любое место страницы.
//  Код вставляется относительно опорного элемента.
//  Свойство dataset позволяет считывать или устанавливать любые дата-атрибуты на HTML-элементе.
// Метод EventTarget.addEventListener() регистрирует определённый обработчик события, вызванного на EventTarget.
// EventTarget может быть Element, Document, Window, или любым другим объектом, поддерживающим события
//   (таким как XMLHttpRequest(en - US)).
// event.target - це посилання на вихідний елемент, на якому відбулася подія, в процесі спливання вона - незмінна.
