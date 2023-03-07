var myImg = document.getElementById("img-id");


var images = ["img/book1.png","img/book2.png","img/book3.png","img/book4.png"];

var i = 0;


function imageSlider(){
  
  myImg.setAttribute("src",images[i]);

if(i==images.length-1){
  
         i =0;
   }
   
  else{
    
        i++;
   }
      
  setTimeout(imageSlider,3000);
  
}

imageSlider();





