(function() {

"use strict";

    const template = "<input value='' id='search'><button id='button'>Search</button>";

    class searchBox extends HTMLElement {

        get value() {
            return this.shadowRoot.getElementById('search').value;
        }

        set value(val) {
            this.setAttribute('value', val);
            this.shadowRoot.getElementById('search').value = val;
            this.shadowRoot.getElementById('search').setAttribute('value', val);
        }

        constructor() {
            super();

            var shadowRoot = this.attachShadow({
                mode: "open"
            });

            shadowRoot.innerHTML = template;

            const component = this;

            // Button click
            this.shadowRoot.querySelector('button').addEventListener('click', function() {
                console.log(component.value);
            });

            // pressed enter
            this.shadowRoot.querySelector('input').addEventListener('keydown', function(event) {
                if (event.keyCode === 13)
                    console.log(component.value);
            });
        }
    }

    window.customElements.define('search-input', searchBox);
})();