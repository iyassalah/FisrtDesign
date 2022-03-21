function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("my-nav").style.background = "#131313";
    // document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("my-nav").style.background = "none";
    // document.getElementById("logo").style.fontSize = "35px";
  }
}