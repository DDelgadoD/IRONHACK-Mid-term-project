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
export function onPage(parent, childs, maxlenght, jsonPosts, initialPost) {
    const nodos = document.querySelectorAll(parent);
    [...nodos].map((e) => {
        let i = 2;
        
        childs.map((child) => {
            console.log(child)
            let post = Object.values(jsonPosts)[initialPost];
            e.querySelector(child).innerHTML = Object.values(post)[i].slice(
                0,
                maxlenght[i - 2]
            );
            i += 1;
        });
        initialPost += 1;
    });
}