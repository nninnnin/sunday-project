const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext("2d");
// line
ctx.moveTo(50,50);
ctx.lineTo(100,100);
ctx.stroke();

// circle
ctx.beginPath();
ctx.arc(200,180,20,0,2*Math.PI); // x,y, 반지름, ?, ?
ctx.stroke();