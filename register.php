<?php
// Conexi�n a la base de datos (ajusta los datos)
$servername = "https://rx580-oficial.github.io/";
$username = "Leon";
$password = "Franyel2011$";
$dbname = "RX580";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexi�n fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);
    $confirm_password = $_POST["confirm_password"];
    $terms = isset($_POST["terms"]) ? 1 : 0;
    $newsletter = isset($_POST["newsletter"]) ? 1 : 0;
    $profile_image = "Perfil/default.jpg"; // Ruta a la imagen predeterminada (AJUSTA LA RUTA)

    // Validaci�n (manten las validaciones que ya ten�as)
    if (empty($username)) {
        echo "El nombre de usuario es obligatorio.";
        exit;
    }

    if (empty($email)) {
        echo "El correo electr�nico es obligatorio.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "El correo electr�nico no es v�lido.";
        exit;
    }

    if ($_POST["password"] != $confirm_password) {
        echo "Las contrase�as no coinciden.";
        exit;
    }

    // Procesamiento de la imagen
    if (isset($_FILES["profile_image"]) && $_FILES["profile_image"]["error"] == 0) {
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($_FILES["profile_image"]["name"]);
        $uploadOk = 1;
        $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

        $check = getimagesize($_FILES["profile_image"]["tmp_name"]);
        if ($check !== false) {
            $uploadOk = 1;
        } else {
            echo "El archivo no es una imagen.";
            $uploadOk = 0;
        }

        if ($_FILES["profile_image"]["size"] > 500000) {
            echo "Lo siento, el archivo es demasiado grande.";
            $uploadOk = 0;
        }

        if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
            echo "Lo siento, solo se permiten archivos JPG, PNG, JPEG y GIF.";
            $uploadOk = 0;
        }

        if ($uploadOk == 0) {
            echo "Lo siento, tu archivo no pudo ser subido.";
        } else {
            if (move_uploaded_file($_FILES["profile_image"]["tmp_name"], $target_file)) {
                $profile_image = $target_file;
            } else {
                echo "Lo siento, hubo un error al subir tu archivo.";
            }
        }
    }

    // Insertar datos en la base de datos
    $sql = "INSERT INTO usuarios (username, email, password, terms, newsletter, profile_image) 
            VALUES ('$username', '$email', '$password', $terms, $newsletter, '$profile_image')";

    if ($conn->query($sql) === TRUE) {
        // Guardar datos en archivo .txt
        $file = fopen("usuarios.txt", "a"); // "a" para a�adir al archivo
        $txt = "$username|$email|$password|$profile_image\n"; // Formato: campo1|campo2|...
        fwrite($file, $txt);
        fclose($file);

        // Redirigir al usuario a index.html (CORRECCI�N IMPORTANTE)
        header("Location: index.html");  // Ruta relativa desde register.php
        exit(); // Detener la ejecuci�n del script despu�s de la redirecci�n
    } else {
        echo "Error al registrar: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>