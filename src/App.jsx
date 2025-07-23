import avatar from './avatar.jpg'
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div className="header">
      <img src={avatar} className="my-pfp" alt="App Logo" />
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
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </a>
        <a href="https://github.com/varig203" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> Github
        </a>
      </div>
      <div className="footer-license">
        © 2025 Daniel Treiber-Bobylev. All rights reserved.
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
