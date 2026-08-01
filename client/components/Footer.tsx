import { Link } from 'react-router';

export default function Footer(){
    return (
      <footer>
        <ul>
          <li>
            <Link to="#contact-us">Contact Us</Link>
          </li>
          <li>
            <Link to="#help">Help</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/devs">Developers</Link>
          </li>
          <li>
            <Link to="/tnc">terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
        <a href="https://www.startupindia.gov.in/content/sih/en/privacy-policy.html">
          Privacy Notice for Indian Users
        </a>
        <p>
          <Link to="/">&#9426; Note-Sharer</Link>
        </p>
      </footer>
    );
}