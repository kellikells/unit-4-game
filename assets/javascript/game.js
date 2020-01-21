
$(document).ready(function(){

//======should be GLOBAL VARIABLES========

var goalNumber;
var userScore = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;

// counters for wins & losses overall
var wins = 0;
var losses = 0;

//=============FUNCTIONS==============

// --start the game: --
function pickValuesForGoalAndEachCrystal() {
    goalNumber = Math.floor(Math.random() * 101 + 19); //set value to the goalNumber

    crystal1 = Math.floor(Math.random() * 11 + 1);  // set values to each crystal
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);

    $("#goalNumber").text(goalNumber);
    $("#totalScore").text(userScore);

    // update counters 
    $("#wins").text(wins);
    $("#losses").text(losses);
}

// ----restartGame:-----
function restartGame() {
    goalNumber = Math.floor(Math.random() * 101 + 19); //set value to the goalNumber

    crystal1 = Math.floor(Math.random() * 11 + 1);  // set values to each crystal
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);

    $("#goalNumber").text(goalNumber);
    // $("#totalScore").text(userScore);
    userScore = 0;
    $("#totalScore").text(userScore);
}


// ----conditionals: -------
function conditionals() {
    if (goalNumber === userScore) {
        wins++;
        $("#wins").text(wins);
        restartGame();    //need to create a function to restart the game
        } else if (goalNumber < userScore) {
            losses++;
            $("$losses").text(losses);
            restartGame();
        } //no ELSE because that just means you keep playing 
}

//=========== START GAME ON "CLICK"==========================

pickValuesForGoalAndEachCrystal();

then apply click functions for each crystal
update userScore by adding crystal value to userScore
apply conditional
$("")


})