// Initialize Firebase
var config = {
  apiKey: "AIzaSyBwTLfHT5IlOy6CouBcFIg2mszg0lqZtqc",
  authDomain: "fs1prod-11477.firebaseapp.com",
  databaseURL: "https://fs1prod-11477.firebaseio.com",
  projectId: "fs1prod-11477",
  storageBucket: "fs1prod-11477.appspot.com",
  messagingSenderId: "1038125792242"
};
firebase.initializeApp(config);
const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true
// })
