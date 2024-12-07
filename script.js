import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

export class Posts extends LitElement {
  static properties = {
    url: {},
    posts: []
  };
  // Define scoped styles right with your component, in plain CSS
  static styles = css``;

  constructor() {
    super();
    this.url = 'test';
    this.posts = [];
  }
  
  async handleFormSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData.entries())
    const url = `${ formValues.name }/wp-json/wp/v2/posts`
    
    try {
      const response = await fetch(url)
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.posts = data;
    }
    catch (error) {
      console.log(`Error: ${error.message}`);
    }
  }

  render() {
    return html`
       <form @submit=${this.handleFormSubmit}>
        <label for="name">Enter WordPress URL:</label>
        <input type="text" id="name" name="name" required />
        
        <input type="submit" value="Submit" />
      </form>
      <p>Hello, ${this.posts}!</p>`;
  }
}
customElements.define('wp-posts', Posts);