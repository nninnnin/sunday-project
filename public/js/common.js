// 홈버튼 누르면 fade out
const nav_items = Array.from(document.querySelector('nav').children);
nav_items.forEach((nav_item)=>{
    nav_item.addEventListener('click',(e)=>{
        document.body.classList.add('fade-out');
    });
});

// hamburger menu pop-up
const bars = document.getElementById('hamburger');
const popup = document.getElementById('pop-up');
bars.addEventListener('click',(e)=>{
    e.preventDefault();
    if(popup.classList[0]==='appear'){
        popup.classList.remove('appear');
    }else{
        popup.classList.add('appear');
    }
});


// get a picture from instagram
// Server side rendering으로 바꾸는 게 나을듯(사용자 경험상), ejs template에서 미리 만들어서 클라이언트로 보낼 수 있게 refactoring 할 것
async function getPicture(imgId){
    const res = await fetch(`https://www.instagram.com/p/${imgId}/media`);
    console.log(res);
    const data = await res.blob();
    console.log(data);
    
    //const insta = document.getElementById('instagram-embed');
    //insta.innerHTML = data.html;
    const img1 = document.getElementById('img1');

    const objectURL = URL.createObjectURL(data);
    img1.src = objectURL;
};

/* 페이지에 따라 다른 instagram picture fetching */
if(window.location.pathname==="/index.html" || window.location.pathname === '/'){
    const imgId = 'B8tCX49plkG';
    getPicture(imgId);
}


// show up the homeBtn
function popUpHomeBtn(){
    if(window.innerWidth<=600 && (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)){
        console.log('popup!');
        homeBtn.classList.add('appear');
    }else{
        homeBtn.classList.remove('appear');
    }
}


// get the top of the page
const homeBtn = document.getElementById('home');
homeBtn.addEventListener('click', ()=>{
    console.log('clicked!');
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.onscroll = ()=>{
    console.log('scrolllll');
    popUpHomeBtn();
}

// // like spa with ajax
// async function goDiary(e){
//     e.preventDefault();
//     const mainSection = document.querySelector('.contents');
    

//     /* fetching data */
//     const response = await fetch('../../data/test');
//     const data = await response.text();

//     mainSection.classList.remove('contents');
//     mainSection.innerHTML=data;
//     console.log(data);
// }
// const diaryLink = document.getElementById('diary');
// diaryLink.addEventListener('click',goDiary);