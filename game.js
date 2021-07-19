var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickPattern = [];
var level = 0;


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber]
    $('#' + randomChosenColor).fadeOut().fadeIn();
    gamePattern.push(randomChosenColor)
    userClickPattern = []
    $('h1').text('Level ' + level)
    level += 1;
    return randomChosenColor;
};

$('.btn').click(function (event) {
    $('#' + event.target.id).fadeOut().fadeIn();
    userClickPattern.push(event.target.id)
    if (userClickPattern.length === gamePattern.length) {
        checkAnswer();
    }
})

$(document).keypress(function (event) {
    if (event.key = 'a' && level === 0) {
        nextSequence()
    }
})

function checkAnswer() {
    if ((userClickPattern.length == gamePattern.length) && userClickPattern.every(function (element, index) {
        return element === gamePattern[index];
    })) {
        console.log('same length')
        setTimeout(function () {
            nextSequence()
        }, 2000)
        // nextSequence();
    }
    else {
        $('h1').text('Lost, press A to start again')
        level = 0;
        gamePattern = []
        userClickPattern = []
    }
}