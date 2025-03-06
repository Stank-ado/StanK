// Lista de imágenes
const imagenes = ["miniatura2.png", "estandarte.png"];
let indice = 0;

function cambiarImagen() {
    // Obtener la imagen
    let img = document.getElementById("imagen");

    // Cambiar al siguiente índice
    indice = (indice + 1) % imagenes.length;

    // Actualizar la imagen
    img.src = imagenes[indice];
}