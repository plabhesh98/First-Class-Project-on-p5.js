function preload() {
}

function setup() {
    canvas = createCanvas(800,600);
    canvas.position(100, 250);
    video = createCapture(VIDEO);
    video.hide();

    filter_color = "";
}

function draw() {
    image(video, 0, 0, 800, 600);
    tint(filter_color);
}

function take_snapshot() {
    save("filtered_image.png");
}

function filter_tint() {
    filter_color = document.getElementById("filter_color").value;
}