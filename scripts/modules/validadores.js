// Una alerta que hace que el prevent se demore una "varvaridad"
function submitted() {
    alert("The form was submitted");
}

// La validación en realidad se hace en el css, esto solo muestra los valores
const validate = (event, campos) => {
    event.preventDefault();
    submitted();
    campos.map((input) => {
        console.log(
            `${document.querySelector(`${input}-label`).innerText}: ${
                document.querySelector(input).value
            }`
        );
        console.log();
    });
};

// Función que añade un listener al formulario
export const addValidator = (formId, campos) => {
    const form = document.querySelector(formId);
    form.addEventListener("submit", (event) => validate(event, campos));
};
