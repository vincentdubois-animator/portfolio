const clickableImages = document.querySelectorAll('.clickableImage');
const overlay = document.getElementById('overlay');
const enlargedImage = document.getElementById('enlargedImage');

// Ajouter un event listener à chaque image cliquable
clickableImages.forEach(image => {
    image.addEventListener('click', () => {
        enlargedImage.src = image.src;
        overlay.style.display = 'flex';
    });
});

// Cacher l'overlay quand on clique dessus
overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
});

