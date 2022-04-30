const canvas = document.getElementById('jsCanvas');
const context = canvas.getContext('2d');

canvas.height = 400;
canvas.width = 1300;

context.lineWidth = 2.5;
context.strokeStyle = '#2c2c2c';

let painting = false;

function stopPainting() {
    console.log("stop");
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseMove(event) {
    console.log("mousemove");
    x = event.offsetX;
    y = event.offsetY;

    console.log(x, y);
    if (!painting) {
        context.beginPath();
        context.moveTo(x, y);
    } else {
        context.lineTo(x, y);
        context.stroke();
    }
}

function onMouseDown(event) {
    console.log("mousedown");
    painting = true;
}


if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
}