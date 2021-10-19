
function Play()
  {
    var myAudio = document.getElementById("audioval");
    if(myAudio.paused) {
        myAudio.play();
    }
    else {
       myAudio.pause();
    }
  }
