import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryLink = document.querySelector('.gallery>a');

const galleryMarkup = createGallery(galleryItems);

gallery.innerHTML += galleryMarkup;

function createGallery(galleryArr) {
    return galleryArr.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    }).join('');
};

gallery.addEventListener('click', toImageClick);

function toImageClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }
};

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: '250' });