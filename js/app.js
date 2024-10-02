const image = document.querySelector('.clickable-image');
const container = document.querySelector('.container');

image.addEventListener('click', function() {
    if (!document.querySelector('.overlay')) {
        // Créer l'overlay sombre
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        container.appendChild(overlay);

        // Ajouter l'événement pour fermer
        overlay.addEventListener('click', function() {
            image.classList.remove('fullscreen');
            overlay.classList.add('hidden');
            setTimeout(() => {
                container.removeChild(overlay);
            }, 300);  // Délai pour l'animation
        });

        // Agrandir l'image
        image.classList.add('fullscreen');
    }
});