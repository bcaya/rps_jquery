$(document).ready( function() {
var computer_choice;
var results;
var options = ['rock', 'paper', 'scissors'];
var user_label;// jquery stuff
var computer_label;// jqueary stuff
var winner;//jquery stuff I think


$('.choice').click(function(){

  var user_choice = $(this).attr("id");
  
  var computer_choice = 'rock'
  var get_computer = Math.floor(Math.random() * 3);
  switch (get_computer){

  case 1: 
    var computer_choice = 'rock' 
    break;
   case 2:
    var computer_choice = 'paper'
    break;
   case 3: 
    var computer_choice = 'scissors'
    break;
  }
  
  var user_win = 0; 
  var computer_win = 0; 


		if	(user_choice === "rock") {
			if (computer_choice === "rock") {
				computer_win = 0;
				user_win += 0;
        $(".win").html("two rocks dont make a right");

			}
			else if (computer_choice ==="paper") {
				computer_win += 1;
				user_win = 0;
        $(".win").html("Foolish Human.");
			}	
			else {
				computer_win = 0;
				user_win += 1;	
    $(".win").html("1 Point for Human");

			}
		}	
		else if (user_choice === "paper") {
			if (computer_choice === "paper") {
				computer_win = 0;
				user_win += 0;
        console.log("tie")
        $(".win").html("paper stacks on paper. TIE");
			}
			else if (computer_choice ==="scissors") {
				computer_win += 1;
				user_win = 0;
        $(".win").html("Computer Wins!");
				
			}
			else {
				computer_win += 0;
				user_win += 1;
        $(".win").html("<p>Wow. You win.");
			
			}	
		}
		else {
			if (computer_choice === "scissors") {
			
				computer_win += 0;
				user_win += 0;
        $(".win").html("tied");
       
			}
			else if (computer_choice ==="rock") {
				computer_win += 1;
				user_win = 0;
        $(".win").html("Computer Wins!");
			
			}
			else {
				computer_win = 0;
				user_win += 1;
        $(".win").html("User Wins!");
				
			}

		}
   console.log(user_win)
   $('.user_choice').after(user_choice)
    $('.computer_choice').after(computer_choice)

 
})

})