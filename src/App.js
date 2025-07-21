import logo from './logo.svg';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
;

function Header() {
  return (
    <div className="header">
      <img src={logo} className="App-logo" alt="App Logo" />
      <div>
        <h1>Daniel's Portfolio</h1>
        <p>Everything that Daniel does related to his career in Software Development.</p>
      </div>  
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://sulphurium.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faUser} /> Portfolio
        </a>
        <a href="https://github.com/varig203/blog-site" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Source Code
        </a>
      </div>
      <div className="footer-license">
        © 2025 Daniel Treiber-Bobylev. All rights reserved.
        Further information is in <code>LICENSE.md</code>.
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <div className="App">
      </div>
      <Footer />
    </>
  );
}

export default App;
