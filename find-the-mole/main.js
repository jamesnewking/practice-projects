$(document).ready(function() {
    scarySound.play();
    $('h2').on('click',function(){scarySound.play()});
    $('.clownBox').on('click', startGame);
    //gameTime()
});

var gameOverTrigger = 0;
var startGameTrigger = 0;

var score = 100;
var resetButton = $('#reset');
var ouchSound = new Audio('ouch.mp3');
var scarySound = new Audio('clown-laugh.wav');

function startGame() {
    $('.clownBox').off('click');
    if (gameOverTrigger === 0 && startGameTrigger === 0) {
        $('.clownBox').css("background-image","url()");
        setInterval( function(){randomMoleSelector()} , 1000);

        //setTimeout( clearInterval(playShortTime), 15000);
    }
}


function randomMoleSelector() {
    var randomMoleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    for (var ranMoleCount = 0; ranMoleCount < 9; ranMoleCount++) {
        var randomMoleNum = randomMoleArray[Math.floor((Math.random() * randomMoleArray.length))];
        var moleIndex = randomMoleArray.indexOf(randomMoleNum);
        randomMoleArray.splice(moleIndex, 1);
        var randomMoleName = "#id" + randomMoleNum;
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

    setTimeout( function(){hitClown(moleName)} , moleTime);
    setTimeout( function(){$(moleName).removeClass('pennyWise')} , moleTime+1000);

    console.log(moleName + " " + moleTime);

}

function hitClown(moleName){
    $(moleName).addClass('pennyWise');
    $(moleName).on('click',function(){
        $(moleName).off('click');
        score = score +100;
        $('.scoreNumber').text(score);
        ouchSound.play();
    })

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

