import { id } from './userId';
var idtostring = String(id);
module.exports = {
  showPosition:
   //  update it main functionality
  function showPosition(position) {
    // find user by userId
    db.collection('geolocation').where('userId', '==', idtostring).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        const userId = doc.id;
        // update location 
        db.collection('geolocation').doc(userId).update({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      });
    });
  }
}