var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
  }
};
// xhttp.open("GET", "gazzetta.xml", true);
xhttp.open("GET", "https://www.gazzetta.it/rss/home.xml", true);
xhttp.send();

function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var item = xmlDoc.getElementsByTagName("item");
  var title = item[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
  var description = item[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
  var pubDate = item[0].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
  var enclosure = item[0].getElementsByTagName("enclosure")[0].getAttribute("url");
  document.getElementById("rss-title").innerHTML = stripHtml(title);
  document.getElementById("rss-description").innerHTML = stripHtml(description);
  document.getElementById("rss-pubDate").innerHTML = stripHtml(pubDate);
  document.getElementById("rss-enclosure").src = enclosure;
}
  
//https://ourcodeworld.com/articles/read/376/how-to-strip-html-from-a-string-extract-only-text-content-in-javascript
function stripHtml(html){
    // Create a new div element
    var temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}
