

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     Funzione(this);
    }
  };
  xmlhttp.open("GET", "https://www.gazzetta.it/rss/home.xml", true);
  xmlhttp.send();


function Funzione(xml){
  var x,y,z,a,xmlDoc,txt;
  xmlDoc = xml.responseXML;
  txt = "";
  var descr="";
  var date="";
  var image="";
  //  var image=document.createElement("img");

  x = xmlDoc.getElementsByTagName("title");
  y = xmlDoc.getElementsByTagName("description");
  z = xmlDoc.getElementsByTagName("pubDate");
  image = xmlDoc.getElementsByTagName("enclosure");



  txt += x[0].childNodes[0].nodeValue;
  descr += y[0].childNodes[0].nodeValue;
  date += z[0].childNodes[0].nodeValue;
  image.src= image[0].getElementsByTagName("enclosure")[0];
//  image.src = a[0].getElementsByTagName("enclosure")[0];

   document.getElementById("titolo").innerHTML=txt;
   document.getElementById("descrizione").innerHTML=descr;
   document.getElementById("data").innerHTML=date;

   document.getElementById("box").innerHTML = image+".jpg";
//Non riesco a stampare l'immagine secondo dtack overflow va aggiunta l'estensione del'immagine (jpg) ho provato ma dice Object Undefined




}
