 const search = (obj) => {
 
 // DISPLAY Area: City Name, Region, Country, and Feels Like. 
// Created variable to store all their file-paths. 
const area = obj.nearest_area[0].areaName[0].value;
const region = obj.nearest_area[0].region[0].value;
const country = obj.nearest_area[0].country[0].value;
const current = obj.current_condition[0].FeelsLikeF;

// Test #2 Solution #2
// Objective: Show the user information for the next few days. 
// DISPLAY AREA: Forecast- Today, Tomorrow, and Future.
// Created variable to store all their file-paths.

//  TODAY'S FORECAST: 
const avrg1 = obj.weather[0].avgtempF;
const maxTemp1= obj.weather[0].maxtempF;
const minTemp1= obj.weather[0].mintempF;

// TOMORROW'S FORECAST:
const avrg2 = obj.weather[1].avgtempF;
const maxTemp2= obj.weather[1].maxtempF;
const minTemp2= obj.weather[1].mintempF;

// FUTURE'S FORECAST: 
const avrg3 = obj.weather[2].avgtempF;
const maxTemp3= obj.weather[2].maxtempF;
const minTemp3= obj.weather[2].mintempF;


// Test #2 Problem #1- cont. 
// Using the .innerHTML method?? to add to the search section: h2, p, and strong elements. 
document.querySelector('#current_search').innerHTML = 
`<h2>${area}</h2>
<p><strong>Area:</strong> ${area}</p>
<p><strong>Region:</strong> ${region}</p>
<p><strong>Country:</strong> ${country}</p>
<p><strong>Currently:</strong> Feels like ${current}°F</p>`;


// Section 1- TODAY
document.querySelector('#today').innerHTML = 
`<h3>Today</h3>
<p><strong>Average Temperature:</strong> ${avrg1} °F</p>
<p><strong>Max Temperature:</strong> ${maxTemp1} °F</p>
<p><strong>Min Temperature:</strong>${minTemp1} °F</p>`;


// Section 2- TOMORROW
document.querySelector('#tomorrow').innerHTML = 
`<h3>Tomorrow</h3>
<p><strong>Average Temperature:</strong> ${avrg2} °F</p>
<p><strong>Max Temperature:</strong> ${maxTemp2} °F</p>
<p><strong>Min Temperature:</strong> ${minTemp2} °F</p>`


// Section 3- FUTURE
document.querySelector('#day_after_tomorrow').innerHTML = 
`<h3>Day After Tomorrow</h3>
<p><strong>Average Temperature:</strong> ${avrg3} °F</p>
<p><strong>Max Temperature:</strong> ${maxTemp3} °F</p>
<p><strong>Min Temperature:</strong> ${minTemp3} °F</p>`;

 }


 if (typeof search === "undefined") {
    search = undefined;
  }

  if (typeof module !== "undefined") {
    module.exports = search;
  }
  

