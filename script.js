<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bugün Ne Pişirsem?</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <img src="https://png.pngtree.com/png-clipart/20230918/original/pngtree-dinner-plateknife-and-fork-vector-icon-fork-equipment-meal-vector-png-image_12359611.png" alt="Bugün Ne Pişirsem? Logo">
        <h1>Bugün Ne Pişirsem?</h1>
        <nav>
            <ul>
                <li><a href="#" onclick="openTurkishMenu()">Türk Mutfağı</a></li>
                <li><a href="#" onclick="openWorldMenu()">Dünya Mutfağı</a></li>
            </ul>
        </nav>
    </header>

    <section id="turkish" class="kategori">
        <div class="container">
            <!-- Türk mutfağına ait tarifler buraya eklenecek -->
        </div>
    </section>

    <!-- Diğer ülke alt kategorileri için bölümler buraya eklenecek -->

    <footer>
        <p>&copy; 2024 Bugün Ne Pişirsem?</p>
    </footer>

    <script>
        function openTurkishMenu() {
            window.location.href = "https://www.yemektekeyifvar.com/turk-mutfagi";
        }

        function openWorldMenu() {
            window.location.href = "https://www.yemektekeyifvar.com/dunya-mutfagi";
        }
// Logo üzerine tıklandığında açılış sayfasına geri dön
document.querySelector("header img").addEventListener("click", function() {
    document.getElementById("turkish").style.display = "none"; // Türk Mutfağı bölümünü gizle
    document.getElementById("world").style.display = "none"; // Dünya Mutfağı bölümünü gizle
    document.body.style.backgroundImage = 'url("background.jpg")'; // Arka plan görselini geri yükle (background.jpg yerine kendi arka plan görselinizin dosya yolunu belirtin)
});

    </script>
</body>

</html>
