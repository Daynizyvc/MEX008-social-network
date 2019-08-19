//Initialize Cloud Firestore
var db = firebase.firestore();

//Agregando documentos
const obtainUserDate = (nameUser, lastNameUser, eMail, userName, stateUser, cityUser, uhmUser) => {
  const name = nameUser.value;
  const lastName = lastNameUser.value;
  const emailU = eMail.value;
  const usernameU = userName.value;
  const stateU = stateUser.value
  const cityU = cityUser.value;
  const uhmU = uhmUser.value;

  db.collection("userDate").add({
     first: name,
     last: lastName,
     email: emailU,
     username: usernameU,
     state: stateU,
     city:cityU,
     uhm: uhmU  
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
  return;
}

//Leer documentos
const showDate = (paintDate) =>{
  let paint = paintDate;  
  db.collection("userDate").onSnapshot((querySnapshot) => {
    //limpiar la tabla
    paint.innerHTML = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().first}`);
      paint.innerHTML += `
      <p>Nombre:${doc.data().first}</p>
      <p>Ciudad:${doc.data().city}</p>
      <p>UHM:${doc.data().uhm}</p>`
    });
});
}

window.showDate = showDate;
window.obtainUserDate = obtainUserDate;
