export function filterPosts(posts, query, userLang) {
  const q = query.toLowerCase();
  return posts.filter(p =>
    (p.title && p.title.toLowerCase().includes(q)) ||
    (Array.isArray(p.tags) && p.tags.some(t => t.toLowerCase().includes(q)))
  ).filter(p => p.lang === userLang);
}
