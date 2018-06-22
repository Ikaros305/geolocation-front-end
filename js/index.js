import formhandle from './formhandle';
import { alertMessage } from './success';
import { id } from './userId';
import socket from './socket';
import { handledisconnect } from './handledisconnect';
import { showPosition } from './geolocationUpdate';

// get position of user every 2 seconds
if (navigator.geolocation) {
  setInterval(function(){
    navigator.geolocation.getCurrentPosition(showPosition);
  }, 2000);
} else {
  alert('Geolocation is not supported by this browser.');
}

db.collection('geolocation').onSnapshot(snapshot => {
  let num = snapshot.docs.length
  let changes = snapshot.docChanges();
 if (changes.length > 1) {
  changes.forEach(change => {
    if (change.type == 'added') {
      if (change.doc.data().userId == id == false) {
        alertMessage(num + ' Joined In');
      }
    }
  })
 } else {
  changes.forEach(change => {
    if (change.type == 'added') {
      if (change.doc.data().userId == id == false) {
        alertMessage(change.doc.data().name + ' Joined In');
      }
    }
  })
 }
})