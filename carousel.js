//define my track
const track = document.querySelector('.carousel__track');
console.log(track);

// define my slides
const slides = Array.from(track.children);
console.log(slides);

const nextButton = document.querySelector('.carousel__button--right');

// click left, move slides left
const prevButton = document.querySelector('.carousel__button--left');

// click nav indicators move to the active slide
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

//get the size of the slides object
const slideWidth = slides[0].getBoundingClientRect().width;
// console.log(slideSize);


// arrange the slides next to one another

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

//click right, move slides right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    // console.log(currentSlide.nextElementSibling);
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to the next slide
    track.style.transfrom = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
})

