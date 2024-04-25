
var clock = document.getElementById('clock');
var body = document.getElementById('body');
var darkmode = document.getElementById('darkmode');

function fullscreen(){
    body.requestFullscreen();
}


setInterval(function(){
    var now = new Date();

    var hours = now.getHours();
    var minutes = now.getMinutes();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    clock.innerHTML = hours +":"+ minutes ;
}, 10)