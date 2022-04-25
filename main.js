nose_x =0;
nose_y =0; 
function preload(){
    mustImg = loadImage("https://i.postimg.cc/dtb6CJz8/istockphoto-485318064-612x612-removebg-preview.png");}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,300,300);
image(mustImg,nose_x - 50,nose_y - 25,100,100);
}
function takeSnapshot() {
    save("filter_image.png");
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);   
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose x cordinate = "+ nose_x);
        console.log("Nose y cordinate = "+ nose_y);
    }
}