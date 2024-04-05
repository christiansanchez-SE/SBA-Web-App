// Main File for Classes and Functions and vars
// Fetch Request -> JSON placeholder

export async function getTemp() {
    fetch("https://api.nasa.gov/insight_weather/?api_key=2XYAfxSJ8GTExudstXi0nUVeLhcX8wyIZjPosptI&feedtype=json&ver=1.0")
      .then((response) => response.json())
      .then((data) => {
        const {
            sol_keys,
            validity_checks,
            ...solData
        } = data
        const temp = Object.entries(solData).map(([sol, data]) => {
            return {
                sol: sol
            }
        })
        let container = document.querySelector('.weatherContainer');
        console.log(data)
      });
  }