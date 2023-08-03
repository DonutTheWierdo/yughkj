oof= ["ice cream", "moon", "pencil", "bulb", "glass of water", "candy", "book"];
lol= Math.floor((Math.random()*oof.length)+1);
lmao=  oof[lol];

document.getElementById("ske").innerHTML= "Sketch to be drawn: "+lmao;
timerCounter= 0;
timerCheck="";
drawnSketch= "";
answerHolder="";
score=0;


function setup()
{
    canvas= createCanvas(280, 280);
    canvas.center();
    background("white");
    synth= window.speechSynthesis;
    canvas.mouseReleased(classifyCanvas);
}


function preload()
{
  classifier= ml5.imageClassifier("DoodleNet");
}

function draw()
{
    strokeWeight(13);
stroke(0);

if (mouseIsPressed)
{
    line(pmouseX, pmouseY, mouseX, mouseY);
}
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results)
{
if (error)
{
    console.error(error);
}

console.log(results);
document.getElementById("lab").innerHTML= "Label: "+results[0].label;
document.getElementById("con").innerHTML= "Confidence: "+Math.round(results[0].confidence*100)+"%";

utterThis= new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}
