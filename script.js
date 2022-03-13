function burgerMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "") {
      x.className += "responsive";
    } else {
      x.className = "";
    }
}
