// for about
window.addEventListener('scroll', () => {
    imageShow();
    serviceShow();
})

function imageShow() {
    let aboutFromLeft = document.querySelector('.from_left');
    let aboutFromRight = document.querySelector('.from_right');
    let height = window.innerHeight;
    let top = aboutFromLeft.getBoundingClientRect().top;
    let reduce = 350;
    if (top < height - reduce) {
        aboutFromLeft.classList.add('jasper');
        aboutFromRight.classList.add('jasper_from_right');
    } else {
        aboutFromLeft.classList.remove('jasper');
        aboutFromRight.classList.remove('jasper_from_right');
    }
}

function serviceShow() {
    
}