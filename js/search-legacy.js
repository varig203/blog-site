document.addEventListener('DOMContentLoaded', () => {
  let posts = [];
  let userLang;

  const supported = ['en', 'de'];
  const stored = localStorage.getItem('userLang');
  if (stored && supported.includes(stored)) {
    userLang = stored;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0,2);
    userLang = supported.includes(browserLang) ? browserLang : 'en';
    localStorage.setItem('userLang', userLang);
  }

  const langSelect = document.getElementById('language-switcher');
  const searchInput = document.getElementById('search');
  const blogList = document.getElementById('blog-list');

  if (langSelect) langSelect.value = userLang;

  fetch('../blogs/blogs.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch blogs.json: ' + res.status);
      return res.json();
    })
    .then(data => {
      // normalize keys and ensure lang exists
      posts = data.map(p => {
        if (p['content-file'] && !p.contentFile) p.contentFile = p['content-file'];
        // default lang to 'en' if missing (avoid errors)
        if (!p.lang) p.lang = 'en';
        return p;
      });

      posts.sort((a, b) => new Date(b.date) - new Date(a.date));
      renderPosts(posts.filter(p => p.lang === userLang));
    })
    .catch(err => {
      console.error(err);
      if (blogList) blogList.innerHTML = '<p>Unable to load posts. check console.</p>';
    });

  function renderPosts(arr) {
    if (!blogList) return;
    blogList.innerHTML = '';
    if (!arr.length) {
      blogList.innerHTML = '<p>No posts found.</p>';
      return;
    }

    arr.forEach(post => {
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
      blogList.appendChild(article);
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      const filtered = posts.filter(p =>
        (p.title && p.title.toLowerCase().includes(q)) ||
        (Array.isArray(p.tags) && p.tags.some(t => t.toLowerCase().includes(q)))
      );
      renderPosts(filtered.filter(p => p.lang === userLang));
    });
  }

  if (langSelect) {
    langSelect.addEventListener('change', e => {
      userLang = e.target.value;
      localStorage.setItem('userLang', userLang);
      // update dropdown in case user changed programmatically
      langSelect.value = userLang;

      const q = searchInput ? searchInput.value.toLowerCase() : '';
      if (q) {
        const filtered = posts.filter(p =>
          (p.title && p.title.toLowerCase().includes(q)) ||
          (Array.isArray(p.tags) && p.tags.some(t => t.toLowerCase().includes(q)))
        );
        renderPosts(filtered.filter(p => p.lang === userLang));
      } else {
        renderPosts(posts.filter(p => p.lang === userLang));
      }
    });
  }
});
