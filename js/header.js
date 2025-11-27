export function renderHeader(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
                <header>
                    <div id="left-header">
                        <a href="/index.html">
                            <img src="/media/avatar.png" alt="Profile Picture" id="logo">
                            <h1>Daniel's Blog</h1>
                        </a>
                    </div>
                    <div class="right-header">
                        <nav>
                            <ul>
                                <li><a href="/index.html"><span class="text">Home</span><span class="icon"><i class="fas fa-home"></i></span></a></li>
                                <li><a href="/blogs/en/blogs.html"><span class="text">Blogs</span><span class="icon"><i class="fas fa-book"></i></span></a></li>
                                <li><a href="/blogs/en/about.html"><span class="text">About</span><span class="icon"><i class="fas fa-image-portrait"></i></span></a></li>
                            </ul>
                        </nav>
                        <select id="language-switcher">
                            <option value="en">English</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </div>
                </header>
    `;
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
