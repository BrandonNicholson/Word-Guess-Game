


var words = ["george Washington", "john adams", "thomas jefferson", "james madison", "james monroe", "john quincy adams", "andrew jackson",
    "martin van buren", "millard fillmore", "abraham lincoln", "ulysses s grant", "theordore roosevelt", "franklin d roosevelt", "woodrow wilson",
    "warren harding", "dwight eisenhower", "john f kennedy", "lyndon johnson", "richard nixon", "gerald ford", "ronald reagan", "george hw bush",
    "bill clinton", "george w bush", "barack obama", "donald trump"]


var quiz = Math.floor(Math.random() * 26);
var answer = words[quiz];
var wordLength = answer.length;
var template = [wordLength];
var win = wordLength;
var letters = answer.split('');
var guessesLeft = 5;
var output = "";
var userLetter = "";
var wins = 0
var loss = 0

var setup = function () {
    for (var i = 0; i < answer.length; i++) {
        template[i] = "__ ";
        output = output + template[i];

        //template creates array for hidden word
    }
    document.getElementById("quiz").innerHTML = output;
    output = "";
}

var mysubmit = function () {
    output = "";
    userLetter = "letter.value";
    document.getElementById('letter').value;

    for (var b = 0; b < answer.length; b++) {
        alert(letters[b]);
        if (userLetter.toUpperCase() == letters[b]) {
            template[b] = userLetter.toUpperCase();
            win--;
        }
        output = output + template[b] + " "
    }
    document.getElementById("quiz").innerHTML = output;
    output = "";
    guessesLeft--;

}
document.getElementById("letter").value; 




    if (win < 1) {
        document.getElementById("won").innerHTML = wins + 1;
    }
    else if (attemptsLeft < 1) {
        document.getElementById("loss").innerHTML = "loss + 1"
    }
    else {
        document.getElementById("guessesleft").innerHTML = attemptsLeft = "guesses left"
    }





window.onload=setup;
   

