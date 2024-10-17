<?php
require_once("BDConexion.php");
try{
    $rutaXq = "../xml/altaVideojuego.xq";//Ruta de la xquery
    $fichero = fopen($rutaXq, "r"); // Abrimos el fichero $rutaXq en modo lectura "r"
    $xq = fread($fichero, filesize($rutaXq)); // Leemos el contenido del fichero y lo guardamos en la variable $xq
    fclose($fichero); // Cerramos el fichero
    
     // se crea una nueva sesion
    $session = new Session();    
    // se abre la BD
    $session->execute("open Games4You_BD"); // open y el nombre de la base de datos en el servidor BaseX
    // xquery
    $query = $session->query($xq);

     //Datos que recibe del html
    $query->bind('$nombre', $_GET["nombre"]);
    $query->bind('$descripcion', $_GET["descripcion"]);
    $query->bind('$precio', $_GET["precio"]);
    $query->bind('$valoracion', $_GET["valoracion"]);
    $query->bind('$lanzamiento', $_GET["lanzamiento"]);
    $query->bind('$codPlataforma', $_GET["codPlataforma"]);
    $query->bind('$codDesarrollador', $_GET["codDesarrollador"]);

    // ejecuta el resultado
    $result = $query->execute();

    $xmlSRT= $session->execute("xquery /");


$xml = new DOMDocument;
$xml->LOADxml($xmlSRT);

$rutaXSLT = "../xml/1Transformacion.xsl";//Ruta de la xquery
$xsl = new DOMDocument;
$xsl->load($rutaXSLT);

$proc = new XSLTProcessor;

$proc->importStyleSheet($xsl);

echo $proc->transformToXML($xml);
    // cerrar la query
    $query->close();
    // cerrar sesion
    $session->close();

    // muestra el resultado
    echo $result;
    //Una vez dado de alta te redirije a la pagina phpDestinoAlta
    header( "Location:phpDestinoAlta.php?resultado=OK" );
} catch(Exception $e) {

    echo $e->getMessage();

}
?> 