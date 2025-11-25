import { getUserLang, setUserLang } from './lang.js';
import { fetchPosts } from './data.js';
import { renderPosts } from './render.js';
import { filterPosts } from './search.js';

document.addEventListener('DOMContentLoaded', async () => {
  let posts = [];
  let userLang = getUserLang();

  const langSelect = document.getElementById('language-switcher');
  const searchInput = document.getElementById('search');
  const blogList = document.getElementById('blog-list');

  if (langSelect) langSelect.value = userLang;

  try {
    posts = await fetchPosts();
    renderPosts(posts.filter(p => p.lang === userLang), userLang, blogList);
  } catch (err) {
    console.error(err);
    if (blogList) blogList.innerHTML = '<p>Unable to load posts. check console.</p>';
  }

  if (searchInput) {
    searchInput.addEventListener('input', e => {
      renderPosts(filterPosts(posts, e.target.value, userLang), userLang, blogList);
    });
  }

  if (langSelect) {
    langSelect.addEventListener('change', e => {
      userLang = setUserLang(e.target.value);
      if (searchInput && searchInput.value) {
        renderPosts(filterPosts(posts, searchInput.value, userLang), userLang, blogList);
      } else {
        renderPosts(posts.filter(p => p.lang === userLang), userLang, blogList);
      }
    });
  }
});