$predictInputProspects = $('#predict-input-prospects');
$predictInputConfirmed = $('#predict-input-confirmed');
$predictInputVoicemail = $('#predict-input-voicemail');
$predictInputNa = $('#predict-input-na');

$predictButton = $('#predictbutton');
$predictResetButton = $('#predictresetbutton');

$predictButton.click(predict);

$predictResetButton.click(predictReset);

$predictionData = [1,2,1];

$predictTomorrowCtx = $("#half-donut-predict-tomorrow");
$predictTomorrowAccuracyCtx = $("#half-donut-predict-tomorrow-accuracy");


var myChart = new Chart($predictTomorrowCtx, {
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



function predict(){          
    if ($predictInputProspects.val() == "" || $predictInputConfirmed.val() == "" || $predictInputVoicemail.val() == "" || $predictInputNa.val() == "") {
        $predictInputProspects.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputConfirmed.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputVoicemail.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputNa.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictionwidgetdiv.css("background","transparent");

    }  else {
    $predictionData = [];
    $predictionData.push((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())-2.401072221).toFixed(2));
    $predictionData.push((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())).toFixed(1));
    $predictionData.push((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())+2.401072221).toFixed(2));

    $predictTomorrowCtx.remove();
    $("#predict-input-container-2").append("<canvas id='half-donut-predict-tomorrow'></canvas>");
    $predictTomorrowCtx = $("#half-donut-predict-tomorrow");

    var myChart = new Chart($predictTomorrowCtx, {
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

        /*console.log($predictInputProspects.val());
    if ($predictInputProspects.val() || $predictInputConfirmed.val() || $predictInputVoicemail.val() || $predictInputNa.val() == undefined) {
        $predictionFinalProspects.html("Error: Input all fields")
        $predictionFinalProspects.css("color","red");
    }*/}
};

function predictReset(){            
    $meterPrediction.val("");
    $predictInputProspects.val("");
    $predictInputConfirmed.val("");
    $predictInputVoicemail.val("");
    $predictInputNa.val("");

    $predictTomorrowCtx.remove();
    $predictionData = [1,2,1];
    $("#predict-input-container-2").append("<canvas id='half-donut-predict-tomorrow'></canvas>");
    $predictTomorrowCtx = $("#half-donut-predict-tomorrow");
    var myChart = new Chart($predictTomorrowCtx, {
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

var tomorrowAccuracyDonut = new Chart($predictTomorrowAccuracyCtx, {
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






