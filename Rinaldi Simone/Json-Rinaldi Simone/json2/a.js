function Ciao(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	var i=0;
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
	txt="";
	for(i=0;i<myObj._embedded.episodes.length;i++)
	
	{
		if(myObj._embedded.episodes[i].season==document.getElementById("seas").value)
		{
		txt += myObj._embedded.episodes[i].name + "<br>";
		}
	}
	
	document.getElementById("primo").innerHTML=txt;
  }
  

};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();
}