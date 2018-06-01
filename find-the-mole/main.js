$(document).ready(function() {
    $('.start').on('click', startGame);
    gameTime()
});

var gameOverTrigger = 0;
var startGameTrigger = 0;

var score = $('.scoreNumber').text();
var resetButton = $('#reset');


function startGame() {
    if (gameOverTrigger === 0 && startGameTrigger === 0) {
        randomMoleSelector();
    }
}


function randomMoleSelector() {
    var randomMoleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var ranMoleCount = 0; ranMoleCount < 9; ranMoleCount++) {
        var randomMoleNum = randomMoleArray[Math.floor((Math.random() * randomMoleArray.length))];
        var moleIndex = randomMoleArray.indexOf(randomMoleNum);
        randomMoleArray.splice(moleIndex, 1);
        var randomMoleName = "pennyWise" + randomMoleNum;
        var moleAppearTime = randomMoleTimer();
        showMole(randomMoleName, moleAppearTime);
    }
};

function randomMoleTimer() {
    var moleAppearTime = Math.floor((Math.random() * 10) + 5);
    moleAppearTime = moleAppearTime * 100;
    return moleAppearTime;
}

function showMole(moleName, moleTime) {
    console.log(moleName + " " + moleTime);

}

function gameTime() {
    setTimeout(stayTime, 5000);
}

function stayTime() {
    //after time out all board can not click

    $('.container').off("click");
    console.log('game finish');

    finishModel();
}

