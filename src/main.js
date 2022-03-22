
var clocks = [];
var t = document.getElementById("clock")
let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
updateTime();
function startClock(){
    setInterval(updateTime, 1000)
}

function updateTime(){
    let hours = 0;
    let min = 0;
    let seconds = 0;
    let currentTime = new Date();
    hours = currentTime.getHours();
    min = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

    let h_angle = hours * 30 + (min/60 * 30);
    let m_angle = min * 6;
    let s_angle =min * 360 +  seconds * 6;
    
    h.style.transform = "rotate("+h_angle+"deg)";
    m.style.transform = "rotate("+m_angle+"deg)";
    s.style.transform = "rotate("+s_angle+"deg)";
}
startClock();