/*Mobile menu*/
const menuToggler = document.querySelector(".header-menu_toggle");
const menu = document.querySelector(".header-menu");

const toggleMenu = (toggler) => {
    toggler.addEventListener("click", () => {
            menu.classList.toggle("hidden");
    })
}

toggleMenu(menuToggler);


/*Swiper settings*/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});

/*Swiper settings*/

