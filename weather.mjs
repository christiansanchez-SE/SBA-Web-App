let result = document.getElementById("result");
let searchButton = document.getElementById("searchBtn");
let cityRef = document.getElementById("city");
let weatherIcon = document.querySelector(".weatherIcon")

export async function getTemp() {
    const cityValue = cityRef.value;
    if (cityValue.length === 0){
        result.innerHTML = `Please enter a city name`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=aa459fca760500cc0965198c715b1e6e&units=metric`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
              result.innerHTML = `${cityValue} <br>
               Temperature: ${json.main.temp}°C <br>
               Feels Like: ${json.main.feels_like} <br>
               Temp Max: ${json.main.temp_max} <br>
               Temp Min: ${json.main.temp_min}
               `
               let iconCode = json.weather[0].icon;
               let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
               weatherIcon.src = iconUrl;

            })
          .catch((error) => {
              console.error('Error fetching data:', error);
              result.innerHTML = 'Error fetching data. Please try again later.';
            });
    }
}
searchButton.addEventListener("click", getTemp);

