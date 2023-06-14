function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}

function draw(){
    fill(100,0,25);
    circle()
}

function take_snapshot(){
    save('picture.png');
}