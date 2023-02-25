var timer;
var percent = 0;
var video = document.getElementById("SubjectVideo");
video.addEventListener("playing", function(_event) {
  var duration = _event.target.duration;
  advance(duration, video);
});
video.addEventListener("pause", function(_event) {
  clearTimeout(timer);
});
var advance = function(duration, element) {
  var progressbar = document.getElementById("progressbar");
  increment = 10/duration
  percent = Math.min(increment * element.currentTime * 10, 100);
  progressbar.style.width = percent+'%'
  startTimer(duration, element);
}
var startTimer = function(duration, element){ 
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}