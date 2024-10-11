# Slider de Imágenes Responsivo

Este proyecto implementa un slider de imágenes responsivo utilizando HTML, CSS y JavaScript. El slider muestra imágenes en tres filas que se desplazan automáticamente, creando un efecto visual atractivo y dinámico.

## Características

- Diseño responsivo que se adapta a diferentes tamaños de pantalla
- Tres filas de imágenes con desplazamiento automático
- Animaciones suaves y continuas
- Distribución aleatoria de imágenes
- Optimizado para rendimiento

## Estructura del Proyecto

El proyecto consta de tres archivos principales:

1. `index.html`: Estructura básica de la página
2. `styles.css`: Estilos y animaciones del slider
3. `script.js`: Lógica de JavaScript para la funcionalidad del slider

### HTML (index.html)

El archivo HTML define la estructura básica de la página y los contenedores para las filas del slider.

### CSS (styles.css)

El archivo CSS contiene los estilos para:
- Diseño responsivo del slider
- Animaciones de desplazamiento
- Ajustes para diferentes tamaños de pantalla

### JavaScript (script.js)

El script de JavaScript se encarga de:
- Generar y distribuir aleatoriamente las imágenes
- Ajustar el diseño en función del tamaño de la pantalla
- Manejar la responsividad del slider

## Cómo Usar

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de tener las imágenes en la carpeta `img/` con el formato `image{}.jpg`, donde {} es un número del 1 al 15.
3. Abre el archivo `index.html` en un navegador web moderno.

## Personalización

- Para cambiar el número de imágenes, modifica el atributo `data-image-count` en los elementos `.slider-row` en el HTML.
- Ajusta las velocidades de animación modificando los valores de `animation` en el CSS.
- Personaliza los estilos (colores, tamaños, etc.) en el archivo CSS según tus preferencias.

## Compatibilidad

Este slider es compatible con navegadores web modernos y está optimizado para dispositivos móviles y de escritorio.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o realiza un pull request para sugerir cambios o mejoras.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
