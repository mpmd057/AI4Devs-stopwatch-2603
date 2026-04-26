# Rol

Actúa como un desarrollador frontend experto en HTML, CSS y JavaScript vanilla, con alta precisión visual para replicar interfaces desde una imagen de referencia.

# Objetivo

Debes desarrollar una página web de un Stopwatch / cronómetro usando únicamente los archivos de semilla suministrados:

- `stopwatch.png`: imagen de referencia visual.
- `index.html`: archivo HTML base que debes modificar.
- `script.js`: archivo JavaScript base que debes modificar.

La entrega final debe consistir únicamente en el código actualizado de:

- `index.html`
- `script.js`

No generes archivos adicionales.

# Requisito visual principal

La página web debe verse lo más exactamente posible a la imagen `stopwatch.png`.

La imagen muestra:

1. Fondo general blanco.
2. Un contenedor superior grande para el display del cronómetro.
3. El display tiene:
   - Fondo azul muy claro / lavanda claro.
   - Borde negro/gris oscuro grueso.
   - Bordes redondeados.
   - Texto negro muy grande.
   - Formato principal: `00:08:00`
   - Debajo, alineado hacia la zona derecha inferior del display, aparece `000` en tamaño mucho menor, representando milisegundos.
4. Debajo del display hay dos botones grandes:
   - Botón izquierdo verde brillante con texto `Start`.
   - Botón derecho rojo brillante con texto `Clear`.
   - Ambos tienen borde oscuro grueso, esquinas redondeadas y texto negro grande.
5. La distribución debe ser horizontal:
   - Display centrado arriba y ocupando casi todo el ancho.
   - Botones debajo, separados entre sí, uno a la izquierda y otro a la derecha.
6. El diseño debe mantenerse proporcionado en pantallas grandes, similar a la imagen de referencia.

# Medidas y estilo aproximado

Usa CSS dentro de `index.html` si el archivo semilla no tiene CSS externo.

El layout debe aproximarse a estas proporciones:

- `body`:
  - Fondo blanco.
  - Sin scroll innecesario.
  - Fuente sans-serif.
  - Centrado visual.
- Contenedor principal:
  - Ancho aproximado: 90% a 94% del viewport.
  - Margen superior amplio.
- Display:
  - Alto aproximado: 180px a 200px en desktop.
  - Fondo: `#e8ebff` o similar.
  - Borde: 8px a 10px sólido `#2b2b2b`.
  - Border-radius: 40px a 50px.
  - Display flex o grid para centrar el tiempo.
  - Texto principal:
    - Tamaño muy grande, aproximadamente 150px a 180px en desktop.
    - Peso: bold o 800/900.
    - Color negro.
    - Line-height ajustado.
  - Milisegundos:
    - Tamaño aproximado: 40px a 48px.
    - Color negro.
    - Ubicado debajo del tiempo principal, hacia el lado derecho.
- Botones:
  - Ancho aproximado: 34% a 36% del viewport.
  - Alto aproximado: 120px a 140px.
  - Borde: 8px sólido `#2b2b2b`.
  - Border-radius: 20px a 25px.
  - Texto:
    - Tamaño aproximado: 70px a 90px.
    - Color negro.
    - Fuente sans-serif.
  - Botón Start:
    - Fondo verde brillante: `#00f000` o similar.
  - Botón Clear:
    - Fondo rojo brillante: `#ff1008` o similar.
- Separación:
  - Entre display y botones: alrededor de 60px.
  - Los botones deben estar en una fila con espacio amplio entre ellos.

# Comportamiento funcional

Implementa el cronómetro en `script.js`.

Debe cumplir:

1. Al cargar la página, el display debe iniciar en:
   - Principal: `00:00:00`
   - Milisegundos: `000`

2. El botón `Start`:
   - Inicia el cronómetro.
   - Al iniciar, cambia su texto a `Stop`.
   - Si se presiona cuando está corriendo, detiene/pausa el cronómetro.
   - Al detenerse, cambia su texto nuevamente a `Start`.

3. El botón `Clear`:
   - Detiene el cronómetro si está corriendo.
   - Reinicia el tiempo a `00:00:00` y `000`.
   - Cambia el botón principal nuevamente a `Start`.

4. Formato del tiempo:
   - El texto grande debe mostrar `MM:SS:CC`, donde:
     - `MM` = minutos, dos dígitos.
     - `SS` = segundos, dos dígitos.
     - `CC` = centésimas de segundo, dos dígitos.
   - El texto pequeño debe mostrar `MMM`, milisegundos, tres dígitos.
   - Ejemplo visual:
     - `00:08:00`
     - `000`

5. Usa `setInterval`, `performance.now()` o `Date.now()` de forma correcta para evitar acumulación excesiva de error.
6. Evita múltiples intervalos activos al presionar Start varias veces.
7. El código debe ser simple, claro y bien estructurado.

# Restricciones técnicas

- Usa solo HTML, CSS y JavaScript vanilla.
- No uses frameworks.
- No uses librerías externas.
- No uses imágenes como fondo para simular el cronómetro.
- No uses canvas.
- No uses SVG salvo que sea estrictamente necesario, pero preferiblemente no.
- La interfaz debe construirse con HTML y CSS.
- Mantén la estructura compatible con los archivos semilla entregados.
- No cambies los nombres de archivo finales:
  - `index.html`
  - `script.js`

# IDs o selectores requeridos

Asegúrate de que el HTML tenga elementos fáciles de controlar desde JavaScript, por ejemplo:

- `id="timeDisplay"` para el tiempo principal.
- `id="millisecondsDisplay"` para los milisegundos.
- `id="startStopButton"` para el botón Start/Stop.
- `id="clearButton"` para el botón Clear.

Puedes usar otros nombres si el archivo semilla ya trae nombres definidos, pero el resultado debe ser consistente entre HTML y JavaScript.

# Responsividad

El diseño debe mantener la apariencia de la imagen en desktop.

Además:

- En pantallas pequeñas, reduce tamaños de fuente y botones con `clamp()` o media queries.
- Los botones pueden mantenerse en fila si caben.
- Si la pantalla es muy estrecha, pueden apilarse verticalmente, pero en desktop deben verse como en la imagen.

# Criterios de aceptación

El resultado será considerado correcto si:

1. Al abrir `index.html`, el cronómetro se ve visualmente muy parecido a `stopwatch.png`.
2. El display superior tiene el mismo estilo general: fondo lavanda claro, borde oscuro grueso, esquinas redondeadas, números negros grandes.
3. Los botones son grandes, verdes/rojos, con borde oscuro y texto negro.
4. Start inicia y pausa correctamente.
5. Clear reinicia correctamente.
6. El cronómetro muestra minutos, segundos, centésimas y milisegundos.
7. No hay errores en consola.
8. Todo funciona sin dependencias externas.

# Salida esperada

Entrega únicamente el contenido final de los dos archivos:

## index.html

```html
<!-- código completo aquí -->
 ```

## script.js
```
// código completo aquí
```