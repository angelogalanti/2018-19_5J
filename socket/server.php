	<?php
/*
funzione : explode(separatore, stringa);
$testo = "Max Luca Claudio Paolo";
$arr = explode(" ", $testo);
echo $arr[0] . "<br/>"; // Max
echo $arr[1] . "<br/>"; // Luca
echo $arr[2] . "<br/>"; // Claudio
echo $arr[3] . "<br/>"; // Paolo
*/


/*  
crea un socket 
AF_INET=per la trasmissione in rete IP v.4
SOCK_STREAM=tipo di socket (va bene con TCP)
SOL_TCP=protocollo usato 
*/
$sock=socket_create(AF_INET, SOCK_STREAM, SOL_TCP);


/* collega il socket all'indirizzo IP e alla porta specificata */
socket_bind($sock, "127.0.0.1", 7000);

/* ascolta accettando il numero massimo di connessioni possibile  */
socket_listen($sock, SOMAXCONN);

echo "Ascolto all'indirizzo 127.0.0.1 alla porta 7000\n";

/* ciclo di attesa infinito */
$ciclo=true;
while($ciclo) 
{ 
	echo "Sto ascoltando... \n"; 
	//accetta una connessione e crea un canale di comunicazione 
	$canale = socket_accept($sock); 
	// inizio connessione
	echo "Connesso...\n";
	$ciclo1=TRUE;
	while($ciclo1) {
		$comandoValido = FALSE;
		$x = socket_read($canale, 1024);
		echo "$x\n";
		if ($x == "l") {
			$comandoValido = TRUE;
			socket_write($canale, "Eseguito Comando l");
		}
		if ($x == "d") {
			$comandoValido = TRUE;
			socket_write($canale, "Eseguito Comando d");

		}
		if ($x == "q") {
			$comandoValido = TRUE;
			socket_write($canale, "Eseguito Comando q");
			$x = "";
			socket_close($canale);
				//exit;
			$ciclo1=FALSE;
		}
		if ( $comandoValido == FALSE)
		{
			echo "Comando non valido\n";
			socket_write($canale, "Comando non valido");
		}
	}
}
return 0;						
?>
