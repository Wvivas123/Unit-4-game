

      //global varibles

      // at load generate random numbers for each crystall this number is not displayed
      var blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
      var greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
      var redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
      var yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;


      console.log(blueCrystal);
      console.log(greenCrystal);
      console.log(redCrystal);
      console.log(yellowCrystal);




      // at load generate random number for challenge
      var randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
      var wins = 0;
      var losses = 0;
      var userScore = 0;









      // at load generate random number for challenge
      $("#randomNumberTag").text(randomNumber);




      // generate varible for wins, losses, and user score


      $("#winTag").text(wins);

      $("#lossTag").text(losses);

      $("#userScoretag").text(userScore);

      //game logic

      //starts the game over









      function startOver(event) {
        if (losses === 5) {

          // RESET ALL VALUES

          randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
          $("#randomNumberTag").text(randomNumber);
          wins = 0;
          $("#winTag").text(wins);
          losses = 0;
          $("#lossTag").text(losses);
          userScore = 0;
          $("#userScoretag").text(userScore);
          alert("You Loose");

        } else if (wins === 5) {
          randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
          $("#randomNumberTag").text(randomNumber);
          wins = 0;
          $("#winTag").text(wins);
          losses = 0;
          $("#lossTag").text(losses);
          userScore = 0;
          $("#userScoretag").text(userScore);

          alert("You Wins");


        } else {
          randomNumber = Math.floor(Math.random() * (120 - 19)) + 19;
          $("#randomNumberTag").text(randomNumber);
          blueCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
          greenCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
          redCrystal = Math.floor(Math.random() * (12 - 1)) + 1;
          yellowCrystal = Math.floor(Math.random() * (12 - 1)) + 1;

          userScore = 0;
        }

      }

        //on click function + if else logic for game



        function gameLogic(event) {







          $("#blueTag").click(function() {
            userScore = userScore + blueCrystal;
            $("#userScoretag").html(userScore);
            if (userScore === randomNumber) {
              wins++;
              $("#winTag").html(wins);
              startOver();

            } else if (userScore > randomNumber) {
              losses++;
              $("#lossTag").text(losses);
              startOver();

            }
          });

          $("#greenTag").click(function() {
            userScore = userScore + greenCrystal;
            $("#userScoretag").html(userScore);
            if (userScore === randomNumber) {
              wins++;
              $("#winTag").html(wins);
              startOver();
            } else if (userScore > randomNumber) {
              losses++;
              $("#lossTag").text(losses);
              startOver();
            }
          });

          $("#redTag").click(function() {
            userScore = userScore + redCrystal;
            $("#userScoretag").html(userScore);
            if (userScore === randomNumber) {
              wins++;
              $("#winTag").html(wins);
              startOver();
            } else if (userScore > randomNumber) {
              losses++;
              $("#lossTag").text(losses);
              startOver();
            }
          });

          $("#yellowTag").click(function() {
            userScore = userScore + yellowCrystal;
            $("#userScoretag").html(userScore);
            if (userScore === randomNumber) {
              wins++;
              $("#winTag").html(wins);
              startOver();
            } else if (userScore > randomNumber) {
              losses++;
              $("#lossTag").text(losses);
              startOver();







            }
          });






        }


        //calls functions

        gameLogic();
        //startOver();









    //at load

    // at load generate random number for challenge
    // at load generate random numbers for each crystall this number is not displayed
    // generate varible for wins, losses, and user score

    //game logic
    // if crystall is clicked increment user score by random number assigned to crystall
    // if  challenge random number = user score increment wins
    // if challenge random number < userscore increment losses
    // if either happens restart game
