function preload() {
}
function draw() {
image(video, 0, 0, 320, 240);
}
function setup() {
canvas = createCanvas(320, 240);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}
function take_snapshot(){
    save('student_name.png');
}
