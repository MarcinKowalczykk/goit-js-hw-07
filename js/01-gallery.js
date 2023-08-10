import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
galleryItems.forEach(item =>{
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery__item')

    const galleryLink = document.createElement('a');
    galleryLink.href = item.preview;
    galleryLink.classList.add('gallery__link');
    
    const galleryImage = document.createElement('img');
    galleryImage.src = item.preview;
    galleryImage.dataset.src = item.original;
    galleryImage.alt = item.description;
    galleryImage.classList.add('gallery__image');
    
    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);
    gallery.appendChild(galleryItem);
});

console.log(galleryItems);
