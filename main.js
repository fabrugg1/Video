video="";

function preload(){
    video = createVideo("video.mp4");
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}

function start(){
    objDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos"
}

function modelLoaded(){
    console.log("Modelo Cargado!!! ")
}

function draw(){
    image(video, 0, 0, 480, 380);
}