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
            display:flex;
            align-items:center;
            justify-content:center;
            width:25px;
            height:30px;
            position:fixed;
            bottom:50%;
            left:245px;
            transition: left 0.5s
        }

        .button-aside:hover{
            cursor: pointer;
        }

        .button-aside:hover .arrow-1{
            border-width: 4px 4px 0 0;
        }

        .button-aside.disabled{
            position:fixed;
            bottom:50%;
            left:10px;
        }

        .arrow-1 {
            height: 15px;
            width: 15px;
            border: 1px solid grey;
            border-width: 2px 2px 0 0;
            transform: rotate(225deg);
            
        }

        .arrow-1.rotate{
            transform: rotate(45deg);
        }
        
      </style>
  
      <div class="aside">
          <slot name="chat"></slot>

          <slot name="history"></slot>

          <slot name="user"></slot>

          <div class = button-aside>
            <div class="arrow-1"></div>
          </div>
      </div>
      `

        let aside = this.shadow.querySelector(".aside");
        let userSlot = this.shadow.querySelector('slot[name="user"]');
        let button = this.shadow.querySelector('.button-aside');
        let arrow = this.shadow.querySelector('.arrow-1');

        button.addEventListener('click', () => {
            userSlot.classList.toggle("none");
            aside.classList.toggle("disabled");
            button.classList.toggle("disabled");
            arrow.classList.toggle('rotate');
            const customEvent = new CustomEvent('aside-change', {

            })
            document.dispatchEvent(customEvent);
        });

        //   userSlot.classList.add("none");
        //   aside.classList.add("disabled");
    }
}

customElements.define('aside-component', Aside);