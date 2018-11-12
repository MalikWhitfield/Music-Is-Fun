import ItunesService from "./itunes-service.js";
import Song from "../../models/Song.js";

//PRIVATE

const itunesService = new ItunesService()

function drawSongs(results) {
  console.log(results)
  //YOUR CODING STARTS HERE
  let template = ''
  for (let i = 0; i < results.length; i++) {
    let song = results[i]
    let newCollection = song.collection
    template += `
    <div class="pb-3 pl-2 pr-2">
    <div class="card cardStyle justify-content-center" style="width: 18rem;">
            <img class="card-img-top" src="${results[i].albumArt}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-text"> ${results[i].title.substring(0, 20)}
                  </h5>
                    <p class="card-text"> ${results[i].artist.substring(0, 20)} </p>
                    <p class="card-text">${!newCollection ? '' : results[i].collection.substring(0, 20)} </p >
      <p class="card-text"> ${results[i].price} </p>
      <audio controls style="width: 100%;">
        <source src="${results[i].preview}" type="audio/mpeg">
                    </audio>
                </div>
                </div >
        </div > `
  }
  document.getElementById('songs').innerHTML = template

}


//PUBLIC
class ItunesController {
  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    $('#get-music-button').text('LOADING....');
    itunesService.getMusicByArtist(artist).then(results => {
      drawSongs(results)
      //changes button back to GET MUSIC once songs are loaded
      $('#get-music-button').text('GET MUSIC');
    })
  }


}


export default ItunesController