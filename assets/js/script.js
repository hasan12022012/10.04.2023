"use strict";

let img = document.getElementById('img');

let slides=['assets/img/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg','assets/img/DSC00052_6_crop-1x1.webp','assets/img/vlnfyfepz8vl53up7aif.jpg'];

let count=0;

function slider(){
    if(count<slides.length){
        count=count+1;
    }
    else{
        count=1;
    }
    console.log(img);
    img.innerHTML = `<img src="${slides[count-1]}">`;
   
}
setInterval(slider,1500);
