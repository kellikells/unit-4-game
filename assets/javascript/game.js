
// counters for wins & losses ENTIRE GAME
var wins = 0;
var losses = 0;

// for THE round: total gathered from clicking crystals
var userScore;

// connect counter variables to HTML
var winsText = $("#wins");
var lossesText = $("#losses");
var goalNumberText = $("#goal-Number");

// variables for storing values for THE round
var goalNumber = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//=============FUNCTIONS==============

// function to pick new Goal & set crystal values & reset userScore to 0
function initializeGame() {

    //set value to the goalNumber
    goalNumber = Math.floor(Math.random() * 101 + 19);

    // set values to each crystal
    crystal1 = Math.floor(Math.random() * 11 + 1);
    crystal2 = Math.floor(Math.random() * 11 + 1);
    crystal3 = Math.floor(Math.random() * 11 + 1);
    crystal4 = Math.floor(Math.random() * 11 + 1);
}

//functions to add crystal value to userScore
function crystalOneWasClicked() {
    // update userScore by adding crystal value to userScore
    userScore += crystal1;
    console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    $("#totalScore").text(userScore);
}

function crystalTwoWasClicked() {
    // update userScore by adding crystal value to userScore
    userScore += crystal2;
    console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    $("#totalScore").text(userScore);
}

function crystalThreeWasClicked() {
    // update userScore by adding crystal value to userScore
    userScore += crystal3;
    console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    $("#totalScore").text(userScore);
}

function crystalFourWasClicked() {
    // update userScore by adding crystal value to userScore
    userScore += crystal4;
    console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    $("#totalScore").text(userScore);
}

//=========== START GAME ==========================
$(document).ready(function () {

    initializeGame();

    $("#goal-Number").text(goalNumber);
    userScore = 0;
    $("#totalScore").text(userScore);
    console.log("userScore: " + userScore + " goalNumber: " + goalNumber);

    // checking that values are stored to the variables
    console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);

    // ----conditionals: -------
    // user won
    if (goalNumber === userScore) {
        wins++;
        $("#wins").text(wins);
        // set new values to crystals and goalNumber
        initializeGame();

        // user lost
    } else if (goalNumber < userScore) {
        losses++;
        $("$losses").text(losses);
        // set new values to crystals and goalNumber
        initializeGame();
    } //no ELSE because that just means you keep playing 

    // set html content with updated win/loss count
    // winsText.html(wins);
    // lossesText.html(losses);

})





    // // then apply click functions for each crystal
    // $("#crystal1").on("click", function () {
    //     // update userScore by adding crystal value to userScore
    //     userScore += crystal1;
    //     console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    //     $("#totalScore").text(userScore);

    // });

    // $("#crystal2").on("click", function () {
    //     userScore += crystal2;
    //     console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    //     $("#totalScore").text(userScore);

    // });

    // $("#crystal3").on("click", function () {
    //     userScore += crystal3;
    //     console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    //     $("#totalScore").text(userScore);

    // });

    // $("#crystal4").on("click", function () {
    //     userScore += crystal4;
    //     console.log("userScore is: " + userScore + " and goalNumber is: " + goalNumber);
    //     $("#totalScore").text(userScore);

    // });
    // console.log(crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);








// })