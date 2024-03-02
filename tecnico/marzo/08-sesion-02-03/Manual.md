Sintaxis de escritura y formato básicos

Encabezados:

Para crear títulos, añade entre uno y seis almohadillas # antes del texto del título. El número de almohadillas determinará el nivel de jerarquía y el tamaño del título.

# Un título de primer nivel
## Un título de segundo nivel
### Un título de tercer nivel

Captura de pantalla de GitHub Markdown que muestra ejemplos de títulos h1, h2 y h3, disminuyendo en tamaño y peso para indicar la jerarquía.

Al utilizar dos o más títulos, GitHub automáticamente genera una tabla de contenido que puedes acceder haciendo clic en el icono de tabla de contenido en el encabezado del archivo. Todos los títulos aparecen en la tabla de contenido y puedes hacer clic en uno para ir a la sección correspondiente.

Captura de pantalla de un archivo README en el repositorio de GitHub Docs con el menú desplegable de la tabla de contenido expuesto. El icono de la tabla de contenido aparece en naranja oscuro.

Estilos de texto
Puedes destacar texto usando negrita, cursiva, tachado, subíndice o superíndice en comentarios y archivos .md.

Estilo | Sintaxis | Atajos de teclado | Ejemplo | Resultado
--- | --- | --- | --- | ---
Negrita | ** ** o __ __ | Command+B (Mac) o Ctrl+B (Windows/Linux) | **Este es texto en negrita** | Este es texto en negrita
Cursiva | * * o _ _ | Command+I (Mac) o CtrI+ (Windows/Linux) | _Este texto está en cursiva_ | Este texto está en cursiva
Tachado | ~~ ~~ | Ninguno | ~~Este texto estaba equivocado~~ | Este texto estaba equivocado
Cursiva y negrita anidadas | ** ** y _ _ | Ninguno | **Este texto es _extremadamente_ importante** | Este texto es extremadamente importante
Todo en negrita y cursiva | *** *** | Ninguno | ***Todo este texto es importante*** | Todo este texto es importante
Subíndice | <sub> </sub> | Ninguno | Esto es un <sub>subíndice</sub> | Esto es un subíndice
Superíndice | <sup> </sup> | Ninguno | Esto es un <sup>superíndice</sup> | Esto es un superíndice

Texto entre comillas
Puedes citar texto usando el símbolo >.

Texto que no es una cita

> Texto que es una cita

El texto citado tendrá sangría y un color de texto diferente.

Captura de pantalla de GitHub Markdown que muestra un ejemplo de texto citado. La cita tiene sangría con una línea vertical a la izquierda y el texto es gris oscuro en lugar de negro.

Código de cita
Puedes indicar código o comandos usando comillas simples. El texto dentro de las comillas simples no se formateará.

Usa `git status` para listar todos los archivos nuevos o modificados que aún no se han confirmado.

Captura de pantalla de GitHub Markdown que muestra cómo se ven los caracteres rodeados por acentos graves. Las palabras "git status" aparecen en una fuente de ancho fijo, resaltadas en gris claro.

Para formatear código o texto en su propio bloque, usa comillas triples.

Algunos comandos básicos de Git son:
```
git status
git add
git commit
```

Captura de pantalla de GitHub Markdown que muestra un bloque de código. Las palabras "git status", "git add" y "git commit" aparecen en una fuente de ancho fijo, resaltadas en gris claro.

Para obtener más información, consulta "Creación y resaltado de bloques de código".

Si editas fragmentos de código y tablas con frecuencia, puedes beneficiarte al habilitar una fuente de ancho fijo en todos los campos de comentarios de GitHub. Para obtener más información, consulta "Acerca de escribir y dar formato en GitHub".

Modelos de color compatibles
En problemas, solicitudes de extracción y debates, puedes llamar a colores usando comillas simples. Un modelo de color compatible mostrará una visualización del color.

El color de fondo es `#ffffff` para el modo claro y `#000000` para el modo oscuro.

Captura de pantalla de GitHub Markdown que muestra cómo los valores HEX dentro de los acentos graves crean pequeños círculos de color. #ffffff muestra un círculo blanco y #000000 muestra un círculo negro.

Estos son los modelos de color actualmente admitidos.

Color | Sintaxis | Ejemplo | Resultados
--- | --- | --- | ---
HEX | \`#RRGGBB\` | \`#0969DA\` | Captura de pantalla de GitHub Markdown que muestra cómo aparece el valor HEX #0969DA con un círculo azul.
RGB | \`rgb(R,G,B)\` | \`rgb(9, 105, 218)\` | Captura de pantalla de GitHub Markdown que muestra cómo aparece el valor RGB 9, 105, 218 con un círculo azul.
HSL | \`hsl(H,S,L)\` | \`hsl(212, 92%, 45%)\` | Captura de pantalla de GitHub Markdown que muestra cómo aparece el valor HSL 212, 92 %, 45 % con un círculo azul.

Notas:
- Un modelo de color admitido no puede tener espacios iniciales o finales dentro de las comillas simples.
- La visualización del color solo se admite en problemas, solicitudes de extracción y debates.

Enlaces
Puedes crear un enlace en línea escribiendo el texto entre corchetes [] y la URL entre paréntesis (). También puedes usar Command+K para crear un enlace. Cuando tengas texto seleccionado, puedes pegar una URL del portapapeles para crear automáticamente un enlace.

Este sitio fue construido usando [GitHub Pages](https://pages.github.com/).

Captura de pantalla de GitHub Markdown que muestra cómo el texto entre corchetes, "GitHub Pages", aparece como un hipervínculo azul.

Nota: GitHub crea automáticamente enlaces cuando escribes direcciones URL válidas en un comentario.

Enlaces de sección
Puedes vincularte directamente a una sección en un archivo representado pasando el ratón por encima del encabezado de la sección para mostrar .

Captura de pantalla de un archivo README en un repositorio. A la izquierda de un encabezado de sección, se resalta un icono de vínculo en naranja oscuro.

Vínculos relativos
Puedes definir enlaces relativos y rutas de imagen en los archivos representados para ayudar a los lectores a navegar a otros archivos de tu repositorio.

Un enlace relativo es un enlace relativo al archivo actual


![Img])(img/1.jpg)
