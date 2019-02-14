function Vai(){
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
var ris="";
var j=0;
	for (var i=0;i<2;i++)
	{
		for(j=0;j<2;j++)
		{
	 ris= ris + " " + myObj[i][j].name + " " + myObj[i][j].age + " " + myObj[i][j].city + "<br> ";
		}
	}
	document.getElementById("demo").innerHTML=ris;
  }
};
xmlhttp.open("GET", "server.php", true);
xmlhttp.send();
}
