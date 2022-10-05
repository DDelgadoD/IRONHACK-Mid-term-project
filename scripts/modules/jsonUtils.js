// Función que nos trae el JSON
const loadJson = async(url) =>{
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

// Función que carga el Json en la página 
export function getJson(url, debug= 0) {
  // se hace la llamada a la carga del Json en onload  
  window.addEventListener("load", async () => {
    const Datos = await loadJson(url);
    if(debug) console.log(Datos);
  });
}


export function onPage(selectorClase, arraySelectores, jsonPosts){
  const nodosARellenar =  document.getElementsByClassName(selectorClase);
  console.log(nodosARellenar)
  nodosARellenar.map((e) =>{
      let i = 0;
      let seccion = 0;
      for (select in arraySelectores){
        div.getElementsByClassName(select) = jsonPosts[i][seccion]
        sección +=1;
      }
      i += 1
  })
}

