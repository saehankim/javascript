var myDiv = document.getElementById("target");
function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    }
}
function showLocation(location){
    console.log(location)
    myDiv.innerHTML = "(위도: " + location.coords.latitude + ", 경도: "
    + location.coords.longitude + ")"
}

function getGeolocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    }
}
function showGeolocation(position){
var pos = position.coords.latitude + "," + position.coords.lingitude;
var url = "http://maps.googleapis.com/maps/api/staticmap?center="
+ pos + "&zoom=14&size=500x300&sensor=false";
window.open(url);
}

// http://g.co/dev/maps-no-account


function readFile(){
    var files=document.getElementById('input').files;
    console.log(files);
    console.log(files[0].name);
    console.log(files.length);

    var file=files[0]
    var reader=new FileReader()
    reader.readAsText(file,"utf-8")
    console.log(reader);
    reader.onload = function(){
    document.getElementById('result').value = reader.result;
    }
}
function readFile2(){
    var files=document.getElementById('input').files;

    output="";

for(var i=0, f; f= files[i];i++){
    console.log(i, f)
    output += files[0].name + "\n";
    output += f.type + "\n";
    output += f.size + "bytes\n";
    output += f.lastModifiedDate + "\n";
}
document.getElementById('result').value = output;
}