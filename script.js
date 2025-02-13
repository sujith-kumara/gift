document.addEventListener("DOMContentLoaded", function () {
    const carouselContainerTop = document.createElement("div");
    carouselContainerTop.classList.add("carousel-container");
    
    const carouselContainerBottom = document.createElement("div");
    carouselContainerBottom.classList.add("carousel-container");

    for (let i = 1; i <= 29; i++) {
        let imgTop = document.createElement("img");
        imgTop.src = `${i}.jpg`;
        imgTop.alt = `Love Image ${i}`;
        carouselContainerTop.appendChild(imgTop);

        let imgBottom = document.createElement("img");
        imgBottom.src = `${i}.jpg`;
        imgBottom.alt = `Love Image ${i}`;
        carouselContainerBottom.appendChild(imgBottom);
    }

    // Add carousels at top and bottom
    document.body.insertAdjacentElement("afterbegin", carouselContainerTop);
    document.body.insertAdjacentElement("beforeend", carouselContainerBottom);

    // Create Floating Hearts
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.querySelector(".hearts").appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    
    setInterval(createHeart, 500);
});
