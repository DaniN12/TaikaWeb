<?php
require_once("BDConexion.php");
try{
    $rutaXq = "../XML/XQUERY/AddMovie.xq";//Ruta de la xquery
    $fichero = fopen($rutaXq, "r"); // Abrimos el fichero $rutaXq en modo lectura "r"
    $xq = fread($fichero, filesize($rutaXq)); // Leemos el contenido del fichero y lo guardamos en la variable $xq
    fclose($fichero); // Cerramos el fichero
    
    // se crea una nueva sesion
    $session = new Session();    
    // se abre la BD
    $session->execute("open Taika"); // open y el nombre de la base de datos en el servidor BaseX
    // xquery
    $query = $session->query($xq);

	//Datos que recibe del html
	$query->bind('$name', $_GET["name"]);
    $query->bind('$year', $_GET["year"]);
    $query->bind('$imagen', $_GET["imagen"]);
    $query->bind('$links', $_GET["links"]);
    $query->bind('$filmId', $_GET["filmId");

	 // ejecuta el resultado
	 $result = $query->execute();
     // cerrar la query
    $query->close();
   // cerrar sesion
    $session->close();

    // muestra el resultado
    echo $result;

    //Una vez dado de alta te redirije a la pagina del index
    header("Location: http://localhost/WEB/index.html");

} catch(Exception $e) {

    echo $e->getMessage();

}