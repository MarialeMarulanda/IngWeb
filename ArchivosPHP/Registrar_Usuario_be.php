<?php
//-----Este es el backend de Registrar_Usuario.php que conecta la base de datos
//-----con lo que es ingresado en el formulario

    include 'conexion_be.php';

    $NombreCompleto = $_POST['nombre_completo'];
    $NombreUsuario = $_POST['usuario'];
    $Password = $_POST['password'];

//--------Encriptamiento de contraseña----------
    $Password = hash('sha512', $Password);

    $query = "INSERT INTO `usuarios`( `NombreCompleto`, `NombreUsuario`, `Password`) 
           VALUES ('$NombreCompleto','$NombreUsuario','$Password')";

$verificar_nombre = mysqli_query($conexion, "SELECT * FROM usuarios WHERE NombreCompleto='$NombreCompleto' ");

    if(mysqli_num_rows($verificar_nombre)>0){
        echo '
            <script>
                alert("Esta persona ya está registrada, no se guardarán los datos ingresados.");
                window.location="../Registrar_Usuario.php";
            </script>
        ';
        exit();
    }    

$verificar_usuario = mysqli_query($conexion, "SELECT * FROM usuarios WHERE NombreUsuario='$NombreUsuario' ");

    if(mysqli_num_rows($verificar_usuario)>0){
        echo '
            <script>
                alert("Este usuario ya está registrado, intente uno diferente.");
                window.location="../Registrar_Usuario.php";
            </script>
        ';
        exit();
    }

    $ejecutar = mysqli_query($conexion, $query);

    if($ejecutar){
        echo '
            <script>
                alert("Usuario almacenado exitosamente");
                window.location="../Registrar_Usuario.php";
            </script>
        ';
    }else{
        echo '
            <script>
                alert("Intente de nuevo, usuario no almacenado");
                window.location="../Registrar_Usuario.php";
            </script>
        ';
    }
    mysqli_close($conexion);
?>