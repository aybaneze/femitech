const facebook = document.getElementById('facebook');
const google = document.getElementById('google1');



const inGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        guardaDatos(result.user);
        console.log('inicie sesion con google');
    }).catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
    });
}


const inFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
        'display': 'popup'
    });

   window.location.href='./welcome.html';
    firebase.auth().signInWithPopup(provider).then(function (result) {
        
      console.log('hola')
        //  guardaDatos(result.user);
       
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

facebook.addEventListener('click',inFacebook)
google1.addEventListener('click', inGoogle)