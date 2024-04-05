// Main File for Classes and Functions and vars
// Fetch Request -> JSON placeholder

export async function getTemp() {
    fetch("https://api.nasa.gov/insight_weather/?api_key=2XYAfxSJ8GTExudstXi0nUVeLhcX8wyIZjPosptI&feedtype=json&ver=1.0")
      .then((response) => response.json())
      .then((json) => {
        let container = document.querySelector('.weatherContainer');
      console.log(json)

      });
  }