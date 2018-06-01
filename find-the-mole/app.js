$(document).ready(gameTime)
var score = $('.scoreNumber').text();
var resetButton = $('#reset');

function gameTime() {
    setTimeout(stayTime, 5000);
}

function stayTime() {
    //after time out all board can not click

    $('.container').off("click");
    console.log('game finish');

    finishModel();
}



resetButton.on("click", function () {
    reset();
});
function reset() {
    score = 0; 
    $('.scoreNumber').text(score);

    $('.container').on('click', '.card', card_clicked);
    $('.reveal').removeClass('reveal');
}//end reset()


//need add modal css and insert a pic for modal

function finishModel() {
        $('#modelShadow').css('display', 'block');
        setTimeout(function() {
            $('#modelShadow').css('display', 'none');
        } ,4000);
}