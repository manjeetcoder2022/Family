
Webcam.set({
    width:340,
    height:240,
    image_formet:"png",
    png_quality:"90",
})

Webcam.attach("#camera")

function capture_image(){
    Webcam.snap(
        function(data_uri){
            document.getElementById("image_div").innerHTML= "<img id='captured_image' src= '" +data_uri +" '>"
        }
    )
}

function check(){
  classifier=  ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/QRfGcbL_y/",modelLoaded)
}
console.log("Ml5 version : " +ml5.version)
function modelLoaded(){
    window.alert("Model Loaded")
}