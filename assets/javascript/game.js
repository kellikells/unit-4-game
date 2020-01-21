
$(document).ready(function(){

// -------these should all be global variables--------

var goalNumber;
var userScore = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

// counters for wins & losses overall
var wins = 0;
var losses = 0;

//-------- functions -----------

// start the game: 
function pickValuesForGoalAndEachCrystal() {
    goalNumber = Math.floor(Math.random() * 101 + 19); //set value to the goalNumber

    crystal1 = Math.floor(Math.random() * 11 + 1);  // set values to each crystal
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);

    $("#goalNumber").text(goalNumber);
    $("#totalScore").text(userScore);
}
})