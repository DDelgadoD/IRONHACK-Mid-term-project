// Jason nos trae el vellocino de oro con esta función, pero el vellocino ni
// es una piel de oveja ni es de oro, es un texto de relleno en latín...

// Función que nos trae el JSON
// url -> dirección url (no tiene regex): string
export const getJson = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

// función que coloca en la pagina los valores recogidos desde la API
// parent -> nodo padre: string
// childs -> nodos hijos: array[String]
// desiredLength -> la longitud que necesitamos para cada child: array[int]
// jsonPosts -> El JSON que nos trae la API
// initialPost -> Para no poner lo mismo en todos los grupos podemos indicar donde empezar
export function onPage(parent, childs, desiredLength, jsonPosts, initialPost) {
    const nodos = document.querySelectorAll(parent);
    [...nodos].map((e) => {
        let i = 2;
        childs.map((child) => {
            let post = Object.values(jsonPosts)[initialPost];
            let postContent = Object.values(post)[i];
            // A ver señores la Api nos envia texto a su bola así que con nuestro L le vamos
            // a decir que cumpla con lo que necesitamos ya que es un texto de relleno.
            if (postContent.length > desiredLength[i - 2]) {
                e.querySelector(child).innerHTML = postContent.slice(
                    0,
                    desiredLength[i - 2]
                );
            } else {
                e.querySelector(child).innerHTML = postContent.repeat(
                    desiredLength[i - 2] / postContent.length
                );
            }

            i += 1;
        });
        initialPost += 1;
    });
}
