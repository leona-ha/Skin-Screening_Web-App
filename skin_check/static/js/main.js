

async function loadModel() {
	console.log("model loading..")
	// loader = document.getElementById("progress-box")
	// loader.style.display = "block"
	modelCombined = await tf.loadLayersModel('http://127.0.0.1:5000/static/model/model.json')
	// loader.style.display = "none"
	console.log("model loaded..")
}

async function upload() {
	console.log("Uploading")
	document.getElementById("predict-box").style.display = "none"
	document.getElementById("prediction").style.display = "none"
	document.getElementById("output-row").style.display = "";
	document.getElementById("test-image-box").style.display = "block";
    renderImage(document.getElementById("select-file-image").files[0]);
}

function renderImage(file) {
  var reader = new FileReader();
  reader.onload = function(event) {
    img_url = event.target.result;
    document.getElementById("test-image").src = img_url;
  }
  reader.readAsDataURL(file);
}

function startLoader() {
	const loader = document.getElementById("progress-prediction")
	loader.style.display = "block"
	console.log(loader)
}

async function predict() {
	console.log("start prediting")


	const gender = document.getElementById("gender").value
	const age = document.getElementById("age").value

	if (gender === "" || age === "") {
		alert("Please select gender and age")
		return
	}
	if (modelCombined == undefined) {
		alert("Please wait until the model is loaded")
		return
	}
	if (document.getElementById("test-image-box").style.display == "none") {
		alert("Please select an image first")
		return
	}



	const scaledAge = Math.round(age/85 * 100) / 100
	console.log(scaledAge)
	let image  = document.getElementById("test-image")
	let tensorImg = preprocessImage(image)
	let tensorDem = tf.tensor2d([scaledAge, gender], [1,2])

	let predictions = await modelCombined.predict([tensorImg, tensorDem]).data()
	let results = Array.from(predictions)
		.map(function (p, i) {
			return {
				probability: (p*100).toFixed(2),
				className: IMAGENET_CLASSES[i]
			};
		}).sort(function (a, b) {
			return b.probability - a.probability
		}).slice(0, 5)

	document.getElementById("predict-box").style.display = "block";
	document.getElementById("prediction").style.display = "";
	document.getElementById("prediction").innerHTML = "Prediction: <b>" + results[0].className + "</b> " + results[0].probability + "%"

	var ul = document.getElementById("predict-list");
	ul.innerHTML = "";
	results.forEach(function (p) {
		var li = document.createElement("LI");
		li.innerHTML = p.className + " " + p.probability + "%";
		ul.appendChild(li);
	});
	console.log("prediction done")
	document.getElementById("progress-prediction").style.display = "none"
}

function preprocessImage(image) {
	let tensor = tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat()
	let offset = tf.scalar(127.5)
	return tensor.sub(offset).div(offset).expandDims()
}
