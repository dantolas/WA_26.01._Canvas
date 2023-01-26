
//#region <Canvas and context(pen) declaration>
const canvas = document.getElementById("canvas");
const pen = canvas.getContext("2d");
//#endregion

//#region <Save button>
let savedImages = [];
const saveButton = document.querySelector("#save");
saveButton.addEventListener('click',function(e){
    const img    = canvas.toDataURL('image_'+savedImages.length);
    savedImages.push(img);
    savedImages.forEach(element => {
        var img = document.createElement('img');


    });
})

//#endregion
//#region <Clear button>
const button = document.querySelector("#clear");
button.addEventListener('click', function(e){
    console.log("Clear button fired.");
    pen.clearRect(0, 0, canvas.width, canvas.height);
})
//#endregion

//#region <Brush types>


const buttons = document.querySelectorAll(".brushButton");
buttons.forEach(button => {
    
    button.addEventListener('click',function(e){
        console.log(parseInt(button.value));
        brush = parseInt(button.value);
    })

});
//#endregion

//#region <Brush color picker>
const colorPicker = document.querySelector("#colorPicker");

colorPicker.addEventListener('input',function(e){
    console.log("Color changed to:"+colorPicker.value);
    pen.strokeStyle = colorPicker.value;

})
//#endregion

//#region <Brush size picker>
const sizePicker = document.querySelector("#sizePicker");

sizePicker.addEventListener('input',function(e){
    console.log("Brush size changed to:"+sizePicker.value);
    pen.lineWidth = sizePicker.value;
})
//#endregion

//#region <Mouse event listeners>
canvas.addEventListener('onclick',function(e){
    startDrawing = true;
    
});

canvas.addEventListener('onmouseup',function(e){
    console.log("Mouse up fired in canvas.");
    
});

//Needed global variables
let brush = 0;
let startDrawing = false;

canvas.addEventListener('mousemove',function(e){
    
    
    if(e.buttons != 1){startDrawing= false; return }

    
    let x = e.clientX-canvas.offsetLeft;
    let y = e.clientY-canvas.offsetTop;    
    console.log("X="+x+"  Y="+y + "Brush:"+brush);
    if(brush == 0){
        pencilDraw(x,y,startDrawing);
        
        return
    }
    brushDraw(x,y,startDrawing);
  
    
    
});
//#endregion

//<DRAW METHODS>
//#region <Pencil draw method>
function pencilDraw(x,y,started){
    if(canvas.getContext){

        

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
//#endregion

//#region <Brush draw method>
function brushDraw(x,y,started){
    
    if(canvas.getContext){

        

        if(!startDrawing){
            startDrawing = true;
            pen.beginPath()
            pen.moveTo(x,y);
            return;
        }
        pen.arc(x,y,20,false,Math.PI * 2, false);
        
        pen.stroke();
       
    }
}
//#endregion