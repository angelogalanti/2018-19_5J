function Vai(){
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
var tot="";
	for (var i=0;i<2;i++)
	{
	 tot= tot + " " + myObj[i].name + " " + myObj[i].age + " " + myObj[i].city;
	}
	document.getElementById("demo").innerHTML=tot;
  }
};
xmlhttp.open("GET", "server.php", true);
xmlhttp.send();
}
