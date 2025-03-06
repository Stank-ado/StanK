// Lista de imágenes y sus descripciones
const imagenes = [
    { src: "miniatura2.png", texto: "miniatura del canal que nunca cree" },
    { src: "estandarte.png", texto: "estandarte del canal que nunca cree jejeje" },
    { src: "logo.png", texto: "logo" },

    
];

let indice = 0;

function cambiarImagen() {
    // Obtener la imagen y el texto
    let img = document.getElementById("imagen");
    let descripcion = document.getElementById("descripcion");

    // Cambiar al siguiente índice
    indice = (indice + 1) % imagenes.length;

    // Actualizar la imagen y el texto
    img.src = imagenes[indice].src;
    descripcion.textContent = imagenes[indice].texto;
}
