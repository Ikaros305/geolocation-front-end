import formhandle from './formhandle';
import { alertMessage } from './success';
import { id } from './userId';
import socket from './socket';
import { handledisconnect } from './handledisconnect';
import { showPosition } from './geolocationUpdate';

// get position of user every 5 seconds
if (navigator.geolocation) {
  setInterval(function(){
    navigator.geolocation.getCurrentPosition(showPosition);
  }, 5000);
} else {
  alert('Geolocation is not supported by this browser.');
}


// functionality for alert messages
db.collection('geolocation').onSnapshot(snapshot => {
  let changes = snapshot.docChanges();
 if (changes.length == 1) {
  changes.forEach(change => {
    if (change.type == 'added') {
      if (change.doc.data().userId == id == false) {
        alertMessage(change.doc.data().name + ' Joined in');
      }
    }
  })
 }
})