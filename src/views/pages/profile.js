let Profile = {
    render: async() => {
        let view = /*html*/ `
        <section class = "profile">
            <div class="container-img">
                <div>
                    <span id="fileImage">
                    <label>
                        <input id="upload-image" type="file" accpet="image/x-png, image/gif,image/jpeg">
                        <button>Subir Imagen</button>
                    </label>
                    </span>
                
                </div>
                <div id="name-user-profile">
                    
                </div>
                <input type="button" id="btn-profile" value="PRUEBA">
            </div>

            </span>
        </section>
           
        `;
    return view;
    },

    after_render: async () =>{

        const btnPrueba = document.getElementById("btn-profile");
        const pharagraph = document.getElementById("name-user-profile");

        btnPrueba.addEventListener("click", () =>
            window.showDate(pharagraph));


        // const imageUser = document.getElementById("user-image");
        // const nameOfUser = document.getElementById("name-userA");        
        
    }
}
export default Profile;
