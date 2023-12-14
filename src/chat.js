class Chat extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })

        document.addEventListener('chat-value', (event) => {
            this.createMessages(event.detail.chatText);
            this.createMessagesGPT();
        });

    }

    connectedCallback() {
        this.render()
    }

    render() {

        this.shadow.innerHTML =
            /*html*/
            `
                <style>

                    @font-face {
                        font-family: 'SoehneBuch';
                        font-style: normal;
                        font-weight: normal;
                        src: url('/fonts/soehne-buch.woff2') format('woff2');
                    }

                    .chat{
                        gap:0.5rem;
                        position:fixed;
                        top:10%;
                        left:30%;
                        padding-top:4rem;
                        width:40vw;
                        display:flex;
                        flex-direction:column;
                    }
                    .user{
                        display:flex;
                        gap:2rem;
                    }
                    .user-logo{
                        align-items: center;
                        border-radius: 50%;
                        display: flex;
                        height: 2rem;
                        justify-content: center;
                        overflow: hidden;
                        width: 2rem;
                        min-width: 2rem;
                    }

                    .user-logo img{
                        width: 100%;
                    }

                    .user-name{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                    }

                    .user-name.h3{
                        color:black;
                    }

                    .user-name{
                    color: hsl(0, 0%, 100%);
                    font-family: 'SoehneBuch', sans-serif;
                    font-size: 0.9rem;
                    margin: 0;
                    }

                    .user-name h3 {
                        font-family: 'SoehneBuch', sans-serif;
                        font-size: 0.9rem;
                        margin: 0;
                    }
                    
                </style>
                <div class ="chat">
                </div>

            `
    }
    createMessages(text) {
        // Crear elementos
        const chatDiv = this.shadow.querySelector(".chat");
        const userSection = document.createElement('section');
        userSection.className = 'user';

        const userLogoDiv = document.createElement('div');
        userLogoDiv.className = 'user-logo';
        const userLogoImg = document.createElement('img');
        userLogoImg.src = 'images/user-avatar.png';
        userLogoImg.alt = 'avatar de usuario';
        userLogoDiv.appendChild(userLogoImg);

        const userNameDiv = document.createElement('div');
        userNameDiv.className = 'user-name';
        const userNameH3 = document.createElement('h3');
        userNameH3.textContent = text;
        userNameDiv.appendChild(userNameH3);

        // Construir la estructura del DOM
        userSection.appendChild(userLogoDiv);
        userSection.appendChild(userNameDiv);
        chatDiv.appendChild(userSection);
    }

    createMessagesGPT(){
        const chatDiv = this.shadow.querySelector(".chat");
        const userSection = document.createElement('section');
        userSection.className = 'user';

        const userLogoDiv = document.createElement('div');
        userLogoDiv.className = 'user-logo';
        const userLogoImg = document.createElement('img');
        userLogoImg.src = 'images/user-avatar.png';
        userLogoImg.alt = 'avatar de usuario';
        userLogoDiv.appendChild(userLogoImg);

        const userNameDiv = document.createElement('div');
        userNameDiv.className = 'user-name';
        const userNameH3 = document.createElement('h3');
        userNameH3.textContent = "No se que desi, pero mira una tortuga en bisi";
        userNameDiv.appendChild(userNameH3);

        // Construir la estructura del DOM
        userSection.appendChild(userLogoDiv);
        userSection.appendChild(userNameDiv);
        chatDiv.appendChild(userSection);
    }
}

customElements.define('chat-component', Chat);
