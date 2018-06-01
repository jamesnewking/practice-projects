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
// #modelShadow {
//     position: fixed;
//     left: 0;
//     top: 0;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0,0,0,.5);
//     display: none;
//     z-index: 100;
//   }

//   #modelBody {
//     position: fixed;
//     left: 72%;
//     top: 80%;
//     width:50%;
//     min-width: 50%;
//     min-height: 50%;
//     background-image: url(images/xx.gif);
//     background-repeat: no-repeat;
//     transform: translate(-50%, -50%);

//   }
function finishModel() {
        $('#modelShadow').css('display', 'block');
        setTimeout(function() {
            $('#modelShadow').css('display', 'none');
        } ,4000);
}