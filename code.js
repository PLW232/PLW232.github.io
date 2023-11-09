function startfun(){
    console.log("startfun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

function stopfun(){
    //log for debugging purposes
    console.log("stopfun() started");
    //turn off stop button
    document.getElementById("stopButton").disabled = true;
    //turn on stop button
    document.getElementById("startButton").disabled = false;
    //stop marquee from moving
    document.getElementById("myMarquee").stop();
}