$predictInputProspectsRsvp = $('#predict-input-prospects-rsvp');

$predictButton = $('#predictbuttonrsvp');
$predictResetButton = $('#predictresetbuttonrsvp');

$predictButton.click(predict);

$predictResetButton.click(predictReset);

$predictionData = [1,2,1];

$predictRsvpCtx = $("#half-donut-predict-rsvp");
$predictRsvpAccuracyCtx = $("#half-donut-predict-rsvp-accuracy");


var myChart = new Chart($predictRsvpCtx, {
    type: 'doughnut',
    data: {
        labels: ["Lower boundary", "Central prediction", "Upper boundary",],
        datasets: [{
            label: 'Final Prospects Prediction',
            data: $predictionData,
            backgroundColor: [
                'orange',
                'green',
                'orange',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }]
    },
    options: {
        rotation: 1 * Math.PI,
        circumference: 1 * Math.PI
    }
});


function predict(){          
    if ($predictInputProspectsRsvp.val() == "") {
        $predictInputProspectsRsvp.val("Complete all fields").css("color","red").css('text-align',"center");

    }  else {
    $predictionData = [];
    $predictionData.push((0.415916664639639 + (0.806006268011251 * $predictInputProspectsRsvp.val())-1.752789706).toFixed(2));
    $predictionData.push((0.415916664639639 + (0.806006268011251 * $predictInputProspectsRsvp.val())).toFixed(2));
    $predictionData.push((0.415916664639639 + (0.806006268011251 * $predictInputProspectsRsvp.val())+1.752789706).toFixed(2));


    $predictRsvpCtx.remove();
    $("#predict-input-container-2-rsvp").append("<canvas id='half-donut-predict-rsvp'></canvas>");
    $predictRsvpCtx = $("#half-donut-predict-rsvp");

    var myChart = new Chart($predictRsvpCtx, {
        type: 'doughnut',
        data: {
            labels: ["Lower boundary", "Central prediction", "Upper boundary",],
            datasets: [{
                label: 'Final Prospects Prediction',
                data: $predictionData,
                backgroundColor: [
                    'orange',
                    'green',
                    'orange',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 1
            }]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI
        }
    });

    };
}

function predictReset(){            
    $predictInputProspectsRsvp.val("");

    $predictRsvpCtx.remove();
    $predictionData = [1,2,1];
    $("#predict-input-container-2-rsvp").append("<canvas id='half-donut-predict-rsvp'></canvas>");
    $predictRsvpCtx = $("#half-donut-predict-rsvp");
    var myChart = new Chart($predictRsvpCtx, {
        type: 'doughnut',
        data: {
            labels: ["Lower boundary", "Central prediction", "Upper boundary",],
            datasets: [{
                label: 'Final Prospects Prediction',
                data: $predictionData,
                backgroundColor: [
                    'orange',
                    'green',
                    'orange',
                ],
                borderColor: [
                    'white',
                ],
                borderWidth: 1
            }]
        },
        options: {
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
           
        }
    });
};

var rsvpAccuracyDonut = new Chart($predictRsvpAccuracyCtx, {
    type: 'doughnut',
    data: {
        labels: ["Accuracy", "Standard Error"],
        datasets: [{
            label: ['Accuracy', 'Standard Error'],
            data: [85.6, 14.4],
            backgroundColor: [
                'green',
                'orange',
            ],
            borderColor: [
                "white",
            ],
            borderWidth: 2,
        }]
    },
    options: {
        legend: {
            display: false,
        },
        tooltips: {
            titleFontSize: 22,
            bodyFontSize: 22,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
        }

    }
});

