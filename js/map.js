import {
  markersarray
} from './markers';
import {
  id
} from './userId';
var idtostring2 = String(id);

module.exports = {
  initMap: function () {
    var center = {
      lat: 51.507351,
      lng: -0.127758
    };

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      zoom: 11
    });
    // getting data from database
    db.collection('geolocation').onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        if (change.type == 'added') {
          if (change.doc.data().userId == idtostring2) {
            // Create a marker and set its position.
            var marker = new google.maps.Marker({
              icon: './img/map-icon.png',
              content: change.doc.data().name,
              disableAutoPan: true,
              map: map,
            })
          } else {
            // Create a marker and set its position.
            var marker = new google.maps.InfoWindow({
              content: change.doc.data().name,
              disableAutoPan: true,
              map: map,
            })
          }

          marker.setPosition({
            lat: change.doc.data().lat,
            lng: change.doc.data().lng
          });
          marker.set('id', change.doc.id);
          marker.set('userId', idtostring2);
          markersarray.push(marker);
        } else if (change.type == 'modified') {
          // get modified id of document
          var docId = change.doc.id
          markersarray.forEach(marker => {
            if (marker.id == docId) {
              // update location
              marker.setPosition({
                lat: change.doc.data().lat,
                lng: change.doc.data().lng
              });
            }
          })
        }
      });
    })
  }
}