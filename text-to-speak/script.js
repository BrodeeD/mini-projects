function textSpeak(){
    var text = document.getElementById("txt").value;
    responsiveVoice.speak(text);
}