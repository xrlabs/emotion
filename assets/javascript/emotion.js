function substitute_emotion(emotion) {

	switch(emotion) {

		case "positive": 	emotion = "positive"; break;
		
		case "happy":		emotion = "positive"; break;
		
		case "success": 	emotion = "positive"; break;

		case "negative": 	emotion = "negative"; break;
		
		case "warning": 	emotion = "negative"; break;
		
		case "failure": 	emotion = "negative"; break;
		
		case "error":   	emotion = "negative"; break;

		case "idiot": 		emotion = "negative"; break;
				
		case "attention": 	emotion = "neutral"; break;

		case "info": 		emotion = "neutral"; break;
		
		case "information": emotion = "neutral"; break;

		default: 			emotion = "neutral"
	}

	return emotion;
}

function substitute_icon(emotion) {

	switch(emotion) {

		case "positive":	icon = "success"; break;
		
		case "happy": 		icon = "success"; break;
		
		case "success": 	icon = "success"; break;
		
		case "warning": 	icon = "attention"; break;
		
		case "failure": 	icon ="failure"; break;
		
		case "error":   	icon ="failure"; break;

		case "idiot": 		icon = "failure"; break;
				
		case "attention": 	icon = "attention"; break;

		case "info": 		icon ="information"; break;
		
		case "information": icon ="information"; break;

		default: 			icon ="information"; break;
	}

	return icon;
}

function notification(text, emotion) {

	var icon = substitute_icon(emotion);
	var emotion = substitute_emotion(emotion);

	document.write("<p class='notification"
					+ " "
					+ emotion
					+ "'>"
					+ "<span class='icon "
					+ icon
					+ " float-left'></span>"
					+ text
					+ "</p>")
}

function notification_onClick(text, emotion) {

	var icon = substitute_icon(emotion);
	var emotion = substitute_emotion(emotion);

	document.all.notifications.innerHTML = ("<p class='notification"
					+ " "
					+ emotion
					+ "'>"
					+ "<span class='icon "
					+ icon
					+ " float-left'></span>"
					+ text
					+ "</p>")
}

function hello (text) {

	alert(text)
}