// Array of background images paths
const bgImages = [
    '../images/landing.jpeg',
    '../images/landing-1.jpg',
    '../images/landing-2.png',
    '../images/landing-3.png',
    '../images/landing-4.png',
    '../images/landing-5.png',
    '../images/landing-6.png'
];

// The index of the last element of the bgImages array
const lastIndex = bgImages.length - 1;

// The starting index
let index = 0;

// The landing section
const landingSection = document.getElementById('landing');

// The left button
const leftBtn = document.getElementById('left-btn');

// The right button
const rightBtn = document.getElementById('right-btn');

// The bullets div
const bulletsParent = document.querySelector('.landing .bullets');

// Generate a bullet for each background image
bgImages.forEach(bgImg => {
    const bullet = document.createElement('span');
    bulletsParent.appendChild(bullet);
});

// Bullets array
const bullets = document.querySelectorAll('.landing .bullets span');
console.log(bullets);

// Activate the first bullet
bullets[0].classList.add('active');

// Decrease the index and change landing background image - activate the current bullet
leftBtn.addEventListener('click', () => {
    decrease(index);
    landingSection.style.backgroundImage = `url(${bgImages[index]})`;
    inactivateAllBullets();
    bullets[index].classList.add('active');
});

// Increase the index and change landing background image - activate the current bullet
rightBtn.addEventListener('click', () => {
    increase(index);
    landingSection.style.backgroundImage = `url(${bgImages[index]})`;
    inactivateAllBullets();
    bullets[index].classList.add('active');
});

// Increase the index until the last index and reset
function increase(i) {
    if(i === lastIndex) index = 0;
    else index++ ;
}

// Decrease the index until the first index and come back to the last one
function decrease(i) {
    if(!i) index = lastIndex;
    else index-- ;
}

// Remove previous (all) active bullets
function inactivateAllBullets() {
    bullets.forEach(bullet => {
        bullet.classList.remove('active');
    });
}
