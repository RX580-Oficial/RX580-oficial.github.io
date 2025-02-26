// ... (c�digo anterior)

// Funci�n para actualizar la imagen de perfil
function updateProfileImage(imagePath) {
    const profileImage = document.getElementById('profileImage');
    profileImage.src = imagePath;
}

// Ejemplo de c�mo podr�as obtener la ruta de la imagen de perfil (esto depender� de tu l�gica)
let profileImagePath = 'Perfil/Icon.png'; // Reemplaza con tu l�gica

// Actualizar la imagen de perfil al cargar la p�gina
updateProfileImage(profileImagePath);

// ... (resto del c�digo)