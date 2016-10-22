
var config = {
  apiKey: "AIzaSyCsb9rxT5sn67SPg2Ri6ty9Cd3LJ9eTwpU",
  authDomain: "my-project-1473181399640.firebaseapp.com",
  databaseURL: "https://my-project-1473181399640.firebaseio.com",
  storageBucket: "my-project-1473181399640.appspot.com",
  messagingSenderId: "286241134059"
};
window.database;
var database = firebase.database();

// Sets up shortcuts to Firebase features and initiate firebase auth.
initFirebase = function() {
  // Shortcuts to Firebase SDK features.
  this.auth = firebase.auth();
  this.database = firebase.database();
  this.storage = firebase.storage();
  // Initiates Firebase auth and listen to auth state changes.
  this.auth.onAuthStateChanged(this.onAuthStateChanged.bind(this));
};

// Checks that the Firebase SDK has been correctly setup and configured.
checkSetup = function() {
  if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
    window.alert('You have not configured and imported the Firebase SDK. ' +
        'Make sure you go through the codelab setup instructions.');
  } else if (config.storageBucket === '') {
    window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
        'actually a Firebase bug that occurs rarely. ' +
        'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
        'and make sure the storageBucket attribute is not empty. ' +
        'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
        'displayed there.');
  }
};

window.onload = function() {
  checkSetup();
  initFirebase();
  firebase.initializeApp(config);
  var database = firebase.database();
  window.firebase = new FriendlyChat();
};