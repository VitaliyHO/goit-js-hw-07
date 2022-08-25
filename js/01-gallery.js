import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);


const gallery = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

const instance = basicLightbox.create(`
    <div class="modal">
    <img src="" alt="">
    </div>
`)

gallery.innerHTML += galleryMarkup;

function createGallery(galleryArr) {
    return galleryArr.map(({preview, original, description}) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                        <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        />
                    </a>
                </div>`
    }).join('');
};


gallery.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(event) {
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return
    };

    const refToLargeImage = event.target.dataset.source;
    const descImage = event.target.getAttribute('alt');
    console.log(refToLargeImage);
    console.log(descImage);

    instance.show();
    const modalWindow = document.querySelector('.modal>img');

    console.log(modalWindow);


    modalWindow.setAttribute("src", refToLargeImage);
    modalWindow.setAttribute("alt", descImage);


    modalWindow.addEventListener('click', event =>  instance.close());

}



