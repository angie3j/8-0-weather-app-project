document.querySelector('form')
    .addEventListener('submit', (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const url = `https://wttr.in/${location}?format=j1`;
fetch(url)
    .then((response) => response.json())
    .then((obj) => {
        // console.log(obj);    
        const area = obj.nearest_area[0].areaName[0].value;
        const region = obj.nearest_area[0].region[0].value;
        const country = obj.nearest_area[0].country[0].value;
        const current = obj.current_condition[0].FeelsLikeF;

        const avrg1 = obj.weather[0].avgtempF;
        const maxTemp1= obj.weather[0].maxtempF;
        const minTemp1= obj.weather[0].mintempF;

        const avrg2 = obj.weather[1].avgtempF;
        const maxTemp2= obj.weather[1].maxtempF;
        const minTemp2= obj.weather[1].mintempF;

        const avrg3 = obj.weather[2].avgtempF;
        const maxTemp3= obj.weather[2].maxtempF;
        const minTemp3= obj.weather[2].mintempF;


        document.querySelector('#current_search').innerHTML = 
        `<h2>${area}</h2>
        <p><strong>Area:</strong> ${area}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Currently:</strong> Feels like ${current}°F</p>`;

        document.querySelector('#today').innerHTML = 
        `<h3>Today</h3>
        <p><strong>Average Temperature:</strong> ${avrg1} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp1} °F</p>
        <p><strong>Min Temperature:</strong>${minTemp1} °F</p>`;
        
        document.querySelector('#tomorrow').innerHTML = 
        `<h3>Tomorrow</h3>
        <p><strong>Average Temperature:</strong> ${avrg2} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp2} °F</p>
        <p><strong>Min Temperature:</strong> ${minTemp2} °F</p>`
        
        document.querySelector('#day_after_tomorrow').innerHTML = 
        `<h3>Day After Tomorrow</h3>
        <p><strong>Average Temperature:</strong> ${avrg3} °F</p>
        <p><strong>Max Temperature:</strong> ${maxTemp3} °F</p>
        <p><strong>Min Temperature:</strong> ${minTemp3} °F</p>`;
        event.target.reset();
})
});




