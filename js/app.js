
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
if (overlay) {
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
} else {
    console.error("L'élément avec l'ID 'overlay' est introuvable.");
}



function openMenu() {
    const menu = document.querySelector(".header-menu");
    menu.classList.toggle("active"); // Alterne la classe 'active'

    if (menu.classList.contains("active")) {
        menu.style.display = "flex"; // Affiche le menu
        document.querySelector("header .material-symbols-outlined").innerHTML = "close";
        closeMenu(); // Appelle closeMenu pour attacher les événements
    } 
    // A priori , le code ci-dessous ne sert pas car on passe jamais dedans 
    // else {
    //     menu.style.display = "none"; // Cache le menu
    //     document.querySelector("header .material-symbols-outlined").innerHTML = "menu";
    // }
}


function closeMenu() {
    // Fermer le menu quand un lien est cliqué
    document.querySelectorAll('.header-menu a').forEach(link => {
        link.addEventListener('click', (event) => {
            const menu = document.querySelector(".header-menu");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                menu.style.display = "none"; // Cache le menu
                document.querySelector("header .material-symbols-outlined").innerHTML = "menu"; // Change l'icône
            }
        });
    });

}

    // // Fermer le menu quand un lien est cliqué
    // document.querySelectorAll('.header-menu a').forEach(link => {
    //     link.addEventListener('click', (event) => {
    //         const menu = document.querySelector(".header-menu");
    //         if (menu.classList.contains("active")) {
    //             menu.classList.remove("active");
    //             menu.style.display = "none"; // Cache le menu
    //             document.querySelector("header .material-symbols-outlined").innerHTML = "menu"; // Change l'icône
    //         }
    //     });
    // });



    const clickableImagesYoutube = document.querySelectorAll('.clickableImageYoutube');
    const overlayYoutube = document.getElementById('overlayYoutube');
    const youtubePlayer = document.getElementById('youtubePlayer');
    
    // Au clic sur une image, afficher la vidéo YouTube correspondante dans l'overlay
    clickableImagesYoutube.forEach(image => {
        image.addEventListener('click', () => {
            const videoUrl = image.getAttribute('data-video-url');
            youtubePlayer.src = videoUrl;
            overlayYoutube.style.display = 'flex';
        });
    });
    
    // Fermer l'overlay lorsqu'on clique dessus
    overlayYoutube.addEventListener('click', () => {
        overlayYoutube.style.display = 'none';
        youtubePlayer.src = ""; // Vider la source de l'iframe pour arrêter la vidéo
    });
    
    