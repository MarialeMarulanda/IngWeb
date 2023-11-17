<?php
//------Este archivo es el backend de login.php :)
//------Verifica que el usuario esté en la DB

include 'conexion_be.php';

$usuario = $_POST['usuario'];
$password = $_POST['password'];

// Para mejorar la seguridad, puedes usar consultas preparadas en lugar de insertar directamente los valores en la consulta SQL.
$consulta = "SELECT * FROM usuarios WHERE NombreUsuario = ? AND Password = ?";

if ($stmt = mysqli_prepare($conexion, $consulta)) {
    mysqli_stmt_bind_param($stmt, "ss", $usuario, $password);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    if (mysqli_stmt_num_rows($stmt) > 0) {
        // Las credenciales son correctas, redirige al usuario a la página de inicio.
        header("location: ../Inicio.php");
    } else {
        // Las credenciales son incorrectas, muestra un mensaje de error y redirige al formulario de inicio de sesión.
        echo '<script>alert("Usuario o contraseña incorrectos"); window.location="../login.php";</script>';
    }

    mysqli_stmt_close($stmt);
} else {
    // Manejo de errores si la consulta preparada falla.
    echo 'Error en la consulta SQL.';
}

// Cierra la conexión a la base de datos si es necesario.
mysqli_close($conexion);
?>



