
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