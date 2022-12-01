const prev = document.getElementById('slide-btn_prev'),
      next = document.getElementById('slide-btn_next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot'),
      slidesWrap = document.querySelectorAll('.slider__wrap');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('slide_active');
    }
    slides[n].classList.add('slide_active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('dot_active');
    }
    dots[n].classList.add('dot_active');
}

const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }
};

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }
};

dots.forEach((item,indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);