declare variable $name external;  
declare variable $year external; 
declare variable $imagen external;  
declare variable $links external;  

declare variable $filmId := generate-id();  (: Generates a unique ID for the movie :)

insert node 
<film id="{$filmId}">
  <name>{$name}</name>  
  <year>{$year}</year>  
  <imagen enlace="{$imagen}"/> 
  <links>{$links}</links>  
</film>

as last into //films 
