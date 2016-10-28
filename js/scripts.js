var numbers = [];
var userInput;
for (var i = 1; i <= userInput; i++) {
  numbers.push(i);
}
var result = numbers.map(function(number){
	if (number % 3 === 0 && number % 5 === 0) {
  	return number = "ping-pong"
  } else if (number % 3 === 0) {
  	return number = "Ping";
  } else if (number % 5 === 0) {
  	return number = "Pong";
  } else {
  	return number;
  }
});


$(document).ready(function(){
  $("#blanks").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#user").val());
    console.log("numbers");
  });
});
