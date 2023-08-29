const brawlerImages = [
    "./public/brawlers/Bibi.png",
    "./public/brawlers/crow.png",
    
    "./public/brawlers/crawler.png",
    "./public/brawlers/Surge.png",
    "./public/brawlers/leon.png",
    "./public/brawlers/sandy.png",
    "./public/brawlers/shelly.png",
    "./public/brawlers/spike.png",
    "./public/brawlers/b2.png",
    "./public/brawlers/Daco.png",
    "./public/brawlers/b3.png",
    "./public/brawlers/b4.png",
    "./public/brawlers/jessy.png"
];

const smallDiv = document.querySelector(".small-img");
const bigImg = document.querySelector(".big-img");

// This variable is used to keep track of which image is currently being displayed.
var i = 0;

// This function is called when the user clicks on a small image. It sets the big image to the image that was clicked on.
const setCurrentImage = (event) => {
    event.preventDefault();
    const index = event.target.dataset.index;
    const image = brawlerImages[index];
    i = index;
    bigImg.src = image;
    bigImg.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 1000,
        fill: "forwards"
    });
}

// This loop creates the small images and adds them to the smallDiv.
// It also adds an event listener to each image so that when the user clicks on it, the setCurrentImage function is called.
brawlerImages.forEach((image, index) => {
    const img = document.createElement("img");
    img.src = image;
    img.draggable = false;
    img.dataset.index = index;
    img.alt = image.split("/")[3].split(".")[0];

    img.addEventListener("click", setCurrentImage);

    smallDiv.appendChild(img);
});

setInterval(() => {
    i++;
    if (i == brawlerImages.length) {
        i = 0;
    }
    bigImg.src = brawlerImages[i];
    bigImg.alt = brawlerImages[i].split("/")[3].split(".")[0];
    
    bigImg.animate([
        { opacity: 0 },
        { opacity: 1 }
    ], {
        duration: 1000,
        fill: "forwards"
    });
}, 3000);

