const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

imgs[0].style.opacity = opacity;

imgs.forEach(img => 
    img.addEventListener('click', imgClick));

function imgClick(e){
    // reset opacity 
    imgs.forEach(img => (img.style.opacity = 1));
    // change current imag to clicked source
    current.src = e.target.src

    // add fading class
    current.classList.add('fade-in');
    // remove fadeIn class
    setTimeout(() => current.classList.remove('fade-in'), 500);
    // change opacity
    e.target.style.opacity = opacity;
}