<?php
require_once("BDConexion.php");
try{
    $rutaXq = "../XML/XQUERY/ModifyNomination.xq";//Ruta de la xquery
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
    $query->bind('$id', $_GET["id"]);
	$query->bind('$nameAward', $_GET["nameAward"]);
    $query->bind('$idn', $_GET["idn"]);
    $query->bind('$year', $_GET["year"]);
    $query->bind('$work', $_GET["work"]);

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
    exit();
} catch(Exception $e) {

    echo $e->getMessage();

}
?> 





