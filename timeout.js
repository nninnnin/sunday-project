function timeOut(){
    setInterval(()=>{
        console.log('1초뒤에 출력')
    },1000);
}


// 모듈의 내용을 내보내기 위해 export 객체를 활용한다.
exports.myTimeOut = timeOut;