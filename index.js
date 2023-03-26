var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

var myNav = document.querySelector('#navHome');
window.onscroll = function () { 
    if (window.scrollY >= window.innerHeight-120) {
        myNav.style.backgroundColor = '#313638';
    } 
    else {
        myNav.style.backgroundColor = 'transparent';
    }
};