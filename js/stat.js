
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var BAR_MAX_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_GAP = 50;


var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
};

window.renderStatistics = function (ctx, names, times) {

    //shadow
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0,0,0,0.7)');
    //main
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    //Header
    ctx.fillStyle = '#000';
    ctx.font="16px 'PT Mono'";

    ctx.textAlign = 'center';
    ctx.fillText('Ура вы победили!', CLOUD_X + (CLOUD_WIDTH / 2 ), CLOUD_Y + GAP + FONT_GAP );
    ctx.fillText('Список результатов:', CLOUD_X + (CLOUD_WIDTH / 2 ), CLOUD_Y + FONT_GAP * 3);

    // Diagram

    var maxTime = getMaxElement(times);

    for (var i = 0; i < names.length; i++) {
        ctx.fillStyle = '#000';
        ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH / 2) + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT);

        if(names[i] == 'Вы') {
            ctx.fillStyle = 'rgb(255,0,0)';
        } else {
            ctx.fillStyle = 'rgb(0,0,'+ Math.floor((Math.random() * 256)) +')';
        }

        ctx.fillRect(CLOUD_X + BAR_GAP + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - GAP - FONT_GAP - ((BAR_MAX_HEIGHT * times[i]) / maxTime), BAR_WIDTH, (BAR_MAX_HEIGHT * times[i]) / maxTime);
        ctx.fillStyle = '#000';
        ctx.fillText(parseInt(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH / 2) + ((BAR_GAP + BAR_WIDTH) * i), CLOUD_HEIGHT - (GAP * 2) - FONT_GAP - ((BAR_MAX_HEIGHT * times[i]) / maxTime));

    }
};
