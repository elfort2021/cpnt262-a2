'use strict'

const image =[ 
  {
    id: 1, 
    title: 'Doorways',
    description: 'Doorways are portals of entry to the unknown',
    width: 683,
    pathURL: 'images/img1.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Door',
    credit: 'Filip Kominik via Unsplash',
    creditURL: 'https://unsplash.com/photos/IHtVbLRjTZU'
  },
  {
    id: 2, 
    title: 'Watermelon Peperomia',
    description: 'Tropical Plant Leafs of Peperomia',
    width: 683,
    pathURL: 'images/img2.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Peperomia',
    credit: 'Ren Ran via Unsplash',
    creditURL: 'https://unsplash.com/photos/bBiuSdck8tU'
  },
  {
    id: 3, 
    title: 'Fiddle Leaf Fig',
    description: 'A commonly tricky houseplant despite its popularity, the fiddle-leaf fig does not respond well to being moved, especially from a spot where it is thriving.',
    width: 683,
    pathURL: 'images/img3.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Ficus_lyrata',
    credit: 'Kendal via Unsplash',
    creditURL: 'https://unsplash.com/photos/TW2bfT_tWDI'

  },
  {
    id: 4, 
    title: 'Monstera',
    description: 'Large dark green monstera leaf',
    width: 683, 
    pathURL: 'images/img4.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Monstera', 
    credit: 'Paula Russel via Unsplash',
    creditURL: 'https://unsplash.com/photos/8FSJjOb1nUc'
  },
  {
    id: 5, 
    title: 'Helianthus',
    description: 'Sunflowers Growing Together',
    width: 1024, 
    pathURL: 'images/img5.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Heliaonthus',
    credit: 'Gerome Brunaeu via Unsplash',
    creditURL: 'https://unsplash.com/photos/RPmWEtZLh7U' 
  },
  {
    id: 6, 
    title: 'Greenhouses',
    description: 'The interior of a greenhouse exposed to sunlight becomes significantly warmer than the external temperature, protecting its contents in cold weather.',
    width: 683,
    pathURL: 'images/img6.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Greenhouse',
    credit: 'Elsa Noblet via Unsplash',
    creditURL: 'https://unsplash.com/photos/r37oKn9cW-s'
  },
  {
    id: 7, 
    title: 'Succulents',
    description: 'Small cacti-like plants in pots that you can forget to water',
    width: 1024,
    pathURL: 'images/img7.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Succulent_plant',
    credit: 'Annie Sprat via Unsplash',
    creditURL: 'https://unsplash.com/photos/ncQ2sguVlgo'
  },
  {
    id: 8, 
    title: 'Fern',
    description: 'A fern leaf being held up',
    width: 683,
    pathURL: 'images/img8.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Fern',
    credit: 'Olena Sergienko via Unsplash',
    creditURL: 'https://unsplash.com/photos/r0M9HrfJMBM'
  },
  {
    id: 9, 
    title: 'Rubber Tree',
    description: 'Rubber Tree Leafs and Stem',
    width: 683, 
    pathURL: 'images/img9.jpg',
    linkURL: 'https://en.wikipedia.org/wiki/Ficus_elastica',
    credit: 'Scott Webb via Unsplash',
    creditURL: 'https://unsplash.com/photos/BLBCj6dxaSE'
  }
]; 

const imageContainer = document.querySelector(".image-gallery");

// the loop

for (let i = 0; i < image.length; i++) {

//container 
  const figure = document.createElement('figure');
  imageContainer.appendChild(figure);

const caption = document.createElement('h2'); 
title.innerText = `${image[i].title}`;
figure.appendChild(caption);


//image 

const figImage = document.createElement('img')
figImage.src = `${image[i].pathURL}`;
figImage.alt = `${image[i].description}`;
figImage.style.maxWidth = `${image[i].width}`; 
figure.appendChild(figImage);

// fig caption

const figCap = document.createElement('fig-caption') 
figure.appendChild(figCap);
};


//loop through each image and string together the html with object keys




// const galleryContainer = document.querySelector('.image-gallery');

// images.forEach(function(image){

//   const fig = document.createElement('figure');
//   galleryContainer.appendChild(fig); 

//   const addImg = document.createElement('img')
//   addImg.src = image.pathURL;
//   addImg.alt = image.description;
//   addImg.width = image.width;
//   addImg.appendChild(addImg);

//   const title = document.createElement('h2');
//   title.innerHTML = image.title;
//   fig.appendChild(title);
   

//   const figCap = document.createElement('figcaption')
//   figCap.innerHTML = `${image.credit} Photo Credit: `;
//   fig.appendChild(figCap);
// });
