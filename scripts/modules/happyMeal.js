// ¿En la cajita del Happy meal que hay? ¡Pues una hamburguesa! no busquéis el juguete
// porque ahora los [muy cutres] ecológicos los dan de papel que lo sé bien que tengo
// 3 niñas que se siguen peleando por las [mierdas] piezas de cartón

export function burguer() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");

    // Añadimos un listener a los clicks de los nav-burger uso map en vez del forEach
    // que pone bulma porque no sé donde leí (o lo dijo Alberto) que era más eficiente.
    [...navbarBurgers].map((navBurger) => {
        navBurger.addEventListener("click", () => {
            // Una vacilada que se pegan en bulma y que he adaptado es coger el target
            // del elemento nav-burger ¡pufff! (lo dejo por no tocar el html...) pero
            // esto con un getElementById a HappyMeal lo solucionas igual en una línea
            let target = navBurger.dataset.target;
            target = document.getElementById(target);

            // A mi me gusta que cuando se abren los burguer salga la aspa como lo hacen
            // en bulma, en la página de muestra invierten los colores de las tres barras
            navBurger.classList.toggle("is-active");

            // Luego pongo el navbar-burger tambien como activo para que se abra.
            target.classList.toggle("is-active");
        });
    });
}
