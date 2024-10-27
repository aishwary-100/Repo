const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".mySlidesfade");
const cardWidth = 285; 
let currentPosition = 0;


function slideLeft() {
    if (currentPosition > 0) {
        currentPosition -= cardWidth;
        updateSliderPosition();
    }
}

function slideRight() {
    if (currentPosition < (cards.length - 1) * cardWidth) {
        currentPosition += cardWidth;
        updateSliderPosition();
    }
}

function updateSliderPosition() {
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform = `translateX(-${currentPosition}px)`;
}


function openModal(name, position, company, imageSrc) {
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalPosition").innerText = position;
    document.getElementById("modalCompany").innerText = company;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}
