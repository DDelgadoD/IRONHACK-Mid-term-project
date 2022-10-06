import { getJson, onPage } from "./modules/jsonUtils.js";

const posts = await getJson("https://jsonplaceholder.typicode.com/posts/");
onPage(".card-content", [".title", ".content"], [20, 50], posts, 3);
onPage(".text-pro", [".text-pro-1", ".text-pro-2"], [1000, 1000], posts, 1);