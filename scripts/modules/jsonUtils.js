// Función que nos trae el JSON
const loadJson = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

// Función que carga el Json en la página
export async function getJson(url) {
    const datos = await loadJson(url);
    return datos;
}

// función que coloca en la pagina los valores recogidos desde la API
export function onPage(parent, childs, maxlength, jsonPosts, initialPost) {
    const nodos = document.querySelectorAll(parent);
    [...nodos].map((e) => {
        let i = 2;
        childs.map((child) => {
            let post = Object.values(jsonPosts)[initialPost];
            let postContent = Object.values(post)[i]

            if (postContent.length > maxlength[i - 2]) {
                e.querySelector(child).innerHTML = postContent.slice(0,maxlength[i - 2]);
            } else {
                e.querySelector(child).innerHTML = postContent.repeat(maxlength[i - 2] / postContent.length);
            }

            i += 1;
        });
        initialPost += 1;
    });
}
