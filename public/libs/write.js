console.log('연결됨')

const leftBtn = document.getElementById('leftAlignBtn');
const rightBtn = document.getElementById('rightAlignBtn');
const content = document.getElementById('content');

leftBtn.addEventListener('click',(e)=>{
    rightBtn.classList.remove('clicked');
    content.className = "";

    e.target.classList.add('clicked');
    content.classList.add('left-aligned');
})

rightBtn.addEventListener('click',(e)=>{
    leftBtn.classList.remove('clicked');
    content.className = "";
    
    e.target.classList.add('clicked');
    content.classList.add('right-aligned');
})