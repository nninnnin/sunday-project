
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    stickyNav();
    scrollFunction();
    };

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;
/*  
    도대체 offsetTop이 뭐야?
    먼저 여기에서 offset 상쇄, 그런 뜻이 아니라
    -> the amount or distance by which something is out of line!
    그러니까 무언가에서 떨어진 거리, 를 의미한다.

    The offsetTop property returns the top position (in pixels) relative to the top of the offsetParent element.
*/


function stickyNav(){
    if(window.pageYOffset >= sticky){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky');
    }
}


function scrollFunction() {/*for top button*/
    if(window.innerWidth>600){
        document.getElementById("topBtn").style.display="none";
    }
    else if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
