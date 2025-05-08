// 1. Selecciona el elemento con id "precio" y guárdalo en una variable llamada `precioElemento`.
const precioElemento = document.querySelector("#precio");

// 2. Selecciona el input de cantidad por su id y guárdalo en `cantidadInput`.
const cantidadInput = document.getElementById("cantidad");

// 3. Selecciona el botón de calcular por su id.
const botonCalcular = document.getElementById("calcular");

// 4. Añade un event listener al botón para escuchar el evento 'click'.
botonCalcular.addEventListener('click', () => {
    // 5. Obtén el valor numérico del precio base (textContent del span).
    const precioBase = parseFloat(precioElemento.textContent);
    
    // 6. Obtén el valor del input de cantidad (usa .value).
    const cantidad = parseInt(cantidadInput.value);
    
    // 7. Calcula el total (precioBase * cantidad).
    const total = precioBase * cantidad;
    
    // 8. Muestra el resultado en la consola.
    console.log(total);
    
    // 9. Actualiza el texto del elemento con id "resultado" con el mensaje: "Total a pagar: $X".
    document.getElementById("resultado").textContent = "Total a pagar: $" + total;
});
