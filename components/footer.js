const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
<style>
    footer {
        height: 60px;
        padding: 0 10px;
        list-style: none;
        display: flex;
        flex-shrink: 0;
        justify-content: space-between;
        align-items: center;
        background-color: #dfdfe2;
    }

    ul {
        padding: 0;
    }
    
    ul li {
        list-style: none;
        display: inline;
    }
    
    a {
        margin: 0 15px;
        color: inherit;
        text-decoration: none;
    }
    
    a:hover {
        padding-bottom: 5px;
        box-shadow: inset 0 -2px 0 0 #333;
    }
    
    .social-row {
        font-size: 29px;
    }
    
    .social-row li a {
        margin: 0 15px;
    }

    @media (max-width: 600px) {

        footer{
            display: block;
            height: fit-content;
            padding: 1em;
        }
        footer ul{
            display: block;
            text-align: center;
            width: 100%;
            font-size: 16pt;
        }
      }
</style>
<footer>
    <ul>
    <li><a href="about.html">Sobre nosotros</a></li>
    <li><a href="work.html">El equipo</a></li>
    <li><a href="contact.html">Contacto</a></li>
    </ul>
    <ul class="social-row">
    <li><a href="https://github.com/my-github-profile"><i class="fab fa-github"></i></a></li>
    <li><a href="https://twitter.com/my-twitter-profile"><i class="fab fa-twitter"></i></a></li>
    <li><a href="https://www.linkedin.com/in/my-linkedin-profile"><i class="fab fa-linkedin"></i></a></li>
    </ul>
</footer>
`;

class Footer extends HTMLElement {
constructor() {
    super();
}

connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
    shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
}
}

customElements.define('footer-component', Footer);