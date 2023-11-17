<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <title>Login</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <form action="ArchivosPHP/Login_be.php" method = "POST">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Usuario" name="usuario" required />
          <img src="./imagenes/Usuario.png" height="25" />
        </div>
        <div class="input-box">
          <input type="password" placeholder="Contraseña" name="password" required />
          <img src="./imagenes/Password.jpg" height="25" />
          
        </div>
        <div class="remember-forgot">
          <a href="#">Olvidé contraseña</a>
        </div>
        <center><button type="submit" class="btn">Entrar</button></center>
        <div class="register">
          <center>
            <p>No tengo una cuenta <a href="#">¿Cómo tener una?</a></p>
          </center>
        </div>
      </form>
    </div>
  </body>
</html>
