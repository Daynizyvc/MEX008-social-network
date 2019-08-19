let Signin = {
    render: async() => {
        let view = /*html*/ `
          <section title="Window-Register" class="section-register" id="section-register">

            <form id="form-sign">
                <h1>Registro</h1>
                <input type="text" name="name" placeholder="Nombre" id="register-name" class="register-name">
                <input type="text" name="lastName" placeholder="Apellido" id="register-lastname" class="lastname">
                <input type="email" name="email" placeholder="e-mail" id="register-email" class="register-email">
                <input type="text" name="username" placeholder="Username" id="register-username" class="register-username">
                <input type="password" name="password" placeholder="Contraseña" id="register-password" class="register-password">
                <input type="password" name="cpassword" placeholder="Confirmar Contraseña" id="register-cp" class="register-cp">

                <select name="state" size="1" class="register-select" id="register-select">
                </select>

                <input type="text" name="city" placeholder="Ciudad" class="register-city" id="register-city">
                <input type="text" name="uhm" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">
                <input type="button" name="btn-register" value="RegistrarMe" id="button-register" class="button-register">
            </form>

          </section>
        `;

    return view;
    },
    after_render: async () => {
      const formOne = document.getElementById("form-sign");
      const name = formOne.name;
      const lastName = formOne.lastName
      const email = formOne.email;
      const username = formOne.username;
      const password = formOne.password;
      const cpassword = formOne.cpassword;
      const state = formOne.state;
      const city = formOne.city;
      const uhm = formOne.uhm;


      //  const username = formOne.username.value;

      const select = document.getElementById("register-select");
      const statesList = ["Elige un estado", "Aguascalientes", "Baja California", "Baja California Sur","Campeche", "Chihuahua", "Chiapas",
                          "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", 
                          "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla",
                          "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", 
                          "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"]           
      const boton = document.getElementById("button-register");
     
      //For que rellena el select con los nombres de los estados.
      for(let index=0; index<statesList.length; index ++){
        select.options[select.options.length]=new Option(statesList[index], index);
      } 
      
      const eventClick = () =>{
        window.obtainUserDate(name, lastName, email, username, state, city, uhm);
        window.registerUser(email, password, cpassword);
      }       

      boton.addEventListener('click', eventClick);  
  } 
}

export default Signin;
