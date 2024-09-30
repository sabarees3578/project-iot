var servo1input=document.getElementById("servo1input");
var servo1ouput=document.getElementById("servo1out");
var servo2input=document.getElementById("servo2input");
var servo2ouput=document.getElementById("servo2out");
var servo3input=document.getElementById("servo3input");
var servo3ouput=document.getElementById("servo3out");
var status=document.getElementById("status")
servo1ouput.innerHTML=servo1.value;
servo1ouput.innerHTML=servo2.value;
servo1ouput.innerHTML=servo3.value;
var status=document.getElementById("status")
servo1input.oninput =function() {
    servo1ouput.innerHTML=this.value;
}
servo2input.oninput =function() {
    servo2ouput.innerHTML=this.value;
}
servo3input.oninput =function() {
    servo3ouput.innerHTML=this.value;
}
function changestatusopen(){
    var status=document.getElementById("status")
    status.innerHTML="open"
    console.log("open")
}
function changestatusclose(){
    var status=document.getElementById("status")
    status.innerHTML="close"
    console.log("close")
}