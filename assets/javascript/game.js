var counter = 0;
var goal = ;
var numberOptions = [3, 5, 7, 10]
var increment = numberOptions[Math.round(Math.random())];
var gemArray = ["assets/images/green-gem.png","assets/images/blue-gem.png","assets/images/purple-gem.png","assets/images/pink-gem.png"]
var wins = 0;
var losses = 0;

$("#goalNumber").text(goal);


for (var i = 0; i < numberOptions.length; i++) {

    var imageGem = $("<img>");
    
    imageGem.addClass("gem-image");
    
    imageGem.attr("src", gemArray[i]);
    
    imageGem.attr("data-gemvalue", numberOptions[i]);
    
    $("#gems").append(imageGem);
    }
    
$(".gem-image").on("click", function() {

    var gemValue = ($(this).attr("data-gemvalue"));
    gemValue = parseInt(gemValue);

    counter += gemValue;

    alert("New score is: " + counter);

    if (counter === goal) {
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        reset();

        alert("You win!");

    } else if (counter >= goal) {
        losses++;
    	document.getElementById("losses").innerHTML = "Losses: " + losses;
        reset();

        alert("Too high, you lose!");
    }
});