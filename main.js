// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// square windows on left building
for (let x = 40; x <= 115; x = x + 23) {
  for (let y = 210; y <= 345; y = y + 23){
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, 11, 11);
  }
}

// horizontal windows on left building

for(let x=20; x<=70; x=x+20){
  for(let y=400; y<=600; y=y+50){
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 50, 20);
  }
}

// windows on right building
for(let x=180; x<=270; x=x+20){
  for(let y=120; y<=600; y=y+45){
  ctx.fillStyle = "white";
  ctx.fillRect(x, y, 10, 50);
  }
}



