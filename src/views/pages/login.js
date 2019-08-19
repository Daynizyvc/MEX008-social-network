let Login = {
    render: async() => {
        let view = /*html*/ `
        
<section class="login" id="login">
  <div class="login-body">

      <div class="info-user">
          <input type="button" name="close" value="X" id="close">
          <a id="loginFacebook" class="fb-button" href="#">Iniciar sesión con facebook</a>
          <a id="loginGoogle" class="google-button" href="#">Iniciar sesión con google</a>
          <div>
              <div class="line">&nbsp;</div>
              <div class="leyend"> O </div>
              <div class="line">&nbsp;</div>
          </div>

          <form name="login" id="authentication-form">
              <input type="text" name="email" id="email-login" placeholder="email" value="">
              <input type="password" name="password" id="password-login" placeholder="Contraseña" value = "">
              <button type="submit" class="enter-button" id="login-count">Iniciar</button>
          </form>
      </div>
  </div>
  </section>
`;
        return view;
    },
    // Esta es una llamada separada, ya que solo se pueden registrar después de pintar el DOM
    // Todo el código relacionado con las interacciones DOM y los controles entran aquí.
    after_render: async() => {

        const eMail = document.getElementById("email-login");
        const passWord = document.getElementById("password-login");
        const loginSession = document.getElementById("login-count");   
        
        loginSession.addEventListener('click', () =>
            window.loginS(eMail, passWord)
        );        
        
        const btnFacebook = document.getElementById("loginFacebook");        
        btnFacebook.addEventListener("click", signInFacebook);
           
        const btnGmail = document.getElementById("loginGoogle");
        btnGmail.addEventListener("click", registerGmail);
  }
};

export default Login;