function Ciao()
{
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	var i=0;
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
	stg=document.getElementById("stag").value;
	txt="";
	var i=0;
	for(i=0;i<myObj._embedded.episodes.length;i++)
	{
		if(myObj._embedded.episodes[i].season == stg)
		{
			txt += myObj._embedded.episodes[i].name + "<br>";
		}
	}
	
	
	document.getElementById("primo").innerHTML=txt;
  }
  

};

xmlhttp.open("GET",document.getElementById("lista").value + ".json", true);
xmlhttp.send();
}