// Present index page after loader
window.onload = function(){
    setTimeout(()=>{
        const main = document.querySelector('main');
        main.classList.add('fade-in');
        const loader = document.getElementById('loader');
        // loader.style = "display:none;";
        document.body.style="display:block;"
    },8000)
}

// window.addEventListener('DOMContentLoaded',()=>{
    
// })