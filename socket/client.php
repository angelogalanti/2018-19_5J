<?php
function scrivi_socket($s)
{
	$r=fgets(STDIN); //legge da tastiera la risposta
	$r=trim($r);
	//$r=$r."\n"; // prepara la stringa da inviare
	socket_write($s, $r);
	if(strpos($r,"q")===0)
		exit;
}

function leggi_socket($s)
{
    $x = socket_read($s, 1024); // legge dal socket fino al \n oppure 1024 caratteri
    return $x;
}

//CLIENT.PHP
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP); //crea un socket
socket_connect($sock, "127.0.0.1", 7000); //si connette in locale sulla porta 7000
echo "Mi connetto a 127.0.0.1 alla porta 7000\n";

while(true)
{
	scrivi_socket($sock,0);
	$x = leggi_socket($sock, 1024); // legge dal socket fino al \n oppure 1024 caratteri

    echo "$x\n";
}	

echo "Connessione terminata";
return 0;
?>
