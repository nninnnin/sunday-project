// 메인페이지는 다 그려지고 보이는게 예쁠 것 같아서
window.onload = ()=>{
    const loader = document.getElementById('loader');
    loader.style = "display:none;";

    const main = document.querySelector('main');
    main.style="display:grid;"
    const footer = document.querySelector('footer');
    footer.style="display:block;"

    main.classList.add('fade-in');
}