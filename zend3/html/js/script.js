	"use strict"

	var wrapper = document.getElementById('wrapper');

	wrapper.style.backgroundColor = "black";

	var container = document.getElementById("container");

	container.style.backgroundColor = "#ffde00";
	container.style.margin = "0 auto";
	container.style.width = "990px";

	var frame = document.getElementById("frame");

	frame.style.width = "100%";
	frame.style.padding = "20px";

	 var list = document.getElementsByTagName('a');

 for( var x=0; x<list.length; x++){
 	list[x].style.color = "black";
 	list[x].style.paddingRight = "10px";
 	list[x].style.textDecoration = "none";
 	list[x].style.marginRight = "10px";
 }


    
    var zend = document.getElementById("img");

    zend.style.width = "100%";
    

   var x = document.getElementById("content");

   x.style.display = "flex";
   x.style.justifyContent = "center";

   var a = document.getElementById("contentleft");

   a.style.width = "50%";
   a.style.padding = "10px 20px"

   var b = document.getElementById("contentright");

   b.style.width = "50%";
   b.style.padding = "10px 20px"

   var z = document.getElementById("foot");

   z.style.backgroundColor = "#2f2f29";
   z.style.marginTop = "10px";
   z.style.color = "#a79418"
   z.style.textAlign = "center";	
		