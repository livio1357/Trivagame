var theClock;

var timer = 90;

function gameTimer() {

	timer -= 1;
	document.getElementById('timer').innerHTML = timer;

	if (timer === 0) {
		clearInterval(theClock);
		
	}
}

//Not Sure why this is not working
//if (timer === 0) {
	//	document.getElementById('numberCorrect').style.display="block";
		//document.getElementById('numberIncorrect').style.display="block";
		//document.getElementById('afterSubmit').style.display="block";


//}

function check() { 
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	var Incorrect = 0;

	if (question1 === "YES") {

		correct++; }


	if(question1 === "NO") {

		Incorrect++;}



	if (question2 === "NO") {

		correct++;

	}

	if (question2 === "YES") { 

		Incorrect++;

	}

	if (question3 === "YES") {

		correct++;

	}

	if (question3 === "NO") {

		Incorrect++;

	}

	if (question4 === "NO") {

		correct++;

	}

	if (question4 === "YES") {

		Incorrect++;

	}

	if (question5 === "NO") {

		correct++;

	}

	if (question5 === "YES") {

		Incorrect++;

	}

	document.getElementById('afterSubmit').style.visibility = "visible";
	document.getElementById('numberCorrect').innerHTML = "You got " + correct + " correct";
	document.getElementById('numberIncorrect').innerHTML = "You got " + Incorrect + " Incorrect";
	
}

function StartGame() {
	document.getElementById("quiz").style.display="block";
	document.getElementById("Gametimer").style.display="block";
	theClock = setInterval(gameTimer, 1000);
}

var start = document.getElementById('start');
start.addEventListener('click', function () {
//	document.getElementById('quiz').style.display = "block";
StartGame()
});

function New() {
	 document.getElementById("NewGame").style.display="block";
	  
}

var newbutton = document.getElementById('resultsButton');
newbutton.addEventListener('click', function () {
	//document.getElementById('quiz').style.display = "block";
	New()
});


$('#NewGame').click(function(){
            $('#quiz')[0].reset();
            location.reload();
 });

