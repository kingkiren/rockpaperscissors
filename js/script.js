// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    var userinput = $("#input").val();
var randomnumber = Math.random();
    var computerOutput;
    
    if(randomnumber>0.67){
        computerOutput="Rock";
    }
    else if(randomnumber>0.34){
        computerOutput="paper";
    }
   else if(randomnumber<0.33){
   computerOutput="scissors";
   }
   
    $("#userChoice").text(userinput);
    $("#computerChoice").text(userInput);
});

$("computerChoice").click(function(){
    var computerChoice 
    
}

// DOCUMENT READY FUNCTION BELOW

