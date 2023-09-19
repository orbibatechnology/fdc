  // Initialiser Firebase
  var config = {
    apiKey: "AIzaSyDi8OZon9GkzbHYmLRTYi5uLqJ2S7UkAcA",
  authDomain: "chat-gjt.firebaseapp.com",
  databaseURL: "https://chat-gjt-default-rtdb.firebaseio.com",
  projectId: "chat-gjt",
  storageBucket: "chat-gjt.appspot.com",
  messagingSenderId: "891994535966",
  appId: "1:891994535966:web:2f524cd9b313a67d3f960f",
    
  };
  firebase.initializeApp(config);
  
  // Référencer la base de données
  var database = firebase.database();
  
  // Référencer répertoire de messages
  var messagesRef = database.ref('messages');
  
  // Écouter les changements dans la base de données et mettre à jour la chatbox en conséquence
  messagesRef.on('child_added', function(snapshot) {
  // Récupérer le message
    var message = snapshot.val();
  // Ajouter le message à la chatbox
    document.getElementById('chatbox').innerHTML += '<p>' + message.username + ': ' + message.message + '</p>';
  });
  
   // Ajouter un événement submit sur le formulaire
  document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
   // Récupérer les données du formulaire
    var username = document.getElementById('username').value;
    var message = document.getElementById('message').value;
  // Envoyer le message à la base de données
    messagesRef.push({
      username: username,
      message: message
    });
   // Réinitialiser le formulaire
    this.reset();
  });
  