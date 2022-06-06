function preload(){
}

function setup() {
    canvas = createCanvas(540, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);

    stroke(221,160,221);
    fill(221,160,221);

    rect(0, 0, 550, 25);
    rect(0, 375, 550, 25);
    rect(0, 0, 25, 500);
    rect(520, 0, 25, 500);

    stroke(230,230,250);
    fill(230,230,250);

    circle(530, 10, 50);
    circle(10, 10, 50);
    circle(530, 395, 50);
    circle(10, 395, 50);
}

function take_snapshot() {
    save('student_name.png');
}