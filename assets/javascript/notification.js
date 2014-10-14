function align(position) {
	document.getElementById("header-title").align = position;
}
function notification(text, emotion)

	var icon;

	switch(emotion) {

		case "positive":
		case "happy": 
		case "success": icon = "success"; break;
		case "attention": icon = "attention"; break;
		case "warning":
		case "failure":
		case "error": icon ="failure"; break;
		case "info":
		case "information": icon ="information"; break;
	}

	document.write("<p class='notification'" + emotion "'>" + <span class="icon " + icon + " float-left"></span> + text "</p>")