// Main File for Classes and Functions and vars
// Fetch Request -> JSON placeholder

export async function getPhotos() {
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=2XYAfxSJ8GTExudstXi0nUVeLhcX8wyIZjPosptI")
      .then((response) => response.json())
      .then((json) => {
          let container = document.querySelector('.mainContainer');
          console.log(json.photos[0].img_src); 
          let photoAlbums = document.createElement("img");
          photoAlbums.setAttribute('src', json.photos[0].img_src);
          container.appendChild(photoAlbums);
      });
  }