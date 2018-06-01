$(document).ready(function() {
    $('.start').on('click', startGame);
});

var gameOverTrigger = 0;
var startGameTrigger = 0;
function startGame() {
    if (gameOverTrigger === 0 && startGameTrigger === 0) {
        console.log("Thanos did nothing wrong.")
    }
}