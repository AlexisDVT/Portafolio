 function encripta() {
	 	var oracion = document.getElementById("textEncrip").value.toLowerCase();
	 	var textEncrip = oracion.replace(/a/img, "ai")
	 	var textEncrip = textEncrip.replace(/e/img, "enter")
	 	var textEncrip = textEncrip.replace(/i/img, "imes")
	 	var textEncrip = textEncrip.replace(/o/img, "ober")
	 	var textEncrip = textEncrip.replace(/u/img, "ufat")
	 	document.getElementById("textDesencrip").innerHTML=textEncrip;

	 }