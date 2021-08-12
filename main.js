noseX=0;
noseY=0;

function preload() {
  clown_nose = loadImage('https://i.postimg.cc/W4czRmsm/3641-sticker-of-clown-nose.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }

    function modelLoaded() {
        console.log('poseNet Is Initialized');
    }

    function gotPoses(results)
    {
       if(results.lenght > 0)
        {
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x = " + noseX);
            console.log("nose y = " + noseY);
        }
    }

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
}

function take_snapshot() {
    save('myFilterImage.png');
}

