var $stat1 = $('#stat1');

var dashboard_sucessRate = document.getElementById('success-rate');
var dashboard_noshowRate = document.getElementById('noshow-rate');

$resultstatscontainer = $('#resultstatscontainer');
$singlestatcontainer = $('#singlestatcontainer');
$resultstats = $('#resultstats');
$loadHide = $('#loadHide');
$loadHide2 = $('#loadHide2');


$loader = $('#loader');
$loader.css("display", "block");

  $tab1 = $('#tab1');
  $tab2 = $('#tab2');
  $tab3 = $('#tab3');
  $tab4 = $('#tab4');
  $tab5 = $('#tab5');
  $tab6 = $('#tab6');

  $tab1b = $('#tab1b');
  $tab2b = $('#tab2b');
  $tab3b = $('#tab3b');
  $tab4b = $('#tab4b');
  $tab5b = $('#tab5b');
  $tab6b = $('#tab6b');

  $result1 = $("#result1");
  $result2 = $("#result2");
  $result3 = $("#result3");
  $result4 = $("#result4");
  $result5 = $("#result5");
  $result6 = $("#result6");
  $result7 = $("#result7");
  $result8 = $("#result8");

  $summarybutton2018 = $('#summarybutton2018');
  $summarybutton2019 = $('#summarybutton2019');
  $summarybuttonAllData = $('#summarybuttonAllData');
  $summarybuttonCompare = $('#summarybuttonCompare');

  $resultstatscontainer = $('#resultstatscontainer');
  $singlestatcontainer = $('#singlestatcontainer');

  $lastUpdated = $('#last-updated');

  $summaryBanner1 = $('#summarybanner1');
  $summaryBanner2 = $('#summarybanner2');



// Insert Google Sheet URL below
var url = 'https://docs.google.com/spreadsheets/d/1GRyzoiGK_8wd0haXstQxts-ZhSO-hrdfT-AJ1SZgCzI/edit#gid=1668841256';


// Tabletop initiated
    function init() {
      Tabletop.init( { key: url,
                       callback: showInfo, // Function callback
                       simpleSheet: true,
                       parseNumbers: true } )
    }

    // Tabletop callback function
    function showInfo(mainData, Tabletop) {
      $loadHide.css("display", "initial");
      $loadHide2.css("display", "initial");
    $loader.css("display", "none");
    
    $resultstatscontainer.css("display", "flex");
    $resultstats.css("display", "flex");

    $lastUpdated.append($("<p></p>").text(  "Database last updated on" + " " + mainData[mainData.length-1].eventDate));


    var data2018 = []; // 2018 data - if mainData eventDate includes '2018'

    for (var i = 0; i < mainData.length; i++) {
      if (mainData[i].eventDate.includes(2018)){
        data2018.push(mainData[i])
      }
    }
    
    var data2019 = []; // 2019 data - if mainData eventDate includes '2019'
    
    for (var i = 0; i < mainData.length; i++) {
      if (mainData[i].eventDate.includes(2019)){
        data2019.push(mainData[i])
      }
    }

   
    var dashboard_successRateAverageArr = [];

for (var i = 0; i < mainData.length; i++) {
 dashboard_successRateAverageArr.push(mainData[i].finalProspects / mainData[i].targetAttendees);
}


function getAvg(dashboard_successRateAverageArr) {
  return dashboard_successRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / dashboard_successRateAverageArr.length;
}
console.log("Success rate Array:" + " " + "[" + dashboard_successRateAverageArr + "]");
console.log("Total average success rate for this search =" + " " + getAvg(dashboard_successRateAverageArr));

console.log(getAvg(dashboard_successRateAverageArr).toFixed(4) * 100 + "%");
$resultstats.innerHTML = "Success Rate:" + " " + getAvg(dashboard_successRateAverageArr).toFixed(4) * 100 + "%";

console.log(ss.max(dashboard_successRateAverageArr).toFixed(4) * 100 + "%");


var dashboard_noshowRateAverageArr = [];

for (var i = 0; i < mainData.length; i++) {

    dashboard_noshowRateAverageArr.push(mainData[i].noShows / mainData[i].yesAdjusted);
}


function getAvg(dashboard_noshowRateAverageArr) {
    return dashboard_noshowRateAverageArr.reduce(function (p, c) { 
      return p + c;
    }) / dashboard_noshowRateAverageArr.length;
  }
  console.log("No show Array:" + " " + "[" + dashboard_noshowRateAverageArr + "]");
  console.log("Total average no show rate for this search =" + " " + getAvg(dashboard_noshowRateAverageArr));
  
  
  // Toal no show/canellation Rate Array to calculate search average
  var dashboard_noshowRateAverageArr = [];
  
  for (var i = 0; i < mainData.length; i++) {
  
    dashboard_noshowRateAverageArr.push(mainData[i].noShows / mainData[i].yesAdjusted);
  }
  
  function getAvg(dashboard_noshowRateAverageArr) {
    return dashboard_noshowRateAverageArr.reduce(function (p, c) { 
      return p + c;
    }) / dashboard_noshowRateAverageArr.length;
  }

  var dashboard_noShowCancellationAverageArr = [];

  for (var i = 0; i < mainData.length; i++) {
  
    dashboard_noShowCancellationAverageArr.push(mainData[i].nsCancelTotal / mainData[i].yesAdjusted);
  }
  
  function getAvg(dashboard_noShowCancellationAverageArr) {
    return dashboard_noShowCancellationAverageArr.reduce(function (p, c) { 
      return p + c;
    }) / dashboard_noShowCancellationAverageArr.length;
  }

  var dashboard_cancellationAverageArr = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_cancellationAverageArr.push((mainData[i].nsCancelTotal - mainData[i].noShows) / mainData[i].yesAdjusted);
}

function getAvg(dashboard_cancellationAverageArr) {
  return dashboard_cancellationAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / dashboard_cancellationAverageArr.length;

  
}


var dashboard_responseRateAverageArr = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_responseRateAverageArr.push((mainData[i].yesProspectsAdjusted + mainData[i].no) / mainData[i].listSize);
}

function getAvg(dashboard_responseRateAverageArr) {
  return dashboard_responseRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / dashboard_responseRateAverageArr.length;

}


var dashboard_rsvpRateAverageArr = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_rsvpRateAverageArr.push(mainData[i].yesProspectsAdjusted/ mainData[i].listSize);
}

function getAvg(dashboard_rsvpRateAverageArr) {
  return dashboard_rsvpRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / dashboard_rsvpRateAverageArr.length;

}

var dashboard_conversionRateAverageArr = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_conversionRateAverageArr.push(mainData[i].finalProspects/ mainData[i].listSize);
}

function getAvg(dashboard_conversionRateAverageArr) {
  return dashboard_conversionRateAverageArr.reduce(function (p, c) { 
    return p + c;
  }) / dashboard_conversionRateAverageArr.length;

}


var dashboard_listSize = [];

for (var i = 0; i < mainData.length; i++) { 
  dashboard_listSize.push(mainData[i].listSize);

}



console.log(dashboard_listSize);

dashboard_totalProspects = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_totalProspects.push(mainData[i].finalProspects);
}

// Overall Total Prospects
var dashboard_totalProspects = [];

for (var i = 0; i < mainData.length; i++) {

  dashboard_totalProspects.push((mainData[i].finalProspects));
}

console.log(ss.sum(dashboard_totalProspects)/mainData.length);

// 2018 Total Prospects
var dashboard_totalProspects2018 = [];

for (var i = 0; i < data2018.length; i++) {

  dashboard_totalProspects2018.push((data2018[i].finalProspects));
}

// 2019 Total Prospects
var dashboard_totalProspects2019 = [];

for (var i = 0; i < data2019.length; i++) {

  dashboard_totalProspects2019.push((data2019[i].finalProspects));
}



// Overall Total Panelists
var dashboard_totalPanelists = [];

for (var i = 0; i < mainData.length; i++) {


  dashboard_totalPanelists.push((mainData[i].panelists));
}

// Total Panelists 2018
var dashboard_totalPanelists2018 = [];

for (var i = 0; i < data2018.length; i++) {

  dashboard_totalPanelists2018.push((data2018[i].panelists));
}

// Total Panelists 2019
var dashboard_totalPanelists2019 = [];

for (var i = 0; i < data2019.length; i++) {

  dashboard_totalPanelists2019.push((data2019[i].panelists));
}


  // Average list size
var avg = Array.from(mainData.reduce(
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


console.log("Average list size for this search is:" + " " + avg[22].average);
console.log(avg);


// unique overall
var uniqueCity = [];
var uniqueFunction = [];
var uniqueContent = [];
var uniqueClient = [];

for (var i = 0; i < mainData.length; i++) {  
    
if (uniqueCity.indexOf(mainData[i].cityName) === -1) {
  uniqueCity.push(mainData[i].cityName);
}

if (uniqueFunction.indexOf(mainData[i].attendeeFunction) === -1) {
  uniqueFunction.push(mainData[i].attendeeFunction);
}

if (uniqueContent.indexOf(mainData[i].contentCategoryMutEx) === -1) {
  uniqueContent.push(mainData[i].contentCategoryMutEx);
}

if (uniqueClient.indexOf(mainData[i].clientName) === -1) {
  uniqueClient.push(mainData[i].clientName);
}
}


// unique 2018
var uniqueCity2018 = [];
var uniqueFunction2018 = [];
var uniqueContent2018 = [];
var uniqueClient2018 = [];

for (var i = 0; i < data2018.length; i++) {  
    
if (uniqueCity2018.indexOf(data2018[i].cityName) === -1) {
  uniqueCity2018.push(data2018[i].cityName);
}

if (uniqueFunction2018.indexOf(data2018[i].attendeeFunction) === -1) {
  uniqueFunction2018.push(data2018[i].attendeeFunction);
}

if (uniqueContent2018.indexOf(data2018[i].contentCategoryMutEx) === -1) {
  uniqueContent2018.push(data2018[i].contentCategoryMutEx);
}

if (uniqueClient2018.indexOf(data2018[i].clientName) === -1) {
  uniqueClient2018.push(data2018[i].clientName);
}
}

// unique 2019
var uniqueCity2019 = [];
var uniqueFunction2019 = [];
var uniqueContent2019 = [];
var uniqueClient2019 = [];

for (var i = 0; i < data2019.length; i++) {  
    
if (uniqueCity2019.indexOf(data2019[i].cityName) === -1) {
  uniqueCity2019.push(data2019[i].cityName);
}

if (uniqueFunction2019.indexOf(data2019[i].attendeeFunction) === -1) {
  uniqueFunction2019.push(data2019[i].attendeeFunction);
}

if (uniqueContent2019.indexOf(data2019[i].contentCategoryMutEx) === -1) {
  uniqueContent2019.push(data2019[i].contentCategoryMutEx);
}

if (uniqueClient2019.indexOf(data2019[i].clientName) === -1) {
  uniqueClient2019.push(data2019[i].clientName);
}
}


$tab1.append($("<span>/span>").text(uniqueCity2019.length).append($("<p>/p>").text(" " + "Cities")));
$tab2.append($("<span>/span>").text(uniqueClient2019.length).append($("<p>/p>").text(" " + "Clients")));
$tab3.append($("<span>/span>").text(data2019.length).append($("<p>/p>").text(" " + "Events")));
$tab4.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2019)).append($("<p>/p>").text(" " + "Prospects")));
$tab5.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2019)).append($("<p>/p>").text(" " + "Panelists")));


  $tab1b.append($("<span>/span>").text(uniqueCity2018.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2b.append($("<span>/span>").text(uniqueClient2018.length).append($("<p>/p>").text(" " + "Clients")));
  $tab3b.append($("<span>/span>").text(data2018.length).append($("<p>/p>").text(" " + "Events")));
  $tab4b.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2018)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5b.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2018)).append($("<p>/p>").text(" " + "Panelists")));


function success2018() {
  $tab1.empty();
  $tab2.empty();
  $tab3.empty();
  $tab4.empty();
  $tab5.empty();
  $summaryBanner2.css("display", "none");
  $tab1.append($("<span>/span>").text(uniqueCity2018.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2.append($("<span>/span>").text(uniqueClient2018.length - 1).append($("<p>/p>").text(" " + "Clients")));
  $tab3.append($("<span>/span>").text(data2018.length).append($("<p>/p>").text(" " + "Events")));
  $tab4.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2018)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2018)).append($("<p>/p>").text(" " + "Panelists")));
  $summaryBanner1.css("background", "url(../assets/2018.png)");
  $summaryBanner1.css("background-repeat", "no-repeat");
  $summaryBanner1.css("background-position", "center");
  $summaryBanner1.css("background-size", "contain");
}

function success2019() {
  $tab1.empty();
  $tab2.empty();
  $tab3.empty();
  $tab4.empty();
  $tab5.empty();
  $summaryBanner2.css("display", "none");
  $tab1.append($("<span>/span>").text(uniqueCity2019.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2.append($("<span>/span>").text(uniqueClient2019.length - 1).append($("<p>/p>").text(" " + "Clients")));
  $tab3.append($("<span>/span>").text(data2019.length).append($("<p>/p>").text(" " + "Events")));
  $tab4.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2019)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2019)).append($("<p>/p>").text(" " + "Panelists")));
  $summaryBanner1.css("background", "url(../assets/2019.png)");
  $summaryBanner1.css("background-repeat", "no-repeat");
  $summaryBanner1.css("background-position", "center");
  $summaryBanner1.css("background-size", "contain");
}

function successAllData() {
  $tab1.empty();
  $tab2.empty();
  $tab3.empty();
  $tab4.empty();
  $tab5.empty();
  $summaryBanner2.css("display", "none");
  $tab1.append($("<span>/span>").text(uniqueCity.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2.append($("<span>/span>").text(uniqueClient.length - 1).append($("<p>/p>").text(" " + "Clients")));
  $tab3.append($("<span>/span>").text(mainData.length).append($("<p>/p>").text(" " + "Events")));
  $tab4.append($("<span>/span>").text(ss.sum(dashboard_totalProspects)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists)).append($("<p>/p>").text(" " + "Panelists")));
  $summaryBanner1.css("background", "url(../assets/All-Data.png)");
  $summaryBanner1.css("background-repeat", "no-repeat");
  $summaryBanner1.css("background-position", "center");
  $summaryBanner1.css("background-size", "contain");
}

function successCompare() {
  $tab1.empty();
  $tab2.empty();
  $tab3.empty();
  $tab4.empty();
  $tab5.empty();
  $tab1b.empty();
  $tab2b.empty();
  $tab3b.empty();
  $tab4b.empty();
  $tab5b.empty();
  

  $summaryBanner1.css("background", "url(../assets/2018.png)");
  $summaryBanner1.css("background-repeat", "no-repeat");
  $summaryBanner1.css("background-position", "center");
  $summaryBanner1.css("background-size", "contain");
  $summaryBanner2.css("display", "flex");
  $summaryBanner2.css("background", "url(../assets/2019.png)");
  $summaryBanner2.css("background-repeat", "no-repeat");
  $summaryBanner2.css("background-position", "center");
  $summaryBanner2.css("background-size", "contain");


  $tab1.append($("<span>/span>").text(uniqueCity2018.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2.append($("<span>/span>").text(uniqueClient2018.length).append($("<p>/p>").text(" " + "Clients")));
  $tab3.append($("<span>/span>").text(data2018.length).append($("<p>/p>").text(" " + "Events")));
  $tab4.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2018)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2018)).append($("<p>/p>").text(" " + "Panelists")));
  $tab1b.append($("<span>/span>").text(uniqueCity2019.length).append($("<p>/p>").text(" " + "Cities")));
  $tab2b.append($("<span>/span>").text(uniqueClient2019.length).append($("<p>/p>").text(" " + "Clients")));
  $tab3b.append($("<span>/span>").text(data2019.length).append($("<p>/p>").text(" " + "Events")));
  $tab4b.append($("<span>/span>").text(ss.sum(dashboard_totalProspects2019)).append($("<p>/p>").text(" " + "Prospects")));
  $tab5b.append($("<span>/span>").text(ss.sum(dashboard_totalPanelists2019)).append($("<p>/p>").text(" " + "Panelists")));
  

}


$summarybutton2018.click(success2018);
$summarybutton2019.click(success2019);
$summarybuttonAllData.click(successAllData);
$summarybuttonCompare.click(successCompare);


// 2018 tabs

// 2019 tabs

  console.log(getAvg(dashboard_noshowRateAverageArr).toFixed(4) * 100 + "%");
  $result1.append($("<span></span>").text(((getAvg(dashboard_successRateAverageArr).toFixed(4) * 100).toFixed(2) + "%")));
  $result2.append($("<span></span>").text(((getAvg(dashboard_noshowRateAverageArr).toFixed(4) * 100).toFixed(2) + "%")));
  $result3.append($("<span></span>").text(((getAvg(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%")));
  $result4.append($("<span></span>").text(((getAvg(dashboard_noShowCancellationAverageArr).toFixed(4) * 100).toFixed(2) + "%")));
  $result5.append($("<span></span>").text(avg[13].average.toFixed(0))); 
  $result6.append($("<span></span>").text(((getAvg(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%")));
  $result7.append($("<span></span>").text(((getAvg(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%")));
  $result8.append($("<span></span>").text(((getAvg(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%")));

  // MAP SCRIPT START //

var mapData = [];


//Width and height of map
var width = 1480;
var height = 780;

// D3 Projection
var projection = d3.geoAlbersUsa()
					.translate([width/2, height/2])
          .scale(1425);
		
// Define path generator
var path = d3.geoPath()
			.projection(projection);

var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

//Create SVG element and append map to the SVG
var svg = d3.select("#map")
			.append("svg")
			.attr("width", width)
      .attr("height", height)
      .attr("viewBox", "0 0 " + width + " " + height)
      .attr("preserveAspectRatio", "xMidYMid meet")

// Load GeoJSON data and merge with states data
d3.json("../dashboard/boston_neighborhoods.json", function(json) {
	
	// Bind the data to the SVG and create one path per GeoJSON feature
	svg.selectAll("path")
		.data(json.features)
		.enter()
		.append("path")
		.attr("d", path)
		.style("stroke", "#fff")
    .style("stroke-width", "0.6")
    .style("fill", "#e3e3e3");
    

    for (var i = 0; i < json.length; i++) {
      console.log(json[i].features);
  }

	d3.json("../dashboard/map.json", function(data) {


   /* for (var i = 0; i < data.features.length; i++) {
      data.features[i].properties.cityName
      }; */

    console.log(data.features[9].properties.cityName);
    console.log(data.features[0].geometry.coordinates[0]);
    console.log(data.features[0].geometry.coordinates[1]);

		svg.selectAll(".shapes")
			.data(data.features)
			.enter()
			.append(function(d){
         
         if (d.type.indexOf("Feature") != -1) {
         return document.createElementNS('http://www.w3.org/2000/svg', "circle");
         } else {
           return document.createElementNS('http://www.w3.org/2000/svg', "rect");
         }
      })
      .attr("class", "shapes")

      svg.selectAll("circle")
			.attr("class", "circle")
			.attr("cx", function(d) {
				return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0];
			})
			.attr("cy", function(d) {
				return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1];
			})
			.attr("r", "10")
    .on("mouseover", function(d) {
       
       div.transition()
         .duration(200)
         .style("opacity", 0.95)
         .style("width", "20%")
         .style("height", "35%");
       
       div.html(mainData)
         .style("left", (d3.event.pageX) + "px")
         .style("top", (d3.event.pageY - 80) + "px")
         .style("font-size", "1em")
         .style("background", "#fff")
         .style("box-shadow", ("0 1px 15px 0"))
        
  
       })

     .on("mouseout", function(d) {
       div.transition()
         .duration(600)
         .style("opacity", 0);
       });

       console.log(mainData);

var mapCityList = []; // city names
var mainDataCityList = []; // city names
var cityResults = []; // all events that match cities

for (var i = 0; i < data.features.length; i++) {
  mapCityList.push(data.features[i].properties.cityName)
   
}


for (var i = 0; i < mainData.length; i++) {
  mainDataCityList.push(mainData[i].cityName)

  mainData.forEach(function(_event) {

    if (_event.cityName == mapCityList[i]) {
   
        cityResults.push(_event);
      
      }

  });
   
}

// Array for metrics upon slection
$graphMetricsArray = [
  {
    metric: "responseRate",
    label: "Response Rate",
    formula: "((e.yesProspectsAdjusted+e.no)/e.listSize * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global Response Rate:",
    kpi2Title: "Average Response Rate:",
    kpi3Title: "Highest Recorded Response Rate:",
    kpi4Title: "Lowest Recorded Response Rate:" ,
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "rsvpRate",
    label: "RSVP Rate",
    formula: "(e.yesProspectsAdjusted/e.listSize * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global RSVP Rate:",
    kpi2Title: "Average RSVP Rate:",
    kpi3Title: "Highest Recorded RSVP Rate:",
    kpi4Title: "Lowest Recorded RSVP Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_rsvpRateAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "conversionRate",
    label: "Conversion Rate",
    formula: "(e.finalProspects/e.listSize * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global Conversion Rate:",
    kpi2Title: "Average Conversion Rate:",
    kpi3Title: "Highest Recorded Conversion Rate:",
    kpi4Title: "Lowest Recorded Conversion Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_conversionRateAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "successRate",
    label: "Success Rate",
    formula: "(e.finalProspects/e.targetAttendees * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global Success Rate:",
    kpi2Title: "Average Success Rate:",
    kpi3Title: "Highest Recorded Success Rate:",
    kpi4Title: "Lowest Recorded Success Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_successRateAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_successRateAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_successRateAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_successRateAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_successRateAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "noShowRate",
    label: "No Show Rate",
    formula: "(e.noShows/e.yesProspectsAdjusted * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    tick: "%",
    kpi1Title: "Global No Show Rate:",
    kpi2Title: "Average No Show Rate:",
    kpi3Title: "Highest Recorded No Show Rate:",
    kpi4Title: "Lowest Recorded No Show Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_noshowRateAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_noshowRateAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_noshowRateAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_noshowRateAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_noshowRateAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "cancellationRate",
    label: "Cancellation Rate",
    formula: "(((e.nsCancelTotal - e.noShows)/e.yesProspectsAdjusted) * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global Cancellation Rate:",
    kpi2Title: "Average Cancellation Rate:",
    kpi3Title: "Highest Recorded Cancellation Rate:",
    kpi4Title: "Lowest Recorded Cancellation Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_cancellationAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "noShowCancellationRate",
    label: "No Show + Cancellation Rate",
    formula: "(e.nsCancelTotal/e.yesProspectsAdjusted * 100).toFixed(2)",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global No show + Cancellation Rate:",
    kpi2Title: "Average No Show + Cancellation Rate:",
    kpi3Title: "Highest Recorded No Show + Cancellation Rate:",
    kpi4Title: "Lowest Recorded No Show + Cancellation Rate:",
    kpi5Title: "Variance:",
    kpi1Number: (getAvg(dashboard_noShowCancellationAverageArr) * 100).toFixed(2) + "%",
    kpi2Number: (getAvg(dashboard_noShowCancellationAverageArr) * 100).toFixed(2) + "%",
    kpi3Number: (ss.max(dashboard_noShowCancellationAverageArr) * 100).toFixed(2) + "%",
    kpi4Number: (ss.min(dashboard_noShowCancellationAverageArr) * 100).toFixed(2) + "%",
    kpi5Number: (ss.variance(dashboard_noShowCancellationAverageArr) * 100).toFixed(2) + "%",
  },
  {
    metric: "finalProspects",
    label: "Final Prospects",
    formula: "e.finalProspects",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global Final Prospects",
    kpi2Title: "Average Final Prospects",
    kpi3Title: "Highest Recorded Final Prospects",
    kpi4Title: "Lowest Recorded Final Prospects",
    kpi5Title: "Variance:",
    kpi1Number: (ss.sum(dashboard_totalProspects)/mainData.length).toFixed(0),
    kpi2Number: (ss.sum(dashboard_totalProspects)/mainData.length).toFixed(0),
    kpi3Number: ss.max(dashboard_totalProspects),
    kpi4Number: ss.min(dashboard_totalProspects),
    kpi5Number: ss.variance(dashboard_totalProspects).toFixed(2) + "%",
  },
  {
    metric: "listSize",
    label: "List Size",
    formula: "e.listSize",
    backgroundColor: '#4d58f7',
    kpi1Title: "Global List Size",
    kpi2Title: "Average List Size",
    kpi3Title: "Highest Recorded List Size",
    kpi4Title: "Lowest Recorded List Size",
    kpi5Title: "Variance:",
    kpi1Number: getAvg(dashboard_listSize).toFixed(0),
    kpi2Number: getAvg(dashboard_listSize).toFixed(0),
    kpi3Number: ss.max(dashboard_listSize),
    kpi4Number: ss.min(dashboard_listSize),
    kpi5Number: ss.variance(dashboard_listSize).toFixed(2) + "%",  },
  ];

$ctx = $('#summarygraph1');
$chartMetric = "((e.yesProspectsAdjusted+e.no)/e.listSize * 100).toFixed(2)";
$chartLabel = "Response Rate";
$customChartTooltipTitle = [];
$metricSelect = $('#metric-select');

                $kpi1Title = $('#kpi1-title');
                $kpi2Title = $('#kpi2-title');
                $kpi3Title = $('#kpi3-title');
                $kpi4Title = $('#kpi4-title');
                $kpi5Title = $('#kpi5-title');
              
                $kpi1Number = $('#kpi1-number');
                $kpi2Number = $('#kpi2-number');
                $kpi3Number = $('#kpi3-number');
                $kpi4Number = $('#kpi4-number');
                $kpi5Number = $('#kpi5-number');

                $kpi1Number.html((getAvg(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%");
                $kpi2Number.html((getAvg(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%");
                $kpi3Number.html((ss.max(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%");
                $kpi4Number.html((ss.min(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%");
                $kpi5Number.html((ss.sampleVariance(dashboard_responseRateAverageArr) * 100).toFixed(2) + "%");

for (var i = 0; i < mainData.length; i++) {
    $customChartTooltipTitle.push(mainData[i].eventDate + " " + mainData[i].clientName + " " + mainData[i].cityName);
  };

// Original graph when landing on the page

var myChart = new Chart($ctx, {
  type: 'bar',
  data: {
      labels: mainData.map(function(e) {
          return e.eventDate}),
      datasets: [{
          label: $chartLabel,
          data: mainData.map(function(e) {
              return eval($chartMetric)}),
          backgroundColor: 
              '#4d58f7',
          borderColor: [
              null
          ],
          borderWidth: 1
      },
]
  },
  options: {
      scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                if ($chartLabel == "Final Prospects") {
                  return  value
                } else
                  return  value + "+";
      }
          }
          }],
  
      },
      tooltips: {
        titleFontSize: 16,
        bodyFontSize: 18,
        titleSpacing: 2,
        // Disable the on-canvas tooltip
        enabled: true,
        callbacks: {
          
          title: function(tooltipItem, data) {
            return $customChartTooltipTitle[tooltipItem[0].index];
        },
        label: function(tooltipItems, data) { 
          return $chartLabel + ":" + " " + tooltipItems.yLabel + "%";
      },
      
     }
    },
    legend: {
      display: true,
      labels: {
        fontSize: 25,
      }
    }
  },
});


// function for metric selection - Graph changes
 function graphChange() {
   
  // Actual change fucnction
  $metricSelect.change(function() {

            for (var i = 0; i < $graphMetricsArray.length; i++) {

              if ($graphMetricsArray[i].metric.includes($metricSelect.val()) == true) { // if GraphMetricArray includes KPI metric choice

                $chartMetric = $graphMetricsArray[i].formula;
                $chartLabel = $graphMetricsArray[i].label;
                $chartBackgroundColor = $graphMetricsArray[i].backgroundColor;

                $kpi1Title.html($graphMetricsArray[i].kpi1Title + "<br><span>Cumulative number of responses / Cumulative list size</span>");
                $kpi2Title.html($graphMetricsArray[i].kpi2Title + "<br><span>Total of each event's response rate / Total number of events</span>");
                $kpi3Title.html($graphMetricsArray[i].kpi3Title);
                $kpi4Title.html($graphMetricsArray[i].kpi4Title);
                $kpi5Title.html($graphMetricsArray[i].kpi5Title + "<br><span>A high variance indicates that the data points are very spread out from the average, and from one another</span>");
                $kpi1Number.html($graphMetricsArray[i].kpi1Number);
                $kpi2Number.html($graphMetricsArray[i].kpi2Number);
                $kpi3Number.html($graphMetricsArray[i].kpi3Number);
                $kpi4Number.html($graphMetricsArray[i].kpi4Number);
                $kpi5Number.html($graphMetricsArray[i].kpi5Number);

                $ctx.remove();
                $('#graph-1-container').append('<canvas id="summarygraph1"><canvas>');
                $ctx = $('#summarygraph1');

                // Graph when change KPI metric - Original graph is removed and replaced

                var myChart = new Chart($ctx, {
                  type: 'bar',
                  data: {
                      labels: mainData.map(function(e) {
                          return e.eventDate}),
                      datasets: [{
                          label: $chartLabel,
                          data: mainData.map(function(e) {
                              return eval($chartMetric)})
                              ,
                            backgroundColor:
                            $chartBackgroundColor                   
                          ,
                          borderColor: [
                            null
                          ],
                          borderWidth: 1
                      },
                ]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                            ticks: {
                              beginAtZero: true,
                              // Include a dollar sign in the ticks
                              callback: function(value, index, values) {
                                if ($chartLabel == "Final Prospects") {
                                  return value
                                } else if ($chartLabel == "List Size") {
                                  return value
                                } else
                                  return value + "%";
                      }
                          }
                          }]
                      },
                      tooltips: {
                        titleFontSize: 16,
                        bodyFontSize: 18,
                        titleSpacing: 2,
                        // Disable the on-canvas tooltip
                        enabled: true,
                        callbacks: {
                          title: function(tooltipItem, data) {
                            return $customChartTooltipTitle[tooltipItem[0].index];
                        },
                        label: function(tooltipItems, data) {
                          if ($chartLabel == "Final Prospects") {
                            return $chartLabel + ":" + " " + tooltipItems.yLabel
                          } else if ($chartLabel == "List Size") {
                            return $chartLabel + ":" + " " + tooltipItems.yLabel
                          } else
                            return $chartLabel + ":" + " " + tooltipItems.yLabel + "%";
                      },
                      
                     }
                    },
                    legend: {
                      display: true,
                      labels: {
                        fontSize: 25,
                      }
                    }
                  }
                });
              }
             };

  });

}
graphChange();


/*
var rsvpRateGraph = $('#summarygraph2');
var conversionRateGraph = $('#summarygraph3');
var successRateGraph = $('#summarygraph4');
var noShowRateGraph = $('#summarygraph5');
var cancellationGraph = $('#summarygraph6');
var noShowCancellationGraph = $('#summarygraph7');
var finalProspectsGraph = $('#summarygraph8');
*/


console.log(mapCityList);
console.log(mainDataCityList);
console.log(cityResults);


  });
  
});


}

init();