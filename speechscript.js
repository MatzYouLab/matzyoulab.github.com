var recog = new webkitSpeechRecognition();
recog.lang = "ja-JP";
recog.continuous = true;

function start(){
	recog.start();
}
function stop(){
	recog.stop();
}

recog.onsoundstart = function(){
	$("#state").text("start");
};

recog.onnomatch = function(){
	$("#recogText").text("one more");
};

recog.onerror= function(){
    $("#recogText").text("error");
};

recog.onsoundend = function(){
    $("#state").text("stop");
};

recog.onresult = function(event){
    var results = event.results;
    for (var i = event.resultIndex; i<results.length; i++){
        $("#recogText").text(results[i][0].transcript);
	}
};
