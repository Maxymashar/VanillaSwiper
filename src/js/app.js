const images = document.querySelectorAll(".carousel-images img");
const carouselImagesContainer = document.querySelector(".carousel-images");
const nextButton = document.getElementById("btnNext");
const prevButton = document.getElementById("btnPrev");
let currentImageIndex = 0;

function getImageDisplacement(index) {
    return index * images[index].clientWidth;
}

nextButton.addEventListener("click", () => {
    if (currentImageIndex === images.length - 1) return;
    currentImageIndex += 1;
    carouselImagesContainer.style.transform = `translateX(-${getImageDisplacement(currentImageIndex)}px)`;
});

prevButton.addEventListener("click", () => {
    if (currentImageIndex === 0) return;
    currentImageIndex -= 1;
    carouselImagesContainer.style.transform = `translateX(-${getImageDisplacement(currentImageIndex)}px)`;
});
