// below is just a test to ensure that there was no issue linking to html file
// alert("test");

// function winnerTest {
// var winner =document.getElementbyId("cell1").value;
//  if(winner = "x" || "o")	{
//  	alert("You win!");
//  }
// }

//I cant get the x to appear in the box.//


function startGame(){
	document.turn = "x"
	
	setMessage(document.turn + " gets to start");
}

function setMessage(msg){

	document.getElementbyId("message").innerText = msg
}

function nextMove(Square){
	square.innerText = document.turn;
}

