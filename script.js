// Función para generar un array de números únicos aleatorios
function generateUniqueRandomNumbers(count, max) {
    const numbers = new Set();
    while(numbers.size < count) {
        numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers);
}

// Función para distribuir imágenes de manera uniforme
function distributeImages(totalImages, rows) {
    const allImages = generateUniqueRandomNumbers(totalImages, totalImages);
    const distribution = [];
    let currentIndex = 0;

    for (let i = 0; i < rows; i++) {
        const rowImages = [];
        for (let j = 0; j < 10; j++) {
            rowImages.push(allImages[currentIndex % totalImages]);
            currentIndex++;
        }
        distribution.push(rowImages);
    }

    return distribution;
}

function createImages(rowElement, images, isReversed) {
    const imagePath = rowElement.dataset.imagePath;
    
    const rowImages = [];

    for (let i = 0; i < images.length * 2; i++) {
        const img = document.createElement('img');
        const imageNumber = images[i % images.length];
        img.src = imagePath.replace('{}', imageNumber);
        img.alt = `Imagen ${imageNumber}`;
        rowImages.push(img);
    }

    if (isReversed) {
        rowImages.reverse();
    }

    rowImages.forEach(img => rowElement.appendChild(img));
}

// Distribuir 15 imágenes entre las 3 filas
const imageDistribution = distributeImages(15, 3);

// Crear imágenes para cada fila
const rows = document.querySelectorAll('.slider-row');
rows.forEach((row, index) => {
    createImages(row, imageDistribution[index], index % 2 !== 0);
});


// Función para ajustar el tamaño de las imágenes y las filas
function adjustLayout() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;
    let imageWidth, rowHeight;

    if (vw <= 480) {
        imageWidth = vw - 20;
    } else if (vw <= 768) {
        imageWidth = vw * 0.5 - 20;
    } else {
        imageWidth = vw * 0.2 - 20;
    }

    const imageHeight = imageWidth * 9 / 16; // Proporción 16:9
    rowHeight = imageHeight + 10; // Altura de la imagen + 10px de separación
    const totalRowsHeight = rowHeight * 3 - 10; // Altura total de las 3 filas (restamos 10px porque no hay separación después de la última fila)
    const topOffset = (vh - totalRowsHeight) / 2; // Centrar verticalmente

    const images = document.querySelectorAll('.slider-row img');
    const rows = document.querySelectorAll('.slider-row');

    images.forEach(img => {
        img.style.width = `${imageWidth}px`;
        img.style.height = `${imageHeight}px`;
    });

    rows.forEach((row, index) => {
        row.style.top = `${topOffset + index * rowHeight}px`;
        if (index % 2 === 1 && vw > 480) {
            row.style.left = vw <= 768 ? `-25vw` : `-${vw * 0.1}px`;
        } else {
            row.style.left = '0';
        }
    });
}

// Ajustar tamaño inicial y en cada cambio de tamaño de ventana
adjustLayout();
window.addEventListener('resize', adjustLayout);