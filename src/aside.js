class Aside extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.render()
    }

    render() {

        // Un slot es un espacio para insertar HTML en el componente

        this.shadow.innerHTML =
      /*html*/`
      <style>
        .aside{
            background-color: hsl(0, 0%, 0%);
            max-width: 235px;
            min-width: 235px;
            height:100%;
            transition: all 0.5s;
        }

        .aside.disabled{
            max-width: 0px;
            min-width: 0px;
        }

        .none{
            display:none;
        }

        .button-aside{
            width:10px;
            height:30px;
            background-color:blue;
            position:fixed;
            bottom:50%;
            left:245px;
            transition: left 0.5s
        }

        .button-aside.disabled{
            position:fixed;
            bottom:50%;
            left:10px;
        }
        
      </style>
  
      <div class="aside">
          <slot name="chat"></slot>

          <slot name="history"></slot>

          <slot name="user"></slot>

          <div class = button-aside></div>
      </div>
      `

        let aside = this.shadow.querySelector(".aside");
        let userSlot = this.shadow.querySelector('slot[name="user"]');
        let button = this.shadow.querySelector('.button-aside');

        button.addEventListener('click', () => {
            userSlot.classList.toggle("none");
            aside.classList.toggle("disabled");
            button.classList.toggle("disabled");
            const customEvent = new CustomEvent('aside-change', {

            })
            document.dispatchEvent(customEvent);
        });

        //   userSlot.classList.add("none");
        //   aside.classList.add("disabled");
    }
}

customElements.define('aside-component', Aside);