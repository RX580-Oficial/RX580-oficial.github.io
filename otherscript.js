// ... (código anterior)

// Función para actualizar la imagen de perfil
function updateProfileImage(imagePath) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = imagePath;
}

// Ejemplo de cómo podrías obtener la ruta de la imagen de perfil (esto dependerá de tu lógica)
let profileImagePath = 'Perfil/Icon.png'; // Reemplaza con tu lógica

// Actualizar la imagen de perfil al cargar la página
updateProfileImage(profileImagePath);

// ... (resto del código)