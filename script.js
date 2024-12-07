import safeHtml from 'https://cdn.jsdelivr.net/npm/safe-html@1.0.0/+esm';

const properties = {
  url: {}, 
  posts: []
};
  
async function handleFormSubmit(event) {
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
    render();
  }
  catch (error) {
    console.log(`Error: ${error.message}`);
  }
}

function render() {
  let posts = '';
  if(this.posts && this.posts.length > 0) {
    posts = `<h2>Latest Posts</h2>
    <ul class="post-list">`;
    posts.forEach((post) => {
        posts += `<li>
        <h3>${safeHtml(post.title.rendered)}</h3>
          <p>${safeHtml(post.excerpt.rendered)}</p>
        </li>`
      });
    </ul>`
  }

  console.log(posts);
}