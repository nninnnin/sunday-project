window.onload = () => {
  //이미지 등 로딩 이후 (onload) loader 없애기
  const loader = document.getElementById("loader");
  loader.style = "display:none;";

  // 모든 이미지 등 로딩 이후 main과 footer 보이기
  const main = document.querySelector("main");
  main.style = "display:block;";
};

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext("2d");
// // line
// ctx.moveTo(10,10);
// ctx.lineTo(50,50);
// ctx.stroke();

// // circle
// ctx.beginPath();
// ctx.arc(200,58,20,0,2*Math.PI); // x,y, 반지름, ?, ?
// ctx.stroke();

console.log("project lib 로딩완료");

const trigger = document.getElementById("trigger");
// if (window.innerWidth < 486) {
//   trigger.innerText = "모바일 뷰에서는 볼 수 없습니다 ㅠㅠ";
//   trigger.disabled = true;
// }
