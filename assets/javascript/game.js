
$(document).ready(function () {

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

    // ----restartGame:-----
    function restartGame() {
        goalNumber = Math.floor(Math.random() * 101 + 19); //set value to the goalNumber

        crystal1 = Math.floor(Math.random() * 11 + 1);  // set values to each crystal
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);

        console.log("the value of crystal1 is " + crystal1);

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


    // --start the game: --
    function initializeGame() {

        //set value to the goalNumber
        goalNumber = Math.floor(Math.random() * 101 + 19);
        
        // set values to each crystal
        crystal1 = Math.floor(Math.random() * 11 + 1);
        crystal2 = Math.floor(Math.random() * 11 + 1);
        crystal3 = Math.floor(Math.random() * 11 + 1);
        crystal4 = Math.floor(Math.random() * 11 + 1);

        $("#goalNumber").text(goalNumber);
        // alert("this is the goalNumber " + goalNumber);

        $("#totalScore").text(userScore);
        // alert("this is the userScore " + userScore);

        // update counters 
        $("#wins").text(wins);
        $("#losses").text(losses);

        // then apply click functions for each crystal
        $("#crystal1").on("click", function () {
            // update userScore by adding crystal value to userScore
            userScore += crystal1;
            console.log(userScore);
            $("#totalScore").text(userScore);

        });

        $("#crystal2").on("click", function () {
            userScore += crystal2;
            console.log(userScore)
            $("#totalScore").text(userScore);

        });

        $("#crystal3").on("click", function () {
            userScore += crystal3;
            $("#totalScore").text(userScore);

        });

        $("#crystal4").on("click", function () {
            userScore += crystal4;
            $("#totalScore").text(userScore);

        });
        console.log( crystal1 + " " + crystal2 + " " + crystal3 + " " + crystal4);
        // conditionals();
    }



    //=========== START GAME ==========================

    initializeGame();








})