<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <title>Registrar_Usuario</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body> 
    <div class="wrapper">
      <form action="ArchivosPHP/Registrar_Usuario_be.php" method = "POST">
        <h1>Registrar Usuario</h1>
        <div class="input-box">
          <input type="text" placeholder="Nombre Completo (Ape1, Aape1, Nom1, Nom2)" name="nombre_completo" required />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Usuario" name="usuario" required />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Contraseña" name="password"required />
        </div>
        <center><button type="submit" class="btn">Registrar</button></center>
        <div class="register">
        </div>
        <br><br>
      </form>
    </div>
  </body>
</html>
