window.onload=()=>{
    //이미지 등 로딩 이후 (onload) loader 없애기
    const loader = document.getElementById('loader');
    loader.style = "display:none;";
    
    // 모든 이미지 등 로딩 이후 main과 footer 보이기
    const main = document.querySelector('main');
    main.style = "display:block;";
    const footer = document.querySelector('footer');
    footer.style = "display:block;";
}


const writeBtn = document.getElementById('writeButton');

if(writeBtn !== null){
    writeBtn.addEventListener('click',()=>{
        window.location.href = '/diary/write';
    })
}

// 가로스크롤
const dock = document.querySelector('.dock');
const imgs = document.querySelector('.imgs')

dock.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) imgs.scrollLeft += 50;
  else imgs.scrollLeft -= 50;
});


