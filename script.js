import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class SimpleGreeting extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: blue;
    }
  `;

  constructor() {
    super();
    // Declare reactive properties
    this.name = 'World';
  }

  // Render the UI as a function of component state
  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);

export class Posts extends LitElement {
  static properties = {
    name: {},
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css``;

  constructor() {
    super();
    this.url = 'test';
  }

  // Render the UI as a function of component state
  render() {
    return html`
       <form>
        <label for="name">Enter WordPress URL:</label>
        <input type="text" id="name" placeholder="" />
        <button type="submit">Submit</button>
      </form>
      <p>Hello, ${this.url0}!</p>`;
  }
}
customElements.define('wp-posts', Posts);