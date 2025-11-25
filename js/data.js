export async function fetchPosts(jsonPath = '/blogs/blogs.json') {
  const res = await fetch(jsonPath);
  if (!res.ok) throw new Error('Failed to fetch blogs.json: ' + res.status);

  const data = await res.json();
  return data.map(p => {
    if (p['content-file'] && !p.contentFile) p.contentFile = p['content-file'];
    if (!p.lang) p.lang = 'en';
    return p;
  }).sort((a,b) => new Date(b.date) - new Date(a.date));
}