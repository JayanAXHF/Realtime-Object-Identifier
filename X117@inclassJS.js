function setup() {
    canvas = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pTsgcOLbR/model.json', modelLoaded)
}

function draw() {
    image(video, 0, 0, 300, 300)
    classifier.classify(video, Result)
}

function refresh() {
    window.location = "X117@inclass.html"
}

function modelLoaded() {
    console.log("ghfhgf");
}

function Result(error, results) {
    if (error) {
        console.error()
    } else {
        console.log(results)
        document.getElementById("span_1").innerHTML = results[0].label
        var p = results[0].confidence.toFixed(3) * 100;
        document.getElementById("span_2").innerHTML = p.toFixed(1) + " %"
    }
}