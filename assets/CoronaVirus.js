window.onscroll = function () {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

document.getElementById("who").innerHTML = "World Health Organization";
document.getElementById("who").style = "font-weight:bold";

document.getElementById("date").appendChild = document.write(Date());