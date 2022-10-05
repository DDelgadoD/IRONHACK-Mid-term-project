import { getJson, onPage } from "./modules/jsonUtils.js";

const posts = getJson("https://jsonplaceholder.typicode.com/posts/",1);
onPage("card-content", ["title", "content"], posts)

