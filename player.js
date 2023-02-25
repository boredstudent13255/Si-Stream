    function vidplay() {
       var video = document.getElementById("SubjectAudio");
       var button = document.getElementById("play");
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

    function restart() {
        var video = document.getElementById("SubjectAudio");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("SubjectAudio");
        video.currentTime += value;
    }      
	function hideControls() {
  var x = document.getElementById("controls");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
