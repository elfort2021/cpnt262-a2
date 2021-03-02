'use strict'

import {image} from './images.js';


const galleryContainer = document.querySelector('.image-gallery');

images.forEach(function(image){

  const fig = document.createElement('figure');
  galleryContainer.appendChild(fig); 

  const addImg = document.createElement('img')
  addImg.src = image.pathURL;
  addImg.alt = image.description;
  addImg.width = image.width;
  addImg.appendChild(addImg);

  const title = document.createElement('h2');
  title.innerHTML = image.title;
  fig.appendChild(title);
   

  const figCap = document.createElement('figcaption')
  figCap.innerHTML = `${image.credit} Photo Credit: `;
  fig.appendChild(figCap);
});
