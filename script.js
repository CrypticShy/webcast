setInterval(() => {
  var d = new Date(),
    h = (d.getHours()<10?'0':'') + d.getHours(),
    m = (d.getMinutes()<10?'0':'') + d.getMinutes();
  document.getElementById("time").innerHTML = h + ':' + m;
}, 1);

setInterval(() => {
if(document.getElementById('title').value == "") {
   document.getElementById('title').value = "Chromecast"
   }
}, 5000);

setInterval(() => {
if(document.getElementById('desc').value == "") {
   document.getElementById('desc').value = "Click the cast icon on your phone to start casting"
   }
}, 5000);

function Ok() {
console.log("ok")
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        if ( document.getElementById('html').style.cursor === 'none') {
   document.getElementById('html').style.cursor = 'default';
        } else {
         document.getElementById('html').style.cursor = 'none';
        }
}  
}