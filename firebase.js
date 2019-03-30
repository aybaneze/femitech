window.onload = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            window.location.href='./welcome.html'
            // data.classList.remove("hiden");
            // Init.classList.add("hiden");
            // Profile.innerHTML = "<img style='height:140px;width:140px;border-radius:100px;float:center;' src='" + user.photoURL + "'/>";
            // UserCount.innerHTML = "<p>" + user.displayName + "</p>";
            console.log('Inicio sesion srta')
        } else {
            // Init.classList.remove("hiden");
            // data.classList.add('hiden');
            // console.log('Inicio sesion srta')
        }
       // valposteos()
    });
}
function guardaDatos(user) {
    var usuario = {
        uid: user.user.uid,
        nombre: user.user.displayName,
        email: user.user.email,
        foto: user.user.photoURL
    }
    console.log(usuario,'hey',user.user.displayName)
    let db = firebase.database().ref('femitech/'+ user.user.uid)
        db.set(usuario)

        console.log(firebase.database().ref('femitech/'+ user),firebase.database().ref())
}


const inGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function (result) {
        guardaDatos(result);
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

    firebase.auth().signInWithPopup(provider).then(function (result) {    
        guardaDatos(result);// This gives you a Facebook Access Token. You can use it to access the Facebook API.
     var token = result.credential.accessToken;
  // The signed-in user info.
     var user = result.user;
        console.log(result,'estoy en facebook')
        
      console.log('facebook')
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

let accept = document.getElementById('accept');
let cards = document.getElementById('cards');
let info = document.getElementById('info');
let next = document.getElementById('next');

let confianza = document.getElementById('confianza')
let verificacion = document.getElementById('verificacion');
let aceptModal = document.getElementById('aceptModal');
let contacto = document.getElementById('contacto');
let contactbtn = document.getElementById('contactbtn');


accept.addEventListener('click',()=>{

    cards.style.display='none';
    info.style.display='block';
})

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('#numberModal.modal');
    var instances = M.Modal.init(elems, options);
});

next.addEventListener('click',()=>{
    let number = document.getElementById('number').value;
    console.log(number)
    if(number!==''){
        console.log('number')
        info.style.display='none';
     confianza.style.display='block';
    }else{
        alert("ES IMPORTANTE PONER TU NUMERO DE TELEFONO")
    }
  
})



aceptModal.addEventListener('click',()=>{
confianza.style.display='none';
  verificacion.style.display='block';
  
})

contactbtn.addEventListener('click',()=>{
    let verif = document.getElementById('verif').value;
    if(verif!==''){
        verificacion.style.display='none';
        contacto.style.display='block'
    }else{
        alert('usted ingreso un codigo de verificación incorrecto')
    }
    
})



document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.modal').modal();
});


// if($('section').hasClass('info')){
//     $('body').css({'background':'#DAF9FB'});
// }else{
//     $('body').css({'background':'#76C5CE'});
// }

