let navbarProfile = {
  render: async () => {
    let view = /*html*/ `
    <nav class="navbar-profile" id="nav-profile">
      <a href="#/Timeline" id="img-nav"><img src="./img/logo-02.png" alt="Ir a Timeline"></a>
      <a href="#" class="close" id="log-out-navbar">Cerrar sesión</a>
    </nav>
     `;
    return view;
  },
  after_render: async () => {
     const closeS = document.getElementById("log-out-navbar");
     closeS.addEventListener("click", logOut);
  }
}
export default navbarProfile;
