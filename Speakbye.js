(function(window) {
	var speakWord = "B-Bye";
	var byeSpeaker = function (name) {
  		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);
