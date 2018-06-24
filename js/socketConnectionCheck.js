import {
  socket
} from './socket';
import {
  id
} from './userId';
import socketId from './socket';
import { nameOfUser } from './checkformsubmited';
import { markersarray } from './markers';

let spinners = document.getElementsByClassName('main-bg');
let serverDownAlert = document.getElementsByClassName('serverdownalert');
document.getElementsByTagName('form#form');
let body = document.getElementsByTagName('body');
var idtostring2 = String(id);


module.exports = {
  // check if server down
  serverDownCheck: socket.on('connect_error', function () {
    serverDownAlert[0].style.display = 'block';
    body[0].classList.add('spinner-1');
    form.style.display = 'none';
    serverDownAlert[0].innerText = 'No internet connection can be found!';
    db.collection("onlineusers").doc(socketId.socketId[0]).delete().then(function () {})
    db.collection("geolocation").doc(idtostring2).delete().then(function () {})
    markersarray.forEach(marker => {
      if (marker.id === idtostring2) {
        marker.setMap(null);
      }
    });
  }),

  ConnectionUp: socket.on('connect', function () {
    body[0].classList.remove('spinner-1');
    form.style.display = 'block';
    serverDownAlert[0].style.display = 'none';
    socketId.socketId.splice(0,socketId.socketId.length);
    socketId.socketId.push(socket.id);
    db.collection("onlineusers").doc(socket.id).set({
      userId: idtostring2,
      socketid: socket.id
    }).then(function () {
      if (nameOfUser.length == 1) {
        db.collection("geolocation").doc(idtostring2).set({
          name: nameOfUser["0"],
          lat: 51.507351,
          lng: -0.127758,
          userId: idtostring2
        })
      }
    })
  })
}