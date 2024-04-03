function reemplazarElemento() {
    // Obtener el elemento que queremos reemplazar
    var elemento = document.getElementById("elemento-a-reemplazar");
    
    // Crear un nuevo elemento con el contenido deseado
    var nuevoContenido = document.createElement("p");
    nuevoContenido.textContent = "Este es el nuevo contenido";
    
    // Reemplazar el elemento existente con el nuevo contenido
    elemento.parentNode.replaceChild(nuevoContenido, elemento);
}