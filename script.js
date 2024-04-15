const menuIcon= document.getElementById("menu-icon");
const sideNav= document.getElementById("side-nav");
const bodyPosition= document.getElementById("body-position");



let menuVisible = false;

function toggleMenu() {
    if (!menuVisible) {
        sideNav.style.display = "block";
        menuIcon.style.opacity = "0.5";
        //bodyPosition.style.position = "fixed";
        menuVisible = true;
    } else {
        menuIcon.style.opacity = "initial";
        sideNav.style.display = "none";
        //bodyPosition.style.position = "initial";
        menuVisible = false;
    }
}

menuIcon.addEventListener('click', toggleMenu);



    window.addEventListener('resize', function() {
        if (window.innerWidth >= 550) {
           
            //document.body.style.position = "initial";
            sideNav.style.display = "none";
            menuIcon.style.display = "none";

        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth < 550) {
            //document.body.style.position = "initial";
            menuIcon.style.display = "inline-block";
            menuIcon.style.backgroundColor= "initial"
            
        }
    });
