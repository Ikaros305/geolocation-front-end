import { id } from './userId';
module.exports = {
  showPosition:
   //  update it main functionality
  function showPosition(position) {
    // find user by userId
    db.collection('geolocation').where('userId', '==', id).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        const userId = doc.id;
        // update location 
        db.collection('geolocation').doc(userId).update({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    });
  }
}