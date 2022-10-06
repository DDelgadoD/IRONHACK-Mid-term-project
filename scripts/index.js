import { getJson, onPage } from "./modules/jsonUtils.js";

const posts = await getJson("https://jsonplaceholder.typicode.com/posts/");
onPage(".card-content", [".title", ".content"], [20, 50], posts, 0);
