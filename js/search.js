let posts = [];

fetch('../blogs/blogs.json')
    .then(res => res.json())
    .then(data => {
        posts = data;
        renderPosts(posts);
});

function renderPosts(postsArray) {
    const container = document.getElementById('blog-list');
    container.innerHTML = '';
    postsArray.forEach(post => {
        const el = document.createElement('div');
        el.innerHTML = `<h2><a href="${post.contentFile}">${post.title}</a></h2>
                        <small>${post.date}</small>`;
    container.appendChild(el);
  });

document.getElementById('search').addEventListener('input', e => {
  const query = e.target.value.toLowerCase();
  const filtered = posts.filter(p => 
    p.title.toLowerCase().includes(query) ||  
    p.tags.some(tag => tag.toLowerCase().includes(query))
  );
  renderPosts(filtered);
});}