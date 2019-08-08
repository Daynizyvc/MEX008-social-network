let Register = {

    render: async () => {
        return /*html*/ `
        <section title="Window-Register" class="section-register" id="section-register">
        <div>
            <h1>Registro</h1>
            <input type="text" placeholder="Nombre" id="register-name" class="register-name">
            <input type="email" placeholder="Ingresa tu e-mail" id="register-email" class="register-email">
            <input type="text" placeholder="Username" id="register-username" class="register-username">
            <input type="password" placeholder="Ingresa tu contraseña" id="register-password" class="register-password">
            <input type="password" placeholder="Confirmar Contraseña" id="register-cp" class="register-cp">

            <select name="Estado" size="1" class="register-select" id="register-select">
               <option value="nothing">Elige tu estado</option>
               <option value="ags">Aguascalientes</option>
               <option value="bc">Baja California</option>
               <option value="bcs">Baja California Sur</option>
               <option value="camp">Campeche</option>
               <option value="chis">Chiapas</option>
               <option value="chih">Chihuahua</option>
               <option value="cdmx">Ciudad de México</option>
               <option value="coah">Coahuila</option>
               <option value="col">Colima</option>
               <option value="dgo">Durango</option>
               <option value="gto">Guanajautao</option>
               <option value="gro">Guerrero</option>
               <option value="hgo">Hidalgo</option>
               <option value="jal">Jalisco</option>
               <option value="edomex">México</option>
               <option value="mich">Michoacán</option>
               <option value="mor">Morelos</option>
               <option value="nay">Nayarit</option>
               <option value="nl">Nuevo León</option>
               <option value="oax">Oaxaca</option>
               <option value="pue">Puebla</option>
               <option value="qro">Querétaro</option>
               <option value="qroo">Quintana Roo</option>
               <option value="slp">San Luis Potosí</option>
               <option value="sin">Sinaloa</option>
               <option value="son">Sonora</option>
               <option value="tab">Tabasco</option>
               <option value="tamps">Tamaulipas</option>              
               <option value="tlax">Tlaxcala</option>
               <option value="ver">Veracruz</option>
               <option value="yuc">Yucatán</option>
               <option value="zac">Zacatecas</option>
           </select>

            <input type="text" placeholder="Ciudad" class="register-city" id="register-city">
            <input type="text" placeholder="Unidad Habitacional" class="register-uhm" id="register-uhm">

            <input type="button" value="RegistrarMe" id="button-register" class="button-register">
        </div>
    </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        document.getElementById("register_submit_btn").addEventListener ("click",  () => {
            let email       = document.getElementById("email_input");
            let pass        = document.getElementById("pass_input");
            let repeatPass  = document.getElementById("repeat_pass_input");
            if (pass.value != repeatPass.value) {
                alert (`The passwords dont match`)
            } else if (email.value =='' | pass.value == '' | repeatPass == '') {
                alert (`The fields cannot be empty`)
            } 
            else {
                alert(`User with email ${email.value} was successfully submitted!`)
            }    
        })
    }
}

export default Register;