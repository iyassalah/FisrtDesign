function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}

  
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".topnav").css("background" , "#131313");
        }
        else{
            $(".topnav").css("background" , "#333");  	
        }
    })
  })