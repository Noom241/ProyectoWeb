const images = [
    'images/slide1.jpg',
    'images/slide2.jpg',
    'images/slide3.jpg',
    // Agrega más rutas de imágenes según sea necesario
];

let currentImageIndex = 0;
const imageContainer = document.getElementById('imageContainer');
const animationDuration = 1000; // Duración de la animación en milisegundos
const autoSlideInterval = 5000; // Cambio automático de imagen cada 5 segundos

// Función para animar el cambio de imagen
function animateImageChange() {
    imageContainer.style.transition = `background-image ${animationDuration}ms linear`;
    updateImage();
    setTimeout(() => {
        imageContainer.style.transition = ''; // Restablece la transición
    }, animationDuration);
}

// Función para mostrar la imagen anterior
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    animateImageChange();
}

// Función para mostrar la siguiente imagen
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    animateImageChange();
}

// Función para actualizar la imagen de fondo
function updateImage() {
    imageContainer.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Cambio automático de imagen cada cierto tiempo
setInterval(nextImage, autoSlideInterval);

// Llama a updateImage para mostrar la primera imagen al cargar la página
updateImage();
