const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");

const buttons = {};

buttons.thiccBrush = document.querySelector("#thiccBrush");
buttons.brush = document.querySelector("#brush");


let startDrawing = false;
let lineWidth = 5;

canvas.addEventListener('onclick',function(e){
    startDrawing = true;
    
});

canvas.addEventListener('onmouseup',function(e){
    console.log("Mouse up fired in canvas.");
    
});


canvas.addEventListener('mousemove',function(e){
    
    
    if(e.buttons != 1){startDrawing= false; return }

    
    let x = e.clientX-canvas.offsetLeft;
    let y = e.clientY-canvas.offsetTop;    
    console.log("X="+x+"  Y="+y);
    draw(x,y,startDrawing,15,'#ff0000');
    
});


//draw();

function draw(x,y,started,lineWidth,color){
    
    if(canvas.getContext){

        
        pen.strokeStyle = color;
        pen.lineWidth = lineWidth;
        

        if(!startDrawing){
            startDrawing = true;
            pen.beginPath()
            pen.moveTo(x,y);
            return;
        }
        pen.lineTo(x, y);
        pen.stroke();
       
    }
}