let Profile = {
    render: async() => {
        let view = /*html*/ `
            <h1>"BIENVENIDO</h1>
            <img id="user-image">
            <div id="name-user">

            </div>
        `;
    return view;
    },

    after_render: async () =>{

    }
}
export default Profile;
