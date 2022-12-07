let slidePosition = 0
let slides = document.getElementsByClassName("st");
const totalSlides = slides.length

document.
    getElementById("st-btn-prev")
    .addEventListener('click', function(){
    moveToPrevSlide();
});
document.
    getElementById("st-btn-next")
    .addEventListener('click', function(){
    moveToNextSlide();
});

function updateSlidePosition(){
    for (let slide of slides) {
        slide.classList.remove("st-visible")
        slide.classList.add("st")
    }

    slides[slidePosition].classList.add("st-visible");

};

function moveToPrevSlide() {
    if (slidePosition === 0){
        slidePosition = totalSlides -1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
};
function moveToNextSlide() {
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
};