function setup() 
{
    video = createCapture(VIDEO);
    video.size = (550, 550);

    canvas = createCanvas(550, 450);
    canvas.position(750, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.lof('PoseNet i sInitialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw() {
    background('#FFC0CB');
}