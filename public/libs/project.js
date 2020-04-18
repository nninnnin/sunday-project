const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
// line
ctx.moveTo(10,10);
ctx.lineTo(50,50);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(200,58,20,0,2*Math.PI); // x,y, 반지름, ?, ?
ctx.stroke();
