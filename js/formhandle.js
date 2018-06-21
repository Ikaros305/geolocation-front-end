import { disconnectedMessage } from './disconnected';
import { initMap } from './map';
import { id } from './userId';
import markersarray from './markers';
import { socket } from './socket';
import { serverDownCheck, ConnectionUp } from './socketConnectionCheck';
import { nameOfUser } from './checkformsubmited';

var idtostring = String(id);

let form = document.getElementById('form');
let formdiv = document.getElementById('main-bg');

form.addEventListener('submit', (e) => {
  let name = document.getElementById('name').value;
  nameOfUser.push(name);
  // remove main main-bg
  formdiv.style.display = "none";
  // set map height
  document.getElementById('map').style.height = '100%';
  // save user in database with initizlized lat and lng
  db.collection("geolocation").doc(idtostring).set({
    name: name,
    lat: 51.507351,
    lng: -0.127758,
    userId: idtostring
  })
  // initilize map
  initMap()
  e.preventDefault();
});