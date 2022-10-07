import { burguer } from "./modules/happyMeal.js";
import { addValidator } from "./modules/validadores.js";

/* Funciones que se ejecutaran al cargar la página */

burguer();
addValidator("#c-form", [
    "#form-name",
    "#form-mail",
    "#form-phone",
    "#form-msg",
]);
