window.addEventListener("load", () =>{
    const loader = document.querySelector(".container");

    const header = document.querySelector("#header");
    const main = document.querySelector("#main");
    const footer = document.querySelector("#footer");

   loader.addEventListener("click", () =>{
        loader.classList.add("container-hidden");
        header.classList.add("hidden");
        main.classList.add("hidden");
        footer.classList.add("hidden");
   })
});


function validarTexto() {
     let inputElement = document.getElementById("inputTexto");
     let mensajeErrorElement = document.getElementById("mensajeError");
 
     // Validar el valor del input (solo texto, sin números ni caracteres especiales)
     let valorInput = inputElement.value;
     if (!/^[a-zA-Z\s]+$/.test(valorInput)) {
         mensajeErrorElement.textContent = "Por favor, ingresa un texto válido (sin números ni caracteres especiales).";
         mensajeErrorElement.style.display = "block"; // Muestra el mensaje de error
         inputElement.classList.add("invalid-input");
     } else {
         mensajeErrorElement.textContent = ""; // Limpiar el mensaje de error si el valor es válido
         mensajeErrorElement.style.display = "none"; // Oculta el mensaje de error
         inputElement.classList.remove("invalid-input");
     }
}
 
 // Agregar evento clic al documento para ocultar el mensaje de error al hacer clic fuera del input
document.addEventListener("click", function(event) {
     let inputElement = document.getElementById("inputTexto");
     let mensajeErrorElement = document.getElementById("mensajeError");
 
     if (event.target !== inputElement) {
         mensajeErrorElement.style.display = "none"; // Oculta el mensaje de error
         inputElement.classList.remove("invalid-input");
     }
 });