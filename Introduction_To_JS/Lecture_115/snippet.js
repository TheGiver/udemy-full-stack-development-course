var maxCharacters = 200;
var userMessage = prompt("Type down your message (Max Characters: " + maxCharacters + ")");
var remainingCharacters = maxCharacters - userMessage.length;
alert("Your message is " + userMessage.length + " characters long. You have " + remainingCharacters + " characters remaining!");