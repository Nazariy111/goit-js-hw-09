import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { images } from "./images";



const body = document.querySelector("div");
const listMarkup = '<ul class="gallery"></ul>';
body.insertAdjacentHTML("afterbegin", listMarkup);

const gallery = document.querySelector(".gallery");

const galleryMarkup = images
    .map((image) => `
    <li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
    <img
        class="gallery-image"
        src="${image.preview}"
        alt="${image.description}"
    />
    </a>
    </li>`)
    .join("");

gallery.innerHTML = galleryMarkup;

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });



