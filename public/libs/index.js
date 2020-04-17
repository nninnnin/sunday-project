window.onload = function(){
    const main = document.querySelector('main');
    main.classList.add('fade-in');
    document.body.style="display:block;"
}


console.log('index')
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = (e)=>{
// readyState 가 4단계로서 통신이 완료된 단계이며
    if(xhr.readyState !== XMLHttpRequest.DONE){
        return
    }   
// status가 200으로 통신이 성공적으로 이루어졌을 때
    if(xhr.status === 200){
        console.log(xhr);
    } else{
        console.log(`통신이 성공적으로 이루어지지 못했네요 status code = ${xhr.status} : ${xhr.statusText}`)
    }
}
xhr.open('GET','/diary');
xhr.send();