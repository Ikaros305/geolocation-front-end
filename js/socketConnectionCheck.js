import {
  socket
} from './socket';
import { id } from './userId';
import socketId from './socket';

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
    serverDownAlert[0].innerText = 'Server Down Please wait while connect again';
    db.collection("onlineusers").doc(socketId.socketId[0]).delete().then(function () {
    })
  }),

  ConnectionUp: socket.on('connect', function () {
    body[0].classList.remove('spinner-1');
    form.style.display = 'block';
    serverDownAlert[0].style.display = 'none';
    socketId.socketId.push(socket.id);
    db.collection("onlineusers").doc(socketId.socketId[0]).set({
      userId: idtostring2,
      socketid: socket.id
    })
  })
}