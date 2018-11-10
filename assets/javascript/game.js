var winningNum = 50;

$("#number-to-guess").text(winningNum);

$("#green-gem").on("click", function() {

    counter += 10;

    alert("Your new score is: " + counter);

});

$("#blue-gem").on("click", function() {

    counter += 10;
    
    alert("Your new score is: " + counter);

});

$("#purple-gem").on("click", function() {

    counter += 10;
    
    alert("Your new score is: " + counter);

});

$("#pink-gem").on("click", function() {

    counter += 10;
    
    if (counter === targetNumber) {

        alert("You win!");
    }
});

