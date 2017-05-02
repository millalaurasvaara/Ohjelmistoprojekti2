
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA8B1aUpZFP69o6AB1w5p5JRAo52vnm0VE",
    authDomain: "all-rounders-newsfeed.firebaseapp.com",
    databaseURL: "https://all-rounders-newsfeed.firebaseio.com",
    storageBucket: "all-rounders-newsfeed.appspot.com",
    messagingSenderId: "151133491596"
  };
  firebase.initializeApp(config);

  //oma skripti

  var headText = document.getElementById("otsikko");
  var mainText = document.getElementById("viesti") ;


  var rootRef = firebase.database().ref().child('viestit');

	rootRef.on('child_added', snap =>
		{ var viesti = snap.child("viesti").val();
		var uutinen = snap.child("otsikko").val();
			$("#messages").prepend("<p><span><div id='viestiotsikko'>"+uutinen+"</div>" +
			"<div id='viestiketju'>" + viesti +"</div></span></p>");
		});
