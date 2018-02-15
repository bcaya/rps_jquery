$(document).ready( function() {
var user_choice;
var computer_choice;
var results;
var options = ['rock', 'paper', 'scissors'];
var user_label;// jquery stuff
var computer_label;// jqueary stuff
var winner;//jquery stuff I think

$('.choice').on('click', function(){
  var user_choice = this.id
 
  start_game(user_choice)
}
)
  
  

function start_game(user_choice){
  
  console.log(user_choice)
  

}

function print_results() {

}

function compare(){

}



});