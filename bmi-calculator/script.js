document.getElementById("btn").addEventListener("click", function() {
	var height_val = document.getElementById('height').value;
	var weight_val = document.getElementById('weight').value;
    var finalWeight = weight_val * .44;
    var finalHeight = height_val * .025;
    var bmio = Math.round((finalWeight / Math.pow(finalHeight, 2)) * 100) / 100;

	document.getElementById("result").innerHTML = "Your BMI is " + bmio;
});