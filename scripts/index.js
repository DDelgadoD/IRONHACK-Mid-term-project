import { getJson, onPage } from "./modules/jsonUtils.js";
import { burguer } from "./modules/happyMeal.js";

/* Funciones que se ejecutaran al cargar la página */
burguer();

const posts = await getJson("https://jsonplaceholder.typicode.com/posts/");

onPage(".card-content", [".title", ".content"], [20, 50], posts, 0);
