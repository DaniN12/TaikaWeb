// Function to hide the movies
function hideMovies() {
    var containers = document.getElementsByClassName('container');

    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'none';
    }

    document.getElementById('hideButton').style.display = 'none';
    document.getElementById('showButton').style.display = 'inline-block';

    // Show the tables
    document.getElementById('moviesTable1').style.display = 'table';
    document.getElementById('moviesTable2').style.display = 'table';
}

// Function to show the movies
function showMovies() {
    var containers = document.getElementsByClassName('container');

    for (var i = 0; i < containers.length; i++) {
        containers[i].style.display = 'block';
    }

    document.getElementById('hideButton').style.display = 'inline-block';
    document.getElementById('showButton').style.display = 'none';

    // Hide the tables
    document.getElementById('moviesTable1').style.display = 'none';
    document.getElementById('moviesTable2').style.display = 'none';
}

// Hide the "Show Movies" button initially
document.getElementById('showButton').style.display = 'none';

// Event listeners for the hide and show buttons
document.getElementById('hideButton').addEventListener('click', hideMovies);
document.getElementById('showButton').addEventListener('click', showMovies);

// Obt�n una referencia al bot�n "Hide Movies"
var hideButton = document.getElementById("hideButton");

// Agrega un evento click al bot�n "Hide Movies" solo una vez
hideButton.addEventListener("click", function () {
    // Oculta las pel�culas
    var films = document.getElementsByClassName("container");
    for (var i = 0; i < films.length; i++) {
        films[i].style.display = "none";
    }

    // Cargar el archivo XML
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../XML/FilmsAwards.xml", false);
    xmlhttp.send();
    var xmlDocument = xmlhttp.responseXML;

    // Verificar si las tablas ya existen y eliminarlas si es necesario
    var existingTable1 = document.getElementById("moviesTable1");
    var existingTable2 = document.getElementById("moviesTable2");

    if (existingTable1) {
        existingTable1.parentNode.removeChild(existingTable1);
    }
    if (existingTable2) {
        existingTable2.parentNode.removeChild(existingTable2);
    }

    // Crea la tabla "moviesTable1" utilizando XSLT
    var moviesTable1 = document.createElement("table");
    moviesTable1.setAttribute("id", "moviesTable1");

    // Cargar el archivo XSLT "AwardsFilms1.xsl" y aplicarlo al XML
    var xmlhttp2 = new XMLHttpRequest();
    xmlhttp2.open("GET", "../XSLT/FilmsAwards1.xsl", false);
    xmlhttp2.send();
    var xsltProcessor1 = new XSLTProcessor();
    xsltProcessor1.importStylesheet(xmlhttp2.responseXML);
    var transformedXML1 = xsltProcessor1.transformToFragment(xmlDocument, document);
    moviesTable1.appendChild(transformedXML1);

    // Crea la tabla "moviesTable2" utilizando XSLT
    var moviesTable2 = document.createElement("table");
    moviesTable2.setAttribute("id", "moviesTable2");

    // Cargar el archivo XSLT "AwardsFilms2.xsl" y aplicarlo al XML
    var xmlhttp3 = new XMLHttpRequest();
    xmlhttp3.open("GET", "../XSLT/FilmsAwards2.xsl", false);
    xmlhttp3.send();
    var xsltProcessor2 = new XSLTProcessor();
    xsltProcessor2.importStylesheet(xmlhttp3.responseXML);
    var transformedXML2 = xsltProcessor2.transformToFragment(xmlDocument, document);
    moviesTable2.appendChild(transformedXML2);

    // Agrega las tablas "moviesTable1" y "moviesTable2" al contenedor "moviesContainer"
    var moviesContainer = document.getElementById("moviesContainer");
    moviesContainer.appendChild(moviesTable1);
    moviesContainer.appendChild(moviesTable2);

    // Mostrar las tablas y ocultar el bot�n "Show Movies"
    document.getElementById('moviesTable1').style.display = 'table';
    document.getElementById('moviesTable2').style.display = 'table';
    document.getElementById('showButton').style.display = 'inline-block';
});
