// 1. Selecciona el elemento con id "precio" y guárdalo en una variable llamada `precioElemento`.
const precioElemento = ____.querySelector(____);

// 2. Selecciona el input de cantidad por su id y guárdalo en `cantidadInput`.
const cantidadInput = ____;

// 3. Selecciona el botón de calcular por su id.
const botonCalcular = ____;

// 4. Añade un event listener al botón para escuchar el evento 'click'.
____.addEventListener('click', () => {
    // 5. Obtén el valor numérico del precio base (textContent del span).
    const precioBase = ____(precioElemento.textContent);
    
    // 6. Obtén el valor del input de cantidad (usa .value).
    const cantidad = ____.____;
    
    // 7. Calcula el total (precioBase * cantidad).
    const total = ____ * ____;
    
    // 8. Muestra el resultado en la consola.
    console.log(____);
    
    // 9. Actualiza el texto del elemento con id "resultado" con el mensaje: "Total a pagar: $X".
    document.getElementById(____).textContent = ____;
});