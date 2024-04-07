// Main File for Classes and Functions and vars
// Fetch Request -> JSON placeholder

let result = document.getElementById("resultTwo");
// let searchButton = document.getElementById("searchBtn");
let cityRef = document.getElementById("city");

export async function gettempTwo() {
    const cityValue = cityRef.value;
    if (cityValue.length == 0){
        result.innerHTML = `Please enter a city name`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=aa459fca760500cc0965198c715b1e6e&units=metric`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            result.innerHTML = `
            Wind Speed: ${json.wind.speed} <br>
            Wind Direction: ${json.wind.deg}° <br>
            Temp Max: ${json.weather.id} <br>
            Temp Min: ${json.main.temp_min}
            `
           console.log(json);

            })
          .catch((error) => {
              console.error('Error fetching data:', error);
              result.innerHTML = 'Error fetching data. Please try again later.';
            });
    }
}

// searchButton.addEventListener("click", gettempTwo);
