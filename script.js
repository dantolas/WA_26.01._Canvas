draw();

function draw(){
    const canvas = document.getElementById("canvas");
    if(canvas.getContext){
        const pen = canvas.getContext("2d");

        pen.beginPath();
        pen.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        pen.moveTo(110, 75);
        pen.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
        pen.moveTo(65, 65);
        pen.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
        pen.moveTo(95, 65);
        pen.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
        pen.stroke();
    }
}