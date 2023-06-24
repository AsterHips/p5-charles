const bannerImageElement = document.querySelector('.banner-img');
const bannerParagraphElement = document.querySelector('#banner p');
const arrowLeftElement = document.querySelector('.arrow_left');
const arrowRightElement = document.querySelector('.arrow_right');
const dotElements = document.getElementsByClassName('dot');

let index = 0;

const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

arrowRightElement.addEventListener('click', () => {
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  if (index >= slides.length-1) {
    index = 0
  } else {
    index++
  }
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
});

arrowLeftElement.addEventListener('click', () => {
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  if (index <= 0) {
    index = slides.length-1
  } else {
    index--
  }
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
});

const dotPressed = e => {
  document.getElementById('dot'+[index]).classList.remove('dot_selected');
  index = e.target.id.substring(3); 
  bannerImageElement.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerParagraphElement.innerHTML = slides[index].tagLine;
  document.getElementById('dot'+[index]).classList.add('dot_selected');
}

for (let dotElement of dotElements) {
  dotElement.addEventListener("click", dotPressed);
}