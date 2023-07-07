import './App.css';
import { AiFillGithub } from 'react-icons/ai';

export default function Nav() {
  return (
    <div className="top-nav">
      <div className="top-text">
        <p className="navbar-title">Beshyfier</p>
      </div>
      <div className="github-icon">
        <a href="https://github.com/kaizenics/beshyfier-text-modifier" target="_blank" rel="noopener noreferrer">
          <AiFillGithub/>
        </a>
      </div>
    </div>
  );
}
