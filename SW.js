let [msec , sec , min , hrs] = [0,0,0,0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click",
() => {
    if(int !== null){
        clearInterval(int);
    }
    int=setInterval(displayTimer , 10);
});

document.getElementById("pause-timer").addEventListener("click",
() => {
    clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click" , 
() => {
    clearInterval(int);
    [msec , sec , min , hrs] = [0,0,0,0];
    timeRef.innerHTML = "00 : 00 : 00 : 000";
});

function displayTimer(){
    msec += 10;
    if(msec === 1000){
        msec = 0;
        sec ++;
        if(sec === 60){
            sec =0;
            min ++;
            if(min === 60){
                min=0;
                hrs++;
            }
        }
    }

    let h = hrs < 10 ? "0" + hrs : hrs;
    let m = min < 10 ? "0" + min : min ;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = msec < 10 ? "00" + msec : msec < 100 ? "0" + msec : msec;

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}