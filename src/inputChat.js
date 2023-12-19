class InputChat extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })

        document.addEventListener('new-chat', this.handleNewChat.bind(this));
        document.addEventListener('show-stop', this.handleShowStop.bind(this));
        document.addEventListener('hide-stop', this.handleHideStop.bind(this));
    }

    static get observedAttributes () {
        return ['state-button']
    }

    attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'state-button') {
            if(newValue == "stop"){
                this.showButtonStop();
            } else {
                this.hideButtonStop();
            }
            
        }
    }

    handleNewChat = event => {
        this.render();
    }

    handleShowStop = event => {
        // const inputBar = this.shadow.querySelector(".message-input");
        this.setAttribute('state-button','stop');
        // this.showButtonStop();
    }
    handleHideStop = event => {
        // const inputBar = this.shadow.querySelector(".message-input");
        this.setAttribute('state-button','play');
        // this.hideButtonStop();
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



                .user-interaction{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding: 1.5rem 0;
                    width: 45%;
                }

                .message-input .attach-button button {
                    background-color: hsl(0, 0%, 100%, 0);
                    border: none;
                    border-radius: 0.5rem;
                    cursor: pointer;
                }

                .message-input .attach-button svg {
                    color: hsl(0, 0%, 100%);
                    width: 1.3rem;
                }

                .message-input form {
                    align-items: center;
                    border: 1px solid hsl(0, 0%, 40%);
                    border-radius: 1rem;
                    display: flex;
                    justify-content: center;
                    padding: 0.5rem;
                }

                .message-input form .form-element {
                    height: max-content;
                    width: 90%
                }

                .message-input form .form-element textarea {
                    background-color: hsl(235, 11%, 23%);
                    border: none;
                    color: hsl(0, 0%, 100%);
                    font-family: 'SoehneBuch', Arial;
                    font-size: 0.9rem;
                    height: 1.2rem;
                    max-height: 5rem;
                    resize: none;
                    width: 100%;
                }

                .message-input form .form-element textarea::placeholder {
                    color: hsl(0, 0%, 100%, 0.5);
                    font-weight: 300;
                }

                .message-input form .form-element textarea:focus {
                    outline: none;
                }

                .message-input .send-button button {
                    align-items: center;
                    background-color: hsl(235, 7%, 31%);
                    border: none;
                    border-radius: 0.5rem;
                    display: flex;
                    padding: 0.1rem 0.2rem;
                }

                .message-input .send-button svg {
                    color: hsl(0, 0%, 0%, 0.3);
                    width: 1.3rem;
                }

                .message-input .send-button.active button {
                    background-color: rgb(255, 255, 255);
                    cursor: pointer;
                }

                .message-input .send-button.active svg {
                    color: hsl(0, 0%, 0%);
                }

                



                .message-input .stop-button button {
                    align-items: center;
                    background-color: white;
                    border: none;
                    border-radius: 0.5rem;
                    display: flex;
                    padding: 0.1rem 0.2rem;
                    cursor: pointer;
                    
                }

                .message-input .stop-button svg {
                    color: hsl(0, 0%, 0%, 0.3);
                    width: 1.5rem;
                }

                .message-input .stop-button.active button {
                    background-color: rgb(255, 255, 255);
                    cursor: pointer;
                }

                .message-input .stop-button.active svg {
                    color: hsl(0, 0%, 0%);
                }

                .send-button .tooltiptext {
                    background-color: black;
                    border-radius: 0.5rem;
                    color: #fff;
                    font-family: 'SoehneBuch', sans-serif;
                    font-size: 0.8rem;
                    margin-top: -5rem;
                    margin-left: -3rem;
                    opacity: 0;
                    padding: 0.5rem 0;
                    pointer-events: none;
                    position: absolute;
                    text-align: center;
                    transition: opacity 0.3s;
                    width: 120px;
                    z-index: 1001;
                }

                .send-button .tooltiptext::after {
                    border-width: 5px;
                    border-style: solid;
                    border-color: rgb(0, 0, 0) transparent transparent transparent;
                    content: "";
                    left: 45%;
                    position: absolute;
                    top: 100%;
                }

                .send-button:hover .tooltiptext {
                    opacity: 1;
                    visibility: visible;
                }

                .stop-button .tooltiptext {
                    background-color: black;
                    border-radius: 0.5rem;
                    color: #fff;
                    font-family: 'SoehneBuch', sans-serif;
                    font-size: 0.8rem;
                    margin-top: -5rem;
                    margin-left: -3rem;
                    opacity: 0;
                    padding: 0.5rem 0;
                    pointer-events: none;
                    position: absolute;
                    text-align: center;
                    transition: opacity 0.3s;
                    width: 120px;
                    z-index: 1001;
                }

                .stop-button .tooltiptext::after {
                    border-width: 5px;
                    border-style: solid;
                    border-color: rgb(0, 0, 0) transparent transparent transparent;
                    content: "";
                    left: 45%;
                    position: absolute;
                    top: 100%;
                }

                .stop-button:hover .tooltiptext {
                    opacity: 1;
                    visibility: visible;
                }

                .hide{
                    display:none;
                }

            </style>
    
            <section class="message-input">
                <form>
                    <div class="attach-button">
                        <button>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path>
                            </svg> 
                            <input multiple="" type="file" tabindex="-1" class="hidden" style="display: none;">
                        </button>
                    </div>
                    <div class="form-element">
                        <textarea placeholder="Message ChatGPT..."></textarea>
                    </div>
                    <div class="send-button dissabled">
                        <button disabled=true>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
                                <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>            
                            <span class="tooltiptext">Enviar mensaje</span>                  
                        </button>
                    </div>
                    <div class="stop-button hide">
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>stop-circle-outline</title><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4M9,9V15H15V9" /></svg>          
                            <span class="tooltiptext">Parar</span>                  
                        </button>
                    </div>
                </form>
            </section>
            `

        let textArea = this.shadow.querySelector(".form-element");
        let button = this.shadow.querySelector(".send-button");

        textArea.addEventListener('input', (event) => {

            if (event.target.tagName === 'TEXTAREA') {
                event.preventDefault();

                if (event.target.value == "" || event.target.value == null) {
                    button.classList.remove("active");
                    button.querySelector("button").disabled = true;
                } else {
                    button.classList.add("active");
                    button.querySelector("button").disabled = false;

                }
            }
        })

        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        let konamiCodePosition = 0;

        textArea.addEventListener('keydown', (event) => {

            if (event.target.tagName === 'TEXTAREA') {
                if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    if (button.classList.contains('active')) {
                        button.click();
                    }

                    event.target.value = null;
                }

                // Verificar el código Konami
                if (event.key === konamiCode[konamiCodePosition]) {
                    konamiCodePosition++;

                    // Si se ha ingresado correctamente el código Konami
                    if (konamiCodePosition === konamiCode.length) {
                        activateKonamiCode();
                        konamiCodePosition = 0; // Reiniciar la posición del código Konami
                    }
                } else {
                    konamiCodePosition = 0; // Reiniciar si se ingresa una tecla incorrecta
                }
            }
        });

        function activateKonamiCode() {
            // Acción especial cuando se ingresa correctamente el código Konami
            window.open("https://github.com/christiancampos123", "_blank");
            // Puedes realizar la acción especial que desees aquí
        }
        let borrar = true;


        button.addEventListener('click', (event) => {
            event.preventDefault();
            let buttonStop = this.shadow.querySelector(".stop-button");
            while (buttonStop.classList.contains("hide")) {
                if (borrar) {
                    const customEvent = new CustomEvent('clean-chat');
                    document.dispatchEvent(customEvent);
                    borrar = false;
                }
                button.classList.remove("active");
                button.querySelector("button").disabled = true;
                const area = this.shadow.querySelector("textarea");
                let myChatText = area.value;
                const customEventChat = new CustomEvent('chat-value', {
                    detail: {
                        chatText: myChatText
                    },
                });
                document.dispatchEvent(customEventChat);
                area.value = "";
            }
        })
        let buttonStop = this.shadow.querySelector(".stop-button");
        buttonStop.addEventListener('click', (event) => {
            event.preventDefault();
            this.hideButtonStop();

        })

    }

    showButtonStop() {
        let button = this.shadow.querySelector(".send-button");
        button.classList.add("hide");
        let buttonStop = this.shadow.querySelector(".stop-button");
        buttonStop.classList.remove("hide");
        button.querySelector("button").disabled = true;
    }

    hideButtonStop() {
        let button = this.shadow.querySelector(".send-button");
        button.classList.remove("hide");
        let buttonStop = this.shadow.querySelector(".stop-button");
        buttonStop.classList.add("hide");

    }

}

customElements.define('input-chat-component', InputChat);