import { getUserLang, setUserLang } from './lang.js';

export function renderHeader(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const currentFile = window.location.pathname.split('/').pop();

    // detect if we are in en or de
    const pathParts = window.location.pathname.split('/');
    const isBlogPage = pathParts.includes('blogs');
    const currentLang = pathParts.includes('de') ? 'de' : 'en';

    // get user lang first
    const userLang = getUserLang() || currentLang;

    const labels = {
        home: userLang === 'de' ? 'Startseite' : 'Home',
        blogs: userLang === 'de' ? 'Blogs' : 'Blogs',
        about: userLang === 'de' ? 'Über' : 'About'
    };

    // make the link based on language
    const blogsBase = `/blogs/${userLang}`;

    const blogsURL = `${blogsBase}/blogs.html`;
    const aboutURL = `${blogsBase}/about.html`;

    container.innerHTML = `
        <header>
            <div id="left-header">
                <a href="/index.html">
                    <img src="/media/avatar.webp" alt="Profile Picture" id="logo">
                    <h1>Daniel's Blog</h1>
                </a>
            </div>

            <div class="right-header">
                <nav>
                    <ul>
                        <li><a href="/index.html"><span class="text">${labels.home}</span><span class="icon"><i class="fas fa-home"></i></span></a></li>
                        <li><a href="${blogsURL}"><span class="text">${labels.blogs}</span><span class="icon"><i class="fas fa-book"></i></span></a></li>
                        <li><a href="${aboutURL}"><span class="text">${labels.about}</span><span class="icon"><i class="fas fa-image-portrait"></i></span></a></li>
                    </ul>
                </nav>

                <select id="language-switcher">
                    <option value="en" ${userLang === 'en' ? 'selected' : ''}>English</option>
                    <option value="de" ${userLang === 'de' ? 'selected' : ''}>Deutsch</option>
                </select>
            </div>
        </header>
    `;

    // language switching logic stuff
    const switcher = document.getElementById('language-switcher');
        if (switcher) {
            switcher.addEventListener('change', (e) => {
                const newLang = setUserLang(e.target.value);

            const pathParts = window.location.pathname.split('/').filter(Boolean);
            const currentFile = pathParts.pop();

            if (pathParts.length === 0) {
                window.location.href = '/index.html';
                return;
            }

            // check if we are in a folder
            if (pathParts[0] === 'blogs' && ['en', 'de'].includes(pathParts[1])) {
                // replace lang code while keep th subdir
                pathParts[1] = newLang;
                    const newPath = '/' + pathParts.concat(currentFile).join('/');
                    window.location.href = newPath;
                    return;
            }

        // fallback
        window.location.href = '/index.html';
        });
    }
}

export function renderFooter(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
        <footer>
            <ul>
                <li><a href="https://github.com/varig203"><i class="fa-brands fa-square-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/daniel-treiber-bobylev-1a99bb354/"><i class="fa-brands fa-square-linkedin"></i></a></li>
            </ul>
            <p>
                &copy; ${new Date().getFullYear()} Daniel T-B. Third-party logos remain property of their respective owners. Icons by FontAwesome.
            </p>
        </footer>
    `;
}
