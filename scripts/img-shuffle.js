// Categories as arrays that contains the images urls
const catsObject = {
    app : [
        '../images/Cute-desktop-wallpaper.jpeg',
        '../images/Thibaud-Pourplanche.jpeg',
        '../images/landing-1.jpg'
    ],
    photo : [
        '../images/boy.jpeg',
        '../images/Vintage-Desk.jpeg',
        '../images/landing-2.png',
        '../images/Premium Vector _ Spot lights background style.jpeg'
    ],
    web : [
        '../images/Into-the-spider-verse.jpeg',
        '../images/godzilla.jpeg'
    ],
    print : [
        '../images/jack.jpeg',
        '../images/sky.jpeg',
        '../images/landing-5.png'
    ]
};

// All cats category
const allCats = document.getElementById('all-cats');

// Display all the images when clicking the all filter
allCats.addEventListener('click', () => {
    inactivatePrevCat();
    allCats.classList.add('active');
    shuffleBox.innerHTML = '';
    displayAll();
});

// List of the categories filters
const catsList = document.querySelectorAll('.portfolio-shuffle li:not(:first-child)');

// Display the images that belong to the clicked category
catsList.forEach(cat => {
    cat.addEventListener('click', () => {
        inactivatePrevCat();

        // activate the cat filter
        cat.classList.add('active');

        // Clear the shuffle box
        shuffleBox.innerHTML = '';

        // Generate the category
        createImgBoxCat(cat.getAttribute('data-cat'));
    });
});

// The box that will contains all the image boxes
const shuffleBox = document.getElementById('shuffle-box');

// Creates a full box and append it to the given parent
function createImgBox(imgUrl, parent = shuffleBox) {
    // Create the image box
    const box = document.createElement('div');
    box.classList.add('box');

    // Create the image element
    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = 'image';

    // Create the caption element
    const caption = document.createElement('div');
    caption.classList.add('caption');

    // Create the heading
    const heading = document.createElement('h4');
    heading.innerText = 'Awesome image';

    // Create the paragraph
    const paragraph = document.createElement('p');
    paragraph.innerText = 'Photography';

    // Append (add) the h1 and p to the caption
    caption.appendChild(heading);
    caption.appendChild(paragraph);

    // Append img and caption to the box
    box.appendChild(img);
    box.appendChild(caption);

    // Append the box to the parent
    parent.appendChild(box);
}

// Create a whole category
function createImgBoxCat(cat) {
    catsObject[cat].forEach(imgUrl => createImgBox(imgUrl));
}

// Display all the images
function displayAll() {
    // Gets the catsObject keys
    Object.keys(catsObject).forEach(cat => {
        createImgBoxCat(cat);
    });
}
displayAll();

// Erase all the previous activated category
function inactivatePrevCat() {
    catsList.forEach(cat => {
        cat.classList.remove('active');
    });
    allCats.classList.remove('active');
}
