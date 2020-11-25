import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import profile from './images/profile.png';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="profile-picture" alt="Profile" />
        <p>
          Jaime Loyola
        </p>
        <div className="icon-links-container">
          <a
            className="icon-link github"
            href="https://github.com/jaimelr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            className="icon-link twitter"
            href="https://twitter.com/JJaimelr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="icon-link linkedin"
            href="https://www.linkedin.com/in/jaimelr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
