// Test #2 Solution #1
// Objective: to allow the user to search for a location and show them the current weather's info. 
document.querySelector('form')
    .addEventListener('submit', (event) => {
    event.preventDefault();
    const location = event.target.location.value;
    const url = `https://wttr.in/${location}?format=j1`;
fetch(url)
    .then((response) => response.json())
    .then((obj) => {
    // console.log(obj); 
    const current = obj.current_condition[0].FeelsLikeF; 
    search(obj);

    const ul = document.querySelector("#prior");
      if (ul.firstElementChild.textContent === "No previous searches.") {
        ul.firstElementChild.remove();
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${location}</a> - ${current}°F`;

        li.addEventListener("click", (event) => {
          event.preventDefault();
          search(obj);
        });
        ul.append(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${location}</a> - ${current}°F`;
        li.addEventListener("click", (event) => {
          event.preventDefault();
          search(obj);
        });
        ul.append(li);
      }   
     event.target.reset();
})
    })



// Test #2 Problem #3 
// Objective: Store search with the name and current 'feels like' temp. in the sidebar.
// const area = obj.nearest_area[0].areaName[0].value;
// const current = obj.current_condition[0].FeelsLikeF;


