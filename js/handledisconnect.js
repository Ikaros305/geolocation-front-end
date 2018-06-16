import { markersarray } from './markers';
import { socket } from './socket';
import { disconnectedMessage } from './disconnected';
module.exports = {
  handleDisconnect:
  socket.on('disconnectId', function (data) {
    db.collection('onlineusers').where('socketid', '==', data.disconnetId).get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        markersarray.forEach(marker => {
          if (marker.id == doc.data().userId) {
            marker.setMap(null);
            disconnectedMessage(marker.content + ' Disconnected');
          }
        });
      });
    });
  })
}