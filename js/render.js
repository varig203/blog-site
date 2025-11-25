export function renderPosts(posts, userLang, container) {
  if (!container) return;
  container.innerHTML = '';

  if (!posts.length) {
    container.innerHTML = '<p>No posts found.</p>';
    return;
  }

  posts.forEach(post => {
    const displayDate = post.date ? new Date(post.date).toLocaleDateString(
      post.lang === 'de' ? 'de-DE' : 'en-CA',
      { day: 'numeric', month: 'long', year: 'numeric' }
    ) : '';

    const article = document.createElement('article');
    article.innerHTML = `
      <section>
        <h2><a href="${post.contentFile || '#'}">${post.title || 'Untitled'}</a></h2>
        <small>${displayDate}</small>
      </section>
    `;
    container.appendChild(article);
  });
}
