noseX = 0;
noseY = 0;

function preload() {
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses() {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
    }
}

function draw() {
    image(video, 0, 0, 400, 400);
    fill(255, 0, 0);
    stroke(255, 0, 0); // no need to ask
    circle(noseX, noseY, 20);
}

function take_snapshot() {
    save('My_Filter_Image.png');
}