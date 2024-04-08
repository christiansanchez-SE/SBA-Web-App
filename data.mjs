// Instance Files for new Instances of classes and funcCall()
// import { getPhotos } from "./app.mjs";
import { getTemp } from "./weather.mjs";
import { gettempTwo } from "./weatherTwo.mjs";

// ----------------------------------------[INSTANCES]
// getPhotos();
getTemp();
gettempTwo();

let searchBtn = document.querySelector(".scrollUp");

function toggleButton(){
    window.scrollTo({top: 0, behavior:'smooth'});
}

searchBtn.addEventListener("click", toggleButton);