
 //Funciones puras//  
   // Initialize Firebase
     firebase.initializeApp(firebaseConfig);  

  //************************************** */Registro del usuario****************************************************************************************
  const registerUser = (emailR, passwordR, cpasswordR) => {
    // const formOne = document.getElementById("form-sign");
    //Guardan los datos que ingresa el usuario para registrarse
    const eMail = emailR.value;
    const password = passwordR.value;
    const confirmPassword = cpasswordR.value;

    //Usamos la función de firebase para crear un usuario con contraseña y verificamos que su contraseña y su confirmación coincidan para poder registrarlo.
    if(password === confirmPassword){
      firebase.auth().createUserWithEmailAndPassword(eMail, password)
      .then(function(){
      console.log("Se ha enviado un e-mail a tu correo")
      sendEmailVerification();
      })
      .then(() => goLogin)
      .catch(function(error){
        // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        // ...
          alert(error);
          alert(errorMessage);
      })
    }else{
      alert("La confirmación de contraseña no coincide");
    }
    return;
  };
  window.registerUser = registerUser;
//**********************Función que ve si el usuario esta activo o no **************************************
  //Verifica siempre la pagina Web    
  const observador = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          console.log("Usuario activo")
          showNext(user);
          // User is signed in.
          const displayName = user.displayName;
          const email = user.email;

          console.log("------------------");
          console.log(user.emailVerified);
          console.log("------------------");

          const emailVerified = user.emailVerified;
          const photoURL = user.photoURL;
          const isAnonymous = user.isAnonymous;
          const uid = user.uid;
          const providerData = user.providerData;
          // ...
        } else {
          // User is signed out.
          // ...
          console.log("No existe el usuario activo")
        }
      });
  }  
  observador();
  
    //****************************************************Manda un e-mail de verificación al correo del usuario para que verifique su correo y pueda ingresar a la app***************
    
//Función que manda el email de verificación al correo electrónico del usuario.
  const sendEmailVerification = () => {
       // [START sendemailverification]
       const user = firebase.auth().currentUser;
       user.sendEmailVerification().then(function() {
       // Email Verification sent!
       // [START_EXCLUDE]
       alert('Enviando correo');
       // [END_EXCLUDE]
       // [END sendemailverification]
       }).catch(function(error){
       console.log(error);
       });
     }
     
//*********************************************Inicio de sesión************************************************
//Ingreso de usuario
const loginS = (email, password) =>{

  const emailA = email.value;
  const passwordA = password.value;

  firebase.auth().signInWithEmailAndPassword(emailA, passwordA)
  .then(() => goProfile())
    .catch(function(error) {        
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    console.log(errorCode);
    console.log(errorMessage);
    });
    return;
}

window.loginS = loginS;

// *************************************** El usuario inicia sesión con google**********************************************************************************
  const provider = new firebase.auth.GoogleAuthProvider();
  const registerGmail = () =>{
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .then(() => goProfile())
    .catch(function(error) {
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


// *******************************************El usuario se autentifica con Facebook****************************************************************************
//Autentificación con Facebook
const signInFacebook = () => {

  console.log('Hola Facebook');
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user
      // ... 
    })
    .then(() => goProfile())
    .catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
    });
}

//YAEL
// *************************Funcion para cerrar sesion*********************************
const logOut = () =>{
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("Saliendo...");
  }).catch(function(error) {
    // An error happened.
  });
};

// ********************************Funcion que nos dirige al Perfil*****************************
  const goProfile = () => {
    location.hash = '/profile';
  }

// ********************************Funcion que muestra el profile si el usuario esta registrado************+****

const showNext = (userA) => {
  const user = userA;
    if(user.emailVerified){
      goProfile();
    }
};

const goLogin = () => {
  location.hash = '/login';
}
//YAEL