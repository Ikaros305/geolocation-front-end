import formhandle from './formhandle';
import { alertMessage } from './success';
import { id } from './userId';
import socket from './socket';
import { handledisconnect } from './handledisconnect';
import { showPosition } from './geolocationUpdate';

// get position of user
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(showPosition);
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