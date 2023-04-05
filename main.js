yeat_flawless="";
yeat_talk="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    yeat_flawless = loadSound("flawless.mp3");
    yeat_talk = loadSound("talk.mp3");
}

function draw(){
    image(video,0,0,600,530);
}