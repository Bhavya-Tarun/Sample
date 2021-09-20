CheekX = 0;
CheekY = 0;
tint_color = "";
function preload(){
    cheek_tattoo = loadImage('https://i.postimg.cc/KcRqB1mf/flower.png')
}
function setup(){
    canvas = createCanvas(600, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(600, 300);
    video.hide();
    filter_tint();

    tint_color = " ";
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses);
}
function draw(){
    image(video, 0, 0, 500, 500);
    tint(tint_color);
    image(cheek_tattoo, CheekX, CheekY, 20, 20)
}
function take_snapshot(){
  save("filter.png");
}
function filter_tint(){
   tint_color = document.getElementById("color").innerHTML;
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

   
}

function modelLoaded(){
    console.log("poseNet(model)--- initialized");
}

function getPoses(results){
    {
        if(results.length > 0){
            console.log(results);
            CheekX = results[0].pose.leftEye.x;
            CheekY = results[0].pose.leftEye.y-10;
        }
    }
}

function takeSnapshot(){
    save('myfilter.png');
}