class HistoryChat extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
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


                .history{
                max-height: 80vh;
                overflow-x: hidden; 
                overflow-y: auto;
                padding: 1rem 0;
                width: 100%;
                }

                .history::-webkit-scrollbar{
                background: transparent; 
                width: 0;
                }

                .history:hover::-webkit-scrollbar{
                width: 5px; 
                }

                .history:hover::-webkit-scrollbar-thumb{
                background-color: hsl(0, 0%, 53%); 
                border-radius: 1rem;
                }

                .history:hover::-webkit-scrollbar-thumb:hover{
                background-color: hsl(0, 0%, 78%); 
                }

                .history-record{
                margin-bottom: 2rem;
                }

                .history-record-title{
                margin: 0 1rem 1rem 1rem;  
                }

                .history-record-title h3{
                color: hsl(0, 0%, 40%);
                font-family: 'SoehneBuch', sans-serif; 
                font-size: 0.65rem;
                text-transform: capitalize;
                }

                .history-record-messages ul{
                display: flex;
                flex-direction: column;
                list-style: none;
                margin: 0;
                padding: 0;
                }

                .history-record-messages ul li{
                margin: 0 0.5rem;
                max-width: 85%;
                }

                .history-record-messages ul li a{
                color: hsl(0, 0%, 100%);
                display: inline-block;
                font-family: Arial, Helvetica, sans-serif; 
                font-size: 0.8rem;
                overflow: hidden;
                padding: 0.5rem;
                position: relative;
                text-decoration: none;
                white-space: nowrap;
                width: 100%;
                z-index: 0;
                }

                .history-record-messages ul li a::after {
                background: linear-gradient(90deg, hsla(0, 0%, 0%, 0) 0%, hsla(0, 0%, 0%, 0.502) 50%, hsl(0, 0%, 0%) 100%);
                bottom: 0;
                content: '';
                pointer-events: none;
                position: absolute;
                right: 0;
                top: 0;
                width: 2rem; 
                z-index: 1000;
                } 

                .history-record-messages ul li a:hover{
                background-color: hsl(220, 4%, 13%);
                border-radius: 0.3rem;
                }

                .history-record-messages ul li a:hover::after {
                background: linear-gradient(90deg, hsla(220, 4%, 13%, 0) 0%, hsla(220, 4%, 13%, 0.5) 50%, hsla(220, 4%, 13%, 1) 100%);
                bottom: 0;
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                width: 5rem; 
                z-index: 1000;
                }
            </style>
    
            <section class="history">
            <article class="history-record">
            <div class="history-record-title">
                <h3>Hoy</h3>
            </div>
            <nav class="history-record-messages">
                <ul>
                <li>
                    <a href="">Eliminar nombres de clase</a>
                </li>
                </ul>
            </nav>
            </article>
            <article class="history-record">
            <div class="history-record-title">
                <h3>Ayer</h3>
            </div>
            <nav class="history-record-messages">
                <ul>
                <li><a href="">Tabla de usuarios Mysql</a></li>
                <li><a href="">Eliminar o cambiar nombre</a></li>
                </ul>
            </nav>
            </article>
            <article class="history-record">
            <div class="history-record-title">
                <h3>Últimos 7 días</h3>
            </div>
            <nav class="history-record-messages">
                <ul>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                <li><a href="">Novedades PHP 8.1</a></li>
                <li><a href="">Novedades CSS 2022 destacadas</a></li>
                <li><a href="">Generador CRUD con Express & Sequelize</a></li>
                <li><a href="">Cómo iniciar un proyecto de React</a></li>
                </ul>
            </nav>
            </article>
        </section>
            `

    }
}

customElements.define('history-component', HistoryChat);