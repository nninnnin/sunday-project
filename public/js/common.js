// // like spa with ajax
// async function goDiary(e){
//     e.preventDefault();
//     const mainSection = document.querySelector('.contents');
    

//     /* fetching data */
//     const response = await fetch('diary');
//     const data = await response.text();

//     mainSection.classList.remove('contents');
//     mainSection.innerHTML=data;
//     console.log(data);
// }
// const diaryLink = document.getElementById('diary');
// diaryLink.addEventListener('click',goDiary);


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
async function getPicture(){
    const res = await fetch('https://www.instagram.com/p/B8tCX49plkG/media');
    console.log(res);
    const data = await res.blob();
    console.log(data);
    
    //const insta = document.getElementById('instagram-embed');
    //insta.innerHTML = data.html;
    const img1 = document.getElementById('img1');

    const objectURL = URL.createObjectURL(data);
    img1.src = objectURL;
    
};

/* index 페이지인 경우에만 instagram picture fetching */
if(window.location.pathname==='/'){
   getPicture(); 
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