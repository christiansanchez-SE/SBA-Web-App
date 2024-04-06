// Main File for Classes and Functions and vars
// Fetch Request -> JSON placeholder

// let result = document.getElementById("result");
// let searchButton = document.getElementById("searchBtn");
// let cityRef = document.getElementById("city");

// export async function getTemp() {
//     let cityValue = cityRef.value;
//     if (cityValue.length == 0){
//         result.innerHTML = `Please enter a city name`
//     }else{
//         let url = `"https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=aa459fca760500cc0965198c715b1e6e&units=metric"`
//         fetch(url)
//           .then((response) => response.json())
//           .then((json) => {
//               console.log(json);
//               result.innerHTML = Temperature in ${cityValue}: ${json.main.temp}°C`;
//             });
//         }
//     }
    

let result = document.getElementById("result");
let searchButton = document.getElementById("searchBtn");
let cityRef = document.getElementById("city");

export async function getTemp() {
    const cityValue = cityRef.value;
    if (cityValue.length == 0){
        result.innerHTML = `Please enter a city name`;
    } else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=aa459fca760500cc0965198c715b1e6e&units=metric`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
              result.innerHTML = `${cityValue} <br>
               ${json.main.temp}°C
               ${json.weather[0].icon}`
              console.log(json);
            })
          .catch((error) => {
              console.error('Error fetching data:', error);
              result.innerHTML = 'Error fetching data. Please try again later.';
            });
    }
}

        
    
    
    
    
    // let container = document.querySelector('.weatherContainer');