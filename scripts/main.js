(function(element){
   var fImageGallery = element;
   var size = 28;
   fImageGallery.style.position = "relative";
   fImageGallery.style.width = "340px";
   fImageGallery.style.height = "210px";
   fImageGallery.style.backgroundColor = "red";
   fImageGallery.style.boxShadow = "inset 0px 0px 4px black";
   fImageGallery.style.borderRadius = "0px";

   var w210h210 = document.createElement("div");
   w210h210.style.position = "absolute";
   w210h210.style.top = "0px";
   w210h210.style.left = "0px";
   w210h210.style.width = "calc(21px * " + size + ")";
   w210h210.style.height = "calc(21px * " + size + ")";
   w210h210.style.backgroundColor = "blue";
   w210h210.style.backgroundImage = "url('http://s6.favim.com/orig/65/clothes-fashion-girl-short-Favim.com-603939.jpg')";
   w210h210.style.backgroundRepeat = "no-repeat";
   w210h210.style.backgroundSize = "auto 100%";
   fImageGallery.appendChild(w210h210);

   var w130h130 = document.createElement("div");
   w130h130.style.position = "absolute";
   w130h130.style.top = "0px";
   w130h130.style.left = "calc(21px * " + size + ")";
   w130h130.style.width = "calc(13px * " + size + ")";
   w130h130.style.height = "calc(13px * " + size + ")";
   w130h130.style.backgroundColor = "green";
   w130h130.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/736x/22/f1/4f/22f14f5f515d6aca60bd198730e92235.jpg')";
   w130h130.style.backgroundRepeat = "no-repeat";
   w130h130.style.backgroundSize = "auto 100%";
   fImageGallery.appendChild(w130h130);

   var w80h80 = document.createElement("div");
   w80h80.style.position = "absolute";
   w80h80.style.top = "calc(13px * " + size + ")";
   w80h80.style.left = "calc(26px * " + size + ")";
   w80h80.style.width = "calc(8px * " + size + ")";
   w80h80.style.height = "calc(8px * " + size + ")";
   w80h80.style.backgroundColor = "yellow";
   w80h80.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/c7/50/9f/c7509f3ebd39a9d5a59eb9275c48e790.jpg')";
   w80h80.style.backgroundRepeat = "no-repeat";
   w80h80.style.backgroundSize = "auto 100%";
   fImageGallery.appendChild(w80h80);

   var w50h50 = document.createElement("div");
   w50h50.style.position = "absolute";
   w50h50.style.top = "calc(16px * " + size + ")";
   w50h50.style.left = "calc(21px * " + size + ")";
   w50h50.style.width = "calc(5px * " + size + ")";
   w50h50.style.height = "calc(5px * " + size + ")";
   w50h50.style.backgroundColor = "#673AB7";
   fImageGallery.appendChild(w50h50);

   var w30h30 = document.createElement("div");
   w30h30.style.position = "absolute";
   w30h30.style.top = "calc(13px * " + size + ")";
   w30h30.style.left = "calc(21px * " + size + ")";
   w30h30.style.width = "calc(3px * " + size + ")";
   w30h30.style.height = "calc(3px * " + size + ")";
   w30h30.style.backgroundColor = "#670AB0";
   fImageGallery.appendChild(w30h30);

   var w20h20 = document.createElement("div");
   w20h20.style.position = "absolute";
   w20h20.style.top = "calc(13px * " + size + ")";
   w20h20.style.left = "calc(24px * " + size + ")";
   w20h20.style.width = "calc(2px * " + size + ")";
   w20h20.style.height = "calc(2px * " + size + ")";
   w20h20.style.backgroundColor = "#67AABA";
   fImageGallery.appendChild(w20h20);

   var w10h10 = document.createElement("div");
   w10h10.style.position = "absolute";
   w10h10.style.top = "calc(15px * " + size + ")";
   w10h10.style.left = "calc(25px * " + size + ")";
   w10h10.style.width = "calc(1px * " + size + ")";
   w10h10.style.height = "calc(1px * " + size + ")";
   w10h10.style.backgroundColor = "#A7AABA";
   fImageGallery.appendChild(w10h10);

})(document.querySelector("#fImageGallery"));