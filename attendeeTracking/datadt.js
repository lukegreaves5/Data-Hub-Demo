// Input Variables
var city = document.getElementById("city");
var attendeeFunction = document.getElementById("attendeeFunction");
var content = document.getElementById("content");
var seniority = document.getElementById("seniority");
var client = document.getElementById("client");
//


// Global Variables
var logoReset = document.getElementById("logo");
var calculate = document.getElementById("calculatebutton");
var buttonReset = document.getElementById("resetbutton");
var inputContainer = document.getElementById("inputcontainer");
var outputContainer = document.getElementById("outputcontainer");
var inputCity = document.getElementById("inputcity");
var inputAttendeeFunction = document.getElementById("inputattendeefunction");
var inputContent = document.getElementById("inputcontent");
var inputSeniority = document.getElementById("inputseniority");
var inputClient = document.getElementById("inputclient");
var overlay = document.getElementById('overlay');
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');
video.playbackRate = 0.65;
var successRate;

var $tab1 = $("#tab1").css("display", "none");
var $tab2 = $("#tab2").css("display", "none");
var $tab3 = $("#tab3").css("display", "none");
var $tab4 = $("#tab4").css("display", "none");
var $tab5 = $("#tab5").css("display", "none");
var $tab6 = $("#tab6").css("display", "none");

var $difference1 = $("#difference1").css("display", "none");
var $difference2 = $("#difference2").css("display", "none");
var $difference3 = $("#difference3").css("display", "none");
var $difference4 = $("#difference4").css("display", "none");
var $difference5 = $("#difference5").css("display", "none");
var $difference6 = $("#difference6").css("display", "none");

var $distributionTitle = $('#distribution-title').css("display", "none");


var url = 'https://docs.google.com/spreadsheets/d/1d5238rErONJCDtVPXbLFOCKwmifCDHpjqfdBRnzJEN0/edit#gid=1668841256';

$downloadButton = $('#downloadbutton');
$loader = $('#loader');
$loaderText = $('#loader-text');
$h3 = $('h3');
$table = $('table');
$rates = $('#rates');
$speechBubble = $('#speech-bubble');
$summarycontainer = $('#summarycontainer');
$resultstatscontainer = $('#resultstatscontainer');
$analysiscontainer = $('#analysiscontainer');
$singlestatcontainer = $('#singlestatcontainer');
$summarybanner1 = $('#summarybanner1');
$differencebanner1 = $('#differencebanner1');

$cityHead = $('#cityhead');
$eventHead = $('#eventhead');
$prospectHead = $('prospecthead');
$successHead = $('successhead');
$noShowHead = $('noshowhead');

$dataChoice = $('.data-choice');
$analyseAndForecast = $('.analyse-and-forecast');
$predictForRsvp = $('.predict-for-rsvp');
$predictForTomorrow = $('.predict-for-tomorrow');
$analyseAndForecastContainerAll = $('#analyse-and-forecast-container-all');
$predictRsvp = $('#predict-rsvp');
$predictTomorrow = $('#predict-tomorrow');
$predictionFinalProspects = $('#predictionfinalprospects');
$predictInputProspects = $('#predict-input-prospects');
$predictInputConfirmed = $('#predict-input-confirmed');
$predictInputVoicemail = $('#predict-input-voicemail');
$predictInputNa = $('#predict-input-na');

$prediction = $('#prediction');
$widgetContainer = $('#widget-container');
$lowDataContainer = $('#low-data-container');

$predictionwidget = $('#predictionwidget');
$predictionwidgetdiv = $('#predictionwidget div');
$predictButton = $('#predictbutton');
$predictResetButton = $('#predictresetbutton');

$meter1 = $('#meter1');
$meter2 = $('#meter2');
$meter3 = $('#meter3');
$meter4 = $('#meter4');
$meter5 = $('#meter5');

$meterPrediction = $('#meterprediction');
$leftValLowPredict = $('#leftval-low-predict.val');
$rightValHighPredict = $('#rightval-high-predict.val');

$leftValLow1 = $('#widget #leftval-low-1.val');
$leftValLow2 = $('#widget #leftval-low-2.val');
$leftValLow3 = $('#widget #leftval-low-3.val');
$leftValLow4 = $('#widget #leftval-low-4.val');
$leftValLow5 = $('#widget #leftval-low-5.val');

$rightValHigh1 = $('#widget #rightval-high-1');
$rightValHigh2 = $('#widget #rightval-high-2');
$rightValHigh3 = $('#widget #rightval-high-3');
$rightValHigh4 = $('#widget #rightval-high-4');
$rightValHigh5 = $('#widget #rightval-high-5');

$predictRsvp.css("display", "none");
$predictTomorrow.css("display", "none");
$analysiscontainer.css("display", "none");
$prediction.css("display", "none");

$goBackButton = $("#resetbutton");




//

// Click Listeners
calculate.addEventListener("click", calculateFunction);
logoReset.addEventListener("click", resetFunction);
buttonReset.addEventListener("click", resetFunction);
city.addEventListener("input", citybg);
city.addEventListener("input", hideVideo);
attendeeFunction.addEventListener("input", hideVideo);
content.addEventListener("input", hideVideo);
seniority.addEventListener("input", hideVideo);
client.addEventListener("input", hideVideo);
$analyseAndForecast.click(analysePredict);
$predictForRsvp.click(predictRsvp);
$predictForTomorrow.click(predictTomorrow);
$goBackButton.click(resetFunction);

//

$bdiloader = $('#bdiloader');
$bdiloader.css("display", "block");

$note1 = $('#note1');
$note2 = $('#note2');
$note3 = $('#note3');


function analysePredict() {
    $dataChoice.css("display", "none");
    $analyseAndForecast.css("display", "none");
    $analyseAndForecastContainerAll.css("display", "block");
}

function predictRsvp() {
    $dataChoice.css("display", "none");
    $analyseAndForecast.css("display", "none");
    $analyseAndForecastContainerAll.css("display", "none");
    $predictTomorrow.css("display", "none");
    $goBackButton.css("display", "block");
    overlay.style.opacity = "0.9";
    video.style.display = "none";
    $predictRsvp.css("display", "block");
    document.body.style.backgroundImage = "none";
}

function predictTomorrow() {
    $dataChoice.css("display", "none");
    $analyseAndForecast.css("display", "none");
    $analyseAndForecastContainerAll.css("display", "none");
    $predictTomorrow.css("display", "block");
    $goBackButton.css("display", "block");
    overlay.style.opacity = "0.9";
    video.style.display = "none";
    $predictRsvp.css("display", "none");
    document.body.style.backgroundImage = "none";
}

function hideVideo() {
    video.style.display = "none";
}


function summaryInit() {
    Tabletop.init( { key: url,
                     callback: showSummary,
                     simpleSheet: true,
                     parseNumbers: true } )
  }

function showSummary(data, Tabletop) {
$bdiloader.css("display", "none");

    
var $summaryTbody = $('#summary-tbody');
var $summaryTable = $('#summarytable');


var uniqueCity = [];
var uniqueFunction = [];
var uniqueContent = [];
var uniqueSeniority = [];
var uniqueClient = [];


for (var i = 0; i < data.length; i++) {  
    
if (uniqueCity.indexOf(data[i].cityName) === -1) {
  uniqueCity.push(data[i].cityName);
}

if (uniqueFunction.indexOf(data[i].attendeeFunctionMutEx) === -1) {
  uniqueFunction.push(data[i].attendeeFunctionMutEx);
}

if (uniqueContent.indexOf(data[i].contentCategoryMutEx) === -1) {
  uniqueContent.push(data[i].contentCategoryMutEx);
}

if (uniqueSeniority.indexOf(data[i].seniorityLevel) === -1) {
  uniqueSeniority.push(data[i].seniorityLevel);
}

if (uniqueClient.indexOf(data[i].clientName) === -1) {
  uniqueClient.push(data[i].clientName);
}


}

// automated input refercing
uniqueCity.sort();
uniqueFunction.sort();
uniqueContent.sort();
uniqueSeniority.sort();
uniqueClient.sort();



var list = document.getElementById('cities');

uniqueCity.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});


var list = document.getElementById('attendeefunctions');

uniqueFunction.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

var list = document.getElementById('contentcategories');

uniqueContent.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

var list = document.getElementById('senioritycategories');

uniqueSeniority.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});

var list = document.getElementById('clientcategories');

uniqueClient.forEach(function(item){
   var option = document.createElement('option');
   option.value = item;
   list.appendChild(option);
});


// Global average list size
var globalAvg = Array.from(data.reduce(
    (acc, obj) => Object.keys(obj).reduce( 
        (acc, key) => typeof obj[key] == "number"
            ? acc.set(key, ( // immediately invoked function:
                    ([sum, count]) => [sum+obj[key], count+1] 
                )(acc.get(key) || [0, 0])) // pass previous value
            : acc,
    acc),
new Map()), 
    ([name, [sum, count]]) => ({ name, average: sum/count })
);


var $successRateAverageArr = [];

for (var i = 0; i < data.length; i++) {

 $successRateAverageArr.push(data[i].finalProspects / data[i].targetAttendees);
 
}



$predictButton.click(predict);

$predictResetButton.click(predictReset);

function predict(){          
    if ($predictInputProspects.val() == "" || $predictInputConfirmed.val() == "" || $predictInputVoicemail.val() == "" || $predictInputNa.val() == "") {
        $meterPrediction.html("Error: All fields need to be completed").css("font-size", "1.2em").css("color","red").css("font-size","0.55em");
        $predictInputProspects.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputConfirmed.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputVoicemail.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictInputNa.val("Complete all fields").css("color","red").css('text-align',"center");
        $predictionwidgetdiv.css("background","transparent");

    }  else {
    $meterPrediction.html((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())).toFixed(1)).append($('<p></p>').text("Final Prospects").css("font-size","0.35em").css("margin-top","-28%").css("color","#47bd2f")); // Add their name;
    $leftValLowPredict.html((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())-2.401072221).toFixed(2));
    $rightValHighPredict.html((0.1496164025 + (0.8447205889 * $predictInputProspects.val()) + (0.06550947319 * $predictInputConfirmed.val())+(-0.2821439045 * $predictInputVoicemail.val()) + (-0.121055205 * $predictInputNa.val())+2.401072221).toFixed(2));



    }
};


 // Calculate the sums and group data (while tracking count)
 const reduced = data.reduce(function(m, d){
    if(!m[d.cityName]){
      m[d.cityName] = {...d, count: 1};
      return m;
    }
    m[d.cityName].targetAttendees += d.targetAttendees;
    m[d.cityName].finalProspects += d.finalProspects;
    m[d.cityName].noShows += d.noShows;
    m[d.cityName].yesProspectsAdjusted += d.yesProspectsAdjusted;
    m[d.cityName].count += 1;

    return m;
 },{});
 
 // Create new array from grouped data and compute the average
 const result = Object.keys(reduced).map(function(k){
     const item  = reduced[k];
     return {
         cityName: item.cityName,
         averageTargetAttendees: (item.targetAttendees/item.count),
         averageFinalProspects: (item.finalProspects/item.count),
         successRate: (item.finalProspects/ item.targetAttendees)*100,
         noShowRate: (item.noShows/ item.yesProspectsAdjusted)*100,
         events: item.count,
     }
 })

var newResult = _.sortBy(result, 'events',).reverse();


              // Create a row for them

 function newResultTableFill() {
    for (var i = 0; i < newResult.length; i++) {
    var $row = $('<tr></tr>');   
    $row.append($('<td></td>').text(newResult[i].cityName)); // Add their name
    $row.append($('<td></td>').text(newResult[i].events)); // Add their name
    $row.append($('<td></td>').text((newResult[i].averageFinalProspects).toFixed(0))); // Add their name
    $row.append($('<td></td>').text((newResult[i].successRate).toFixed(2) + "%")); // Add their name
    $row.append($('<td></td>').text((newResult[i].noShowRate).toFixed(2) + "%")); // Add their name
    $summaryTbody.append( $row );

 }
};

newResultTableFill(newResult);


 $cityHead.click(function(){              // Create a row for them
    var $row = $('<tr></tr>');   
    $row.empty();
    var newResult2 = _.sortBy(result, 'successRate',).reverse();
    $summaryTbody.innerHTML = "";
    $summaryTable.innerHTML - "";
    newResultTableFill(newResult2);
    

 });

}
summaryInit();


function calculateFunction() {
    inputContainer.style.display = "none";
    calculate.style.display = "none";
    outputContainer.append.buttonReset;
    outputcontainer.style.visibility = "visible";
    document.body.style.overflow = "visible";
    video.style.display = "none";
    overlay.style.overflow = "visible";
    overlay.style.zIndex = "-100";
    overlay.style.minHeight = "800%";
    overlay.style.minWidth = "800%";
    inputCity.style.display = "flex";
    inputCity.style.backgroundColor = "#fff";
    inputAttendeeFunction.style.display =  "flex";
    inputContent.style.display = "flex";
    inputSeniority.style.display = "flex";
    inputClient.style.display = "flex";

    input1.style.display = "flex";
    input2.style.display = "flex";
    input3.style.display = "flex";
    input4.style.display = "flex";
    input5.style.display = "flex";
    

    inputFields();
    blankInputFields();
    $loader.css("display", "flex");
    $loaderText.css("display", "block");
    $speechBubble.css("display", "block");
    $summarycontainer.css("display", "none");
  


    
    function init() {
      Tabletop.init( { key: url,
                       callback: showInfo,
                       simpleSheet: true,
                       parseNumbers: true } )
    }

    function showInfo(data, Tabletop) {
        $loader.css("display", "none");
        $loaderText.css("display", "none");
        $speechBubble.css("display", "none");
        $h3.css("display", "block");
        $table.css("display", "block");
        $resultstatscontainer.css("display", "flex");
        $prediction.css("display", "flex");
        $widgetContainer.css("display", "flex");
        $analysiscontainer.css("display", "flex");
        $summarybanner1.css("display", "flex");
        $differencebanner1.css("display", "flex");
        $rates.css("display", "block");
        $distributionTitle.css("display", "block");
        $note1.css("display","block");
        $note2.css("display","block");
        $note3.css("display","block");
        outputContainer.style.opacity = "1";
     
        buttonReset.style.display = "flex";
        $downloadButton.css("display","flex");


// Global average list size
var calcScope_globalAvg = Array.from(data.reduce(
    (acc, obj) => Object.keys(obj).reduce( 
        (acc, key) => typeof obj[key] == "number"
            ? acc.set(key, ( // immediately invoked function:
                    ([sum, count]) => [sum+obj[key], count+1] 
                )(acc.get(key) || [0, 0])) // pass previous value
            : acc,
    acc),
new Map()), 
    ([name, [sum, count]]) => ({ name, average: sum/count })
);


var $global_successRateAverageArr = [];

for (var i = 0; i < data.length; i++) {

 $global_successRateAverageArr.push(data[i].finalProspects / data[i].targetAttendees);
 
}

function getAvg($successRateAverageArr) {
  return $successRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / $successRateAverageArr.length;
}


// No show Rate Array to calculate search average

var $global_noShowAverageArr = [];

for (var i = 0; i < data.length; i++) {

 $global_noShowAverageArr.push(data[i].noShows / data[i].yesProspectsAdjusted);
}


function getAvg($global_noShowAverageArr) {
  return $global_noShowAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / $global_noShowAverageArr.length;
}




// Total no show/canellation Rate Array to calculate search average
var $global_noShowCancellationAverageArr = [];

for (var i = 0; i < data.length; i++) {

 $global_noShowCancellationAverageArr.push(data[i].nsCancelTotal / data[i].yesProspectsAdjusted);
}

function getAvg($global_noShowCancellationAverageArr) {
  return $global_noShowCancellationAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / $global_noShowCancellationAverageArr.length;
}




// Canellation Rate Array to calculate search average
var $global_cancellationAverageArr = [];

for (var i = 0; i < data.length; i++) {

 $global_cancellationAverageArr.push((data[i].nsCancelTotal - data[i].noShows) / data[i].yesProspectsAdjusted);
}

function getAvg($global_cancellationAverageArr) {
  return $global_cancellationAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / $global_cancellationAverageArr.length;
  
}

// Global average attendees array to calculate search average
var $global_finalProspectsAverageArr = [];

for (var i = 0; i < data.length; i++) {

    $global_finalProspectsAverageArr.push(data[i].finalProspects);
   }
   
   function getAvg($global_finalProspectsAverageArr) {
     return $global_finalProspectsAverageArr.reduce(function (p, c) { 
       return p + c;
     }) / $global_finalProspectsAverageArr.length;
   
   }



  var results = [];

  data.forEach( (_event) => {


    /* all inputs */                                          if (city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == _event.clientName
    /* city only */                                           || city.value == _event.cityName && attendeeFunction.value == "" && content.value == "" && seniority.value == "" && client.value == ""

    /* city + attendee function */                            || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == "" && client.value == ""
    /* city + content */                                      || city.value == _event.cityName && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == ""
    /* city + seniority */                                    || city.value == _event.cityName && attendeeFunction.value == "" && content.value == "" && seniority.value == _event.seniorityLevel && client.value == ""
    /* city + client */                                       || city.value == _event.cityName && attendeeFunction.value == "" && content.value == "" && seniority.value == "" && client.value == _event.clientName

    
    /* city + attendee function + content */                  || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == ""
    /* city + attendee function + content + client */         || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == _event.clientName
    /* city + attendee function + seniority */                || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == _event.seniorityLevel && client.value == ""
    /* city + attendee function + seniority + client */       || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == _event.seniorityLevel && client.value == _event.clientName
    /* city + attendee function + client */                   || city.value == _event.cityName && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == "" && client.value == _event.clientName

    /* city + content + seniority */                          || city.value == _event.cityName && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == ""
    /* city + content + client */                             || city.value == _event.cityName && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == _event.clientName

    /* city + content + seniority + client */                 || city.value == _event.cityName && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == _event.clientName
    
    /* attendee function only */                              || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == "" && client.value == ""
    /* attendee function + content */                         || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == ""
    /* attendee function + seniority */                       || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == _event.seniorityLevel && client.value == ""
    /* attendee function + client */                          || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == "" && seniority.value == "" && client.value == _event.clientName

    /* attendee function + content + seniority */             || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == ""
    /* attendee function + content + client */                || city.value == "" && attendeeFunction.value == _event.attendeeFunctionMutEx && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == _event.clientName


    /* content only */                                        || city.value == "" && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == ""
    /* content + seniority */                                 || city.value == "" && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == ""
    /* content + seniority + client */                        || city.value == "" && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == _event.seniorityLevel && client.value == _event.clientName

    /* seniority only */                                      || city.value == "" && attendeeFunction.value == "" && content.value == "" && seniority.value == _event.seniorityLevel && client.value == ""
    /* seniority + client */                                  || city.value == "" && attendeeFunction.value == "" && content.value == "" && seniority.value == _event.seniorityLevel && client.value == _event.clientName


    /* client Only */                                         || city.value == "" && attendeeFunction.value == "" && content.value == "" && seniority.value == "" && client.value == _event.clientName
    /* Client & Content */                                    || city.value == "" && attendeeFunction.value == "" && content.value == _event.contentCategoryMutEx && seniority.value == "" && client.value == _event.clientName) {
                                        

    results.push(_event);
    var _event = results[i];  
    }

  });

  
  // LOOP THROUGH NEW ARRAY AND ADD MATCHING PEOPLE TO THE RESULTS TABLE
var $tableBody = $('<tbody></tbody>');           // New table body

for (var i = 0; i < results.length; i++) {       // Loop through matches
  var _event = results[i];                       // Store current person

  var $row = $('<tr></tr>');  
  $row.append($('<td></td>').text(i + 1)); // Add their rate   
  $row.append($('<td></td>').text(_event.eventDate)); // Add their rate                    // Create a row for them
  $row.append($('<td></td>').text(_event.cityName)); // Add their name
  $row.append($('<td></td>').text(_event.clientName)); // Add their rate
  $row.append($('<td></td>').text(_event.eventTitle)); // Add their rate
  $row.append($('<td></td>').text(_event.attendeeFunctionMutEx)); // Add their rate
  $row.append($('<td></td>').text(_event.targetAttendees)); // Add their rate
  $row.append($('<td></td>').text(_event.yesAdjusted)); // Add their rate
  $row.append($('<td></td>').text(_event.panelists)); // Add their rate
  $row.append($('<td></td>').text(_event.confirmed)); // Add their rate
  $row.append($('<td></td>').text(_event.voicemail)); // Add their rate
  $row.append($('<td></td>').text(_event.unavailable)); // Add their rate
  $row.append($('<td></td>').text(_event.finalAttendees)); // Add their rate
  $row.append($('<td></td>').text(_event.finalProspects)); // Add their rate
  $row.append($('<td></td>').text(_event.noShows)); // Add their rate
  $row.append($('<td></td>').text(_event.cancelDayOf)); // Add their rate
  $row.append($('<td></td>').text(_event.cancelOneDay)); // Add their rate
  $row.append($('<td></td>').text(_event.nsCancelTotal)); // Add their rate
  $row.append($('<td></td>').text(_event.listSize)); // Add their rate
  $row.append($('<td></td>').text(_event.contentCategoryMutEx)); // Add their rate
  $row.append($('<td></td>').text(_event.contentRating)); // Add their rate
  $row.append($('<td></td>').text(_event.seniorityLevel)); // Add their rate
  $row.append($('<td></td>').text(((_event.finalProspects / _event.targetAttendees) * 100).toFixed(2) + "%"));
  $row.append($('<td></td>').text(((_event.noShows / _event.yesProspectsAdjusted) * 100).toFixed(2) + "%")); // Add their rate
  $row.append($('<td></td>').text((((_event.nsCancelTotal-_event.noShows) / _event.yesProspectsAdjusted) * 100).toFixed(2) + "%")); // Add their rate
  $row.append($('<td></td>').text(((_event.nsCancelTotal / _event.yesProspectsAdjusted) * 100).toFixed(2) + "%")); // Add their rate
  $row.append($('<td></td>').text((((_event.yesProspectsAdjusted + _event.no) / _event.listSize) * 100).toFixed(2) + "%")); // Response Rate
  $row.append($('<td></td>').text((((_event.yesProspectsAdjusted) / _event.listSize) * 100).toFixed(2) + "%")); // RSVP rate
  $row.append($('<td></td>').text(((_event.finalProspects / _event.listSize) * 100).toFixed(2) + "%")); // Conversion rate

  //$result1.append($("<span>/span>").text("Succes Rate:" + " " + (successRate / (i+1)) * 100 + "%"));
  //$row.append($('<td></td>').text(_event.)); // Add their rate
  $tableBody.append( $row );
  // Add row to new content
}

// Analysis


/*
var $successRateAverageArr = [];
var total = 0;
var resultsFinalProspects = 0;
var resultsTargetAttendees = 0;
var averageFinalProspects;

for (var i = 0; i < results.length; i++) {
    resultsFinalProspects += results[i].finalProspects;
    resultsTargetAttendees += results[i].targetAttendees;
}
*/

var config = 
{
	quotes: false, //or array of booleans
	quoteChar: '"',
	escapeChar: '"',
	delimiter: ",",
	header: true,
	newline: "\r\n",
	skipEmptyLines: 'greedy',
	columns: null //or array of strings
};


        function downloadCSV(args) {
            var data, filename, link;
            var csv = Papa.unparse(results, config);
            if (csv == null) return;
             
            filename = args.filename || 'Data Export.csv';
             
            if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
            }
            data = encodeURI(csv);
             
            link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            link.click();
            }

$downloadButton.click(downloadCSV);


$('#databasedon').append($("<p></p>").text( "Google sheet last updated on" + " " + data[data.length-1].eventDate));
$('#lastupdated').append($("<p></p>").text("Analysis and forecast based on history from:" + " " + results.length  + " " + "events"));
$('thead').after($tableBody);                    // Add tbody after thead

  var $tab1 = $("#tab1").css("display", "flex");
  var $tab2 = $("#tab2").css("display", "flex");
  var $tab3 = $("#tab3").css("display", "flex");
  var $tab4 = $("#tab4").css("display", "flex");
  var $tab5 = $("#tab5").css("display", "flex");
  var $tab6 = $("#tab6").css("display", "flex");

  
var $difference1 = $("#difference1").css("display", "flex");
var $difference2 = $("#difference2").css("display", "flex");
var $difference3 = $("#difference3").css("display", "flex");
var $difference4 = $("#difference4").css("display", "flex");
var $difference5 = $("#difference5").css("display", "flex");
var $difference6 = $("#difference6").css("display", "flex");

// Success rate Array to calculate search average
var $successRateAverageArr = [];

for (var i = 0; i < results.length; i++) {

 $successRateAverageArr.push(results[i].finalProspects / results[i].targetAttendees);
 
}

function getAvg($successRateAverageArr) {
  return $successRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / $successRateAverageArr.length;
}

// No show Rate Array to calculate search average

var $noShowAverageArr = [];

for (var i = 0; i < results.length; i++) {

 $noShowAverageArr.push(results[i].noShows / results[i].yesProspectsAdjusted);
}


function getAvg($noShowAverageArr) {
  return $noShowAverageArr.reduce(function (a, b) { 
    return a + b;
  }) / $noShowAverageArr.length;
}


// Total no show/canellation Rate Array to calculate search average
var $noShowCancellationAverageArr = [];

for (var i = 0; i < results.length; i++) {

 $noShowCancellationAverageArr.push(results[i].nsCancelTotal / results[i].yesProspectsAdjusted);
}

function getAvg($noShowCancellationAverageArr) {
  return $noShowCancellationAverageArr.reduce(function (a, b) { 
    return a + b;
  }) / $noShowCancellationAverageArr.length;
}


// Canellation Rate Array to calculate search average
var $cancellationAverageArr = [];

for (var i = 0; i < results.length; i++) {

 $cancellationAverageArr.push((results[i].nsCancelTotal - results[i].noShows) / results[i].yesProspectsAdjusted);
}

function getAvg($cancellationAverageArr) {
  return $cancellationAverageArr.reduce(function (a, b) { 
    return a + b;
  }) / $cancellationAverageArr.length;
  
}

// Average attendees array to calculate search averages
var $finalProspectsAverageArr = [];

for (var i = 0; i < results.length; i++) {

    $finalProspectsAverageArr.push(results[i].finalProspects);
   }
   
   function getAvg($finalProspectsAverageArr) {
     return $finalProspectsAverageArr.reduce(function (a, b) { 
       return a + b;
     }) / $finalProspectsAverageArr.length;
   
     
   }
  
// Average list size
var avg = Array.from(results.reduce(
      (acc, obj) => Object.keys(obj).reduce( 
          (acc, key) => typeof obj[key] == "number"
              ? acc.set(key, ( // immediately invoked function:
                      ([sum, count]) => [sum+obj[key], count+1] 
                  )(acc.get(key) || [0, 0])) // pass previous value
              : acc,
      acc),
  new Map()), 
      ([name, [sum, count]]) => ({ name, average: sum/count })
  );



$successRateColor =[];
$noShowRateColor =[];
$cancellationRateColor =[];
$noShowCancellationRateColor =[];
$finalProspectsColor =[];


function listAverage() {

    if (avg[22].average > calcScope_globalAvg[22].average) {
       return( "+" + " " + (avg[22].average - calcScope_globalAvg[22].average).toFixed(0) + " " + "above average");
    }
    else if (avg[22].average < calcScope_globalAvg[22].average) {
        return((avg[22].average - calcScope_globalAvg[22].average).toFixed(0) + " " + "below average");
    }
    }

function successRateAverage() {

if (getAvg($successRateAverageArr) > getAvg($global_successRateAverageArr)) {
    $difference1.css("color","green");
    return("+" + " " + ((getAvg($successRateAverageArr) * 100) - getAvg($global_successRateAverageArr) * 100).toFixed(2) + "%" + " " + "above average");
 }
 else if (getAvg($successRateAverageArr) < getAvg($global_successRateAverageArr)) {
    $difference1.css("color","red");
    $successRateColor.push("red");
    $successRateColor.push("((getAvg($successRateAverageArr) * 100) - getAvg($global_successRateAverageArr) * 100).toFixed(2)");
    return(((getAvg($successRateAverageArr) * 100) - getAvg($global_successRateAverageArr)* 100).toFixed(2) + "%" + " " + "below average");
}

}

function noShowRateAverage() {

    if (getAvg($noShowAverageArr) > getAvg($global_noShowAverageArr)) {
        $difference2.css("color","red");
        $noShowRateColor.push("#red");
        $noShowRateColor.push("((getAvg($noShowAverageArr) * 100) - getAvg($global_noShowAverageArr) * 100).toFixed(2)");
        return("+" + " " + ((getAvg($noShowAverageArr) * 100) - getAvg($global_noShowAverageArr)* 100).toFixed(2) + "%" + " " + "above average");
     }
     else if (getAvg($noShowAverageArr) < getAvg($global_noShowAverageArr)) {
        $difference2.css("color","green");
        $noShowRateColor.push("#32CD32");
        $noShowRateColor.push("((getAvg($noShowAverageArr) * 100) - getAvg($global_noShowAverageArr) * 100).toFixed(2)");
        return(((getAvg($noShowAverageArr) * 100) - getAvg($global_noShowAverageArr)* 100).toFixed(2) + "%" + " " + "below average");
    }
    }

function cancellationRateAverage() {

    if (getAvg($cancellationAverageArr) > getAvg($global_cancellationAverageArr)) {
        $difference3.css("color","red");
        $cancellationRateColor.push("red");
        $cancellationRateColor.push("((getAvg($cancellationAverageArr) * 100) - getAvg($global_cancellationAverageArr) * 100).toFixed(2)");
        return("+" + " " + ((getAvg($cancellationAverageArr) * 100) - getAvg($global_cancellationAverageArr)* 100).toFixed(2) + "%" + " " + "above average");
     }
     else if (getAvg($cancellationAverageArr) < getAvg($global_cancellationAverageArr)) {
        $difference3.css("color","green");
        $cancellationRateColor.push("#32CD32");
        $cancellationRateColor.push("((getAvg($cancellationAverageArr) * 100) - getAvg($global_cancellationAverageArr) * 100).toFixed(2)");
        return(((getAvg($cancellationAverageArr) * 100) - getAvg($global_cancellationAverageArr)* 100).toFixed(2) + "%" + " " + "below average");
    }
    }

function noShowCancellationRateAverage() {

    if (getAvg($noShowCancellationAverageArr) > getAvg($global_noShowCancellationAverageArr)) {
        $difference4.css("color","red");
        $noShowCancellationRateColor.push("red");
        $noShowCancellationRateColor.push("((getAvg($noShowCancellationAverageArr) * 100) - getAvg($global_noShowCancellationAverageArr) * 100).toFixed(2)");
        return("+" + " " + ((getAvg($noShowCancellationAverageArr) * 100) - getAvg($global_noShowCancellationAverageArr)* 100).toFixed(2) + "%" + " " + "above average");
     }
     else if (getAvg($noShowCancellationAverageArr) < getAvg($global_noShowCancellationAverageArr)) {
        $difference4.css("color","green");
        $noShowCancellationRateColor.push("#32CD32");
        $noShowCancellationRateColor.push("((getAvg($noShowCancellationAverageArr) * 100) - getAvg($global_noShowCancellationAverageArr) * 100).toFixed(2)");
        return(((getAvg($noShowCancellationAverageArr) * 100) - getAvg($global_noShowCancellationAverageArr)* 100).toFixed(2) + "%" + " " + "below average");
    }
    }

 function propectsAverage() {

    if (avg[13].average > getAvg($global_finalProspectsAverageArr)) {
        $difference5.css("color","green");
        return("+" + " " + (avg[13].average - getAvg($global_finalProspectsAverageArr)).toFixed(0) + " " + "above average");
     }
     else {
        $difference5.css("color","red");
        return((avg[13].average - getAvg($global_finalProspectsAverageArr)).toFixed(0) + " " + "Average");
     }


    }   


var  responseRateArr = [];

var responseRate = results.map( (e) => {
                        return [(e.yes + e.no)/e.finalProspects]

                
                    });

                    responseRateArr.push(responseRate);


$tab1.append((getAvg($successRateAverageArr).toFixed(4) * 100).toFixed(2) + "%");
$tab2.append((getAvg($noShowAverageArr).toFixed(4) * 100).toFixed(2) + "%");
$tab3.append((getAvg($cancellationAverageArr) * 100).toFixed(2) + "%");
$tab4.append((getAvg($noShowCancellationAverageArr) * 100).toFixed(2) + "%");
$tab5.append((avg[13].average.toFixed(0)));
$tab6.append((avg[22].average.toFixed(0)));


if (results.length < 5) {
    $widgetContainer.css("display", "none");
    $lowDataContainer.css("display", "block");
    $prediction.css("display", "none");
    $note2.css("display", "none");

}


$difference1.append($("<p></p>").text(successRateAverage()));
$difference2.append($("<p></p>").text(noShowRateAverage()));
$difference3.append($("<p></p>").text(cancellationRateAverage()));
$difference4.append($("<p></p>").text(noShowCancellationRateAverage()));
$difference5.append($("<p></p>").text(propectsAverage()));
$difference6.append($("<p></p>").text(listAverage()));


$analysisFirstD1 = $('#analysis-first-D1');
$analysisFirstD2 = $('#analysis-first-D2');
$analysisFirstD3 = $('#analysis-first-D3');
$analysisFirstD4 = $('#analysis-first-D4');
$analysisFirstD5 = $('#analysis-first-D5');
$analysisFirstD6 = $('#analysis-first-D6');


var firstd1 = new Chart($analysisFirstD1, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'Average for your Data',
            data: [ (getAvg($successRateAverageArr)*100).toFixed(2),100-(getAvg($successRateAverageArr)*100).toFixed(2)],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        },
       ],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average Success Rate";
            },
            label: (tooltipItems, data) => {
              return " " + (getAvg($successRateAverageArr)*100).toFixed(2) + "%";},
          
         }
        }
    },

});


var firstd2 = new Chart($analysisFirstD2, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'No Show Rate',
            data: [ (getAvg($noShowAverageArr)*100).toFixed(2),100-(getAvg($noShowAverageArr)*100).toFixed(2)],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average No Show Rate";
            },
            label: (tooltipItems, data) =>{
              return " " + (getAvg($noShowAverageArr)*100).toFixed(2) + "%";},
          
         }
        }
    }
});

var firstd3 = new Chart($analysisFirstD3, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'Cancellation Rate',
            data: [ (getAvg($cancellationAverageArr)*100).toFixed(2),100-(getAvg($cancellationAverageArr)*100).toFixed(2)],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average Cancellation Rate";
            },
            label: (tooltipItems, data) => {
              return " " + (getAvg($cancellationAverageArr)*100).toFixed(2) + "%";},
          
         }
        }
    }
});

var firstd4 = new Chart($analysisFirstD4, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'No Show + Cancellation Rate',
            data: [ (getAvg($noShowCancellationAverageArr)*100).toFixed(2),100-(getAvg($noShowCancellationAverageArr)*100).toFixed(2)],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average No Show+Canc Rate";
            },
            label: (tooltipItems, data) => {
              return " " + (getAvg($noShowCancellationAverageArr)*100).toFixed(2) + "%";},
          
         }
        }
    }
});

var firstd5 = new Chart($analysisFirstD5, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'Final Prospects',

            data: [(avg[13].average.toFixed(0)),50-(avg[13].average.toFixed(0))],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average Final Prospects";
            },
            label: (tooltipItems, data) => {
              return " " + (avg[13].average.toFixed(0))},
          
         }
        }
    }
});

var firstd6 = new Chart($analysisFirstD6, {
    type: 'doughnut',
    data: {
        labels: ["Average"],
        datasets: [{
            label: 'List Size',
            data: [ (avg[22].average.toFixed(0))],
            backgroundColor: [
                'rgb(66, 101, 255)','rgb(241, 241, 241)',
            ],
            borderColor: [
                'white',
            ],
            borderWidth: 1
        }],
    },
    options: {
        tooltips: {
            titleFontSize: 16,
            bodyFontSize: 20,
            titleSpacing: 2,
            // Disable the on-canvas tooltip
            enabled: true,
            callbacks: {
              title: (tooltipItem, data) => {
                return "Average List Size";
            },
            label: (tooltipItems, data) => {
              return " " + (avg[22].average.toFixed(0))},
          
         }
        }
    }
});


$low1 = $('#low1');
$high1 = $('#high1');
$low1.append(" " + "Low:" + " " + ((getAvg($successRateAverageArr)*100) - ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2) + "%");
$high1.append(" " + "High:" + " " + ((getAvg($successRateAverageArr)*100) + ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2)+ "%");

$low2 = $('#low2');
$high2 = $('#high2');
$low2.append(" " + "Low:" + " " + ((getAvg($noShowAverageArr)*100) - ((ss.standardDeviation($noShowAverageArr)*100))).toFixed(2) + "%");
$high2.append(" " + "High:" + " " + ((getAvg($noShowAverageArr)*100) + ((ss.standardDeviation($noShowAverageArr)*100))).toFixed(2)+ "%");

$low3 = $('#low3');
$high3 = $('#high3');
$low3.append(" " + "Low:" + " " + ((getAvg($cancellationAverageArr)*100) - ((ss.standardDeviation($cancellationAverageArr)*100))).toFixed(2) + "%");
$high3.append(" " + "High:" + " " + ((getAvg($cancellationAverageArr)*100) + ((ss.standardDeviation($cancellationAverageArr)*100))).toFixed(2)+ "%");

$low4 = $('#low4');
$high4 = $('#high4');
$low4.append(" " + "Low:" + " " + ((getAvg($noShowCancellationAverageArr)*100) - ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2) + "%");
$high4.append(" " + "High:" + " " + ((getAvg($noShowCancellationAverageArr)*100) + ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2)+ "%");

$low5 = $('#low5');
$high5 = $('#high5');


$low5.append(" " + "Low:" + " " + (getAvg($finalProspectsAverageArr) - ((ss.standardDeviation($finalProspectsAverageArr)))).toFixed(0));
$high5.append(" " + "High:" + " " + (getAvg($finalProspectsAverageArr) + ((ss.standardDeviation($finalProspectsAverageArr)))).toFixed(0));


$analysisD1 = $('#analysis-D1');
$analysisD2 = $('#analysis-D2');
$analysisD3 = $('#analysis-D3');
$analysisD4 = $('#analysis-D4');
$analysisD5 = $('#analysis-D5');


var d1 = new Chart($analysisD1, {
    type: 'doughnut',
    data: {
        labels: ["Low", "Average", "High",],
        datasets: [{
            label: 'Success Rate Forecast',
            data: [ ((getAvg($successRateAverageArr)*100) - ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2), (getAvg($successRateAverageArr).toFixed(4) * 100).toFixed(2), ((getAvg($successRateAverageArr)*100) + ((ss.standardDeviation($successRateAverageArr)*100))).toFixed(2)],
            backgroundColor: [
                'red',
                'orange',
                'green',
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

var d2 = new Chart($analysisD2, {
    type: 'doughnut',
    data: {
        labels: ["Low", "Average", "High",],
        datasets: [{
            label: 'No Show Rate Forecast',
            data: [ ((getAvg($noShowAverageArr)*100) - ((ss.standardDeviation($noShowAverageArr)*100))).toFixed(2), (getAvg($noShowAverageArr).toFixed(4) * 100).toFixed(2), ((getAvg($noShowAverageArr)*100) + ((ss.standardDeviation($noShowAverageArr)*100))).toFixed(2)],
            backgroundColor: [
                'red',
                'orange',
                'green',
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

var d3 = new Chart($analysisD3, {
    type: 'doughnut',
    data: {
        labels: ["Low", "Average", "High",],
        datasets: [{
            label: 'Cancellation Rate Forecast',
            data: [ ((getAvg($cancellationAverageArr)*100) - ((ss.standardDeviation($cancellationAverageArr)*100))).toFixed(2), (getAvg($cancellationAverageArr).toFixed(4) * 100).toFixed(2), ((getAvg($cancellationAverageArr)*100) + ((ss.standardDeviation($cancellationAverageArr)*100))).toFixed(2)],
            backgroundColor: [
                'red',
                'orange',
                'green',
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

var d4 = new Chart($analysisD4, {
    type: 'doughnut',
    data: {
        labels: ["Low", "Average", "High",],
        datasets: [{
            label: 'No Show + Cancellation Rate Forecast Forecast',
            data: [ ((getAvg($noShowCancellationAverageArr)*100) - ((ss.standardDeviation($noShowCancellationAverageArr)*100))).toFixed(2), (getAvg($noShowCancellationAverageArr).toFixed(4) * 100).toFixed(2), ((getAvg($noShowCancellationAverageArr)*100) + ((ss.standardDeviation($noShowCancellationAverageArr)*100))).toFixed(2)],
            backgroundColor: [
                'red',
                'orange',
                'green',
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

var d5 = new Chart($analysisD5, {
    type: 'doughnut',
    data: {
        labels: ["Low", "Average", "High",],
        datasets: [{
            label: 'Final Prospects Forecast',
            data: [ (getAvg($finalProspectsAverageArr) - ((ss.standardDeviation($finalProspectsAverageArr)))).toFixed(0), (avg[13].average.toFixed(0)), (getAvg($finalProspectsAverageArr) + ((ss.standardDeviation($finalProspectsAverageArr)))).toFixed(0)],
            backgroundColor: [
                'red',
                'orange',
                'green',
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

init();
}

function inputFields() {
    inputCity.innerHTML = city.value;
    inputAttendeeFunction.innerHTML = attendeeFunction.value;
    inputContent.innerHTML = content.value;
    inputSeniority.innerHTML = seniority.value;
    inputClient.innerHTML = client.value;
}

function blankInputFields() {
  if (city.value.length == 0) {
    inputCity.style.display = "none";
    input1.style.display = "none";
  }
  if (attendeeFunction.value.length == 0) {
    inputAttendeeFunction.style.display = "none";
    input2.style.display = "none";
  }
  if (content.value.length == 0) {
    inputContent.style.display = "none";
    input3.style.display = "none";
  }
  if (seniority.value.length == 0) {
    inputSeniority.style.display = "none";
    input4.style.display = "none";
  }
  if (client.value.length == 0) {
    inputClient.style.display = "none";
    input5.style.display = "none";
  }
  if (city.value.length == 0 && attendeeFunction.value.length == 0 && content.value.length == 0 && seniority.value.length == 0 && client.value.length == 0) {
    alert("No data requested")
    history.go(0); 
  }

  
};




function resetFunction() {
    window.location.reload();
    //history.go(0);    // -> for reference, does the same as "window.location.reload();"
}

function citybg() {
    if (city.value == "atlanta" || city.value == "Atlanta") {
        document.body.style.backgroundImage = "url('../assets/atlanta.jpg')";    
    } else if (city.value == "austin" || city.value == "Austin") {
        document.body.style.backgroundImage = "url('../assets/austin.jpg')";
    } if (city.value == "basking ridge" || city.value == "basking" || city.value == "Basking ridge" || city.value == "Basking Ridge") {
        document.body.style.backgroundImage = "url('../assets/baskingridge.jpg')";
    } else if (city.value == "Baltimore") {
            document.body.style.backgroundImage = "url('../assets/baltimore.jpg')";
    } if (city.value == "boston" || city.value == "Boston" ) {
        document.body.style.backgroundImage = "url('../assets/boston.jpg')";
    } else if (city.value == "cambridge" || city.value == "Cambridge") {
        document.body.style.backgroundImage = "url('../assets/cambridge.jpg')";
    } if (city.value == "chicago" || city.value == "Chicago") {
        document.body.style.backgroundImage = "url('../assets/chicago.jpg')";
    } else if (city.value == "columbus" || city.value == "Columbus") {
        document.body.style.backgroundImage = "url('../assets/columbus.jpg')";
    } if (city.value == "dallas" || city.value == "Dallas") {
        document.body.style.backgroundImage = "url('../assets/dallas.jpg')";
    } else if (city.value == "dc" || city.value == "washington" || city.value == "DC" || city.value == "Washington"|| city.value == "Washington DC") {
        document.body.style.backgroundImage = "url('../assets/dc.jpg')";
    } if (city.value == "denver" || city.value == "Denver") {
        document.body.style.backgroundImage = "url('../assets/denver.jpg')";
    } else if (city.value == "houston" || city.value == "Houston") {
        document.body.style.backgroundImage = "url('../assets/houston.jpg')";
    } if (city.value == "indianapolis" || city.value == "Indianapolis") {
        document.body.style.backgroundImage = "url('../assets/indianapolis.jpg')";
    } else if (city.value == "irvine" || city.value == "Irvine") {
        document.body.style.backgroundImage = "url('../assets/irvine.jpg')";
    } if (city.value == "la" || city.value == "los angeles" || city.value == "LA" || city.value == "Los Angeles") {
        document.body.style.backgroundImage = "url('../assets/la.jpg')";
    } else if (city.value == "miami" || city.value == "Miami") {
        document.body.style.backgroundImage = "url('../assets/miami.jpg')";
    } if (city.value == "minneapolis" || city.value == "Minneapolis") {
        document.body.style.backgroundImage = "url('../assets/minneapolis.jpg')";
    } else if (city.value == "morristown" || city.value == "Morristown") {
        document.body.style.backgroundImage = "url('../assets/morristown.jpg')";
    } if (city.value == "nashville" || city.value == "Nashville") {
        document.body.style.backgroundImage = "url('../assets/nashville.jpg')";
    } else if (city.value == "ny" || city.value == "nyc" || city.value == "new york city" || city.value == "new york" || city.value == "New York City" || city.value == "NYC" || city.value == "New York" || city.value == "NY") {
        document.body.style.backgroundImage = "url('../assets/nyc.jpg')";
    } if (city.value == "orange county" || city.value == "orange" || city.value == "Orange County") {
        document.body.style.backgroundImage = "url('../assets/orangecounty.jpg')";
    } else if (city.value == "orlando" || city.value == "Orlando") {
        document.body.style.backgroundImage = "url('../assets/orlando.jpg')";
    } if (city.value == "palo" || city.value == "palo alto" || city.value == "Palo Alto") {
        document.body.style.backgroundImage = "url('../assets/paloalto.png')";
    } else if (city.value == "philadelphia" || city.value == "philly" || city.value == "Philadelphia" || city.value == "Philly") {
        document.body.style.backgroundImage = "url('../assets/philadelphia.jpg')";
    } if (city.value == "phoenix" || city.value == "Phoenix") {
        document.body.style.backgroundImage = "url('../assets/phoenix.jpg')";
    } else if (city.value == "pittsburgh" || city.value == "Pittsburgh") {
        document.body.style.backgroundImage = "url('../assets/pittsburgh.jpg')";
    } if (city.value == "princeton" || city.value == "Princeton") {
        document.body.style.backgroundImage = "url('../assets/princeton.jpg')";
    } else if (city.value == "sf" || city.value == "san francisco" || city.value == "SF" || city.value == "San Francisco") {
        document.body.style.backgroundImage = "url('../assets/sf.jpg')";
    } if (city.value == "san jose" || city.value == "San Jose") {
        document.body.style.backgroundImage = "url('../assets/sanjose.jpg')";
    } else if (city.value == "seattle" || city.value == "Seattle") {
        document.body.style.backgroundImage = "url('../assets/seattle.jpg')";
    } if (city.value == "sv" || city.value == "silicon valley" || city.value == "SV" || city.value == "Silicon Valley") {
        document.body.style.backgroundImage = "url('../assets/sv.jpg')";
    } else if (city.value == "st louis" || city.value == "st. louis" || city.value == "st." | city.value == "St Louis" || city.value == "St. Louis" || city.value == "St. louis") {
        document.body.style.backgroundImage = "url('../assets/stlouis.jpg')";
    } if (city.value == "stamford" || city.value == "Stamford") {
        document.body.style.backgroundImage = "url('../assets/stamford.jpg')";
    } else if (city.value == "toronto" || city.value == "Toronto") {
        document.body.style.backgroundImage = "url('../assets/toronto.jpg')";
    } if (city.value == "vancouver" || city.value == "Vancouver") {
        document.body.style.backgroundImage = "url('../assets/vancouver.jpg')";
    } 
    }