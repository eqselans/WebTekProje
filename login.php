<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Emirhan Aksu - Giriş</title>

    <meta name="author" content="Emirhan Aksu" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="shortcut icon" href="/images/sticker.png" type="image/x-icon">


    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins&family=Quicksand&family=Righteous&display=swap"
      rel="stylesheet"
    />

    <link href="https://fonts.cdnfonts.com/css/trt" rel="stylesheet">


    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />

    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
    <link rel="stylesheet" href="login.css" />
  </head>
  <body id="body">

    
    <nav class="navbar navbar-expand-md navbar-dark">
      <div class="container">
          <a href="index.html" class="navbar-brand">
              <img src="/images/sticker.png" alt="logo" width="100" height="100">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsible">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div id="collapsible" class="collapse navbar-collapse">
              <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                      <a href="index.html" class="nav-link">Anasayfa</a>
                    </li>
              </ul>
          </div>

      </div>
  </nav>

  <main class="text-center fs-1 fw-bold shadow mt-5 animate__pulse">

    <?php
        if($_POST["Mail"] == "admin101@gmail.com" && $_POST["password"] == "123"){
            echo "Admin giriş yaptı!";
        }
        else{
            echo "Lütfen geçerli bir e-posta adresi giriniz.";
        }
    ?>


</main>




  <footer class="py-4 text-center text-light mt-auto fixed-bottom">
      <span class="container text-center lead">
        Tüm hakları saklıdır. @2023
      </span>
      <span class="github">
        <a
          href="https://github.com/eqselans"
          class="fab fa-github"
          target="_blank"
        >
        </a>
      </span>
    </footer>


    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
      crossorigin="anonymous"
    ></script>

  </body>
</html>
    