function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}



var slide_index = 1 ; 
 
let slides = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "4.jpg"];   
    displaySlides(slide_index); 
        
    function nextSlide(n) {  
        displaySlides(slide_index += n);  
    }   
    function displaySlides(n) {  
        var i;  
        if (n > slides.length) {
            slide_index = 1
        }  
        if (n < 1) {
            slide_index = slides.length
        }

        $(document).ready(function(){
            $('#slide').attr('src', slides[slide_index]);
        }); 
    }  