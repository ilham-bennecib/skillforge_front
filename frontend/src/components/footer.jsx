// Footer.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-left">
        <ul>
          <li>Les Formations</li>
          <li>Se reconvertir</li>
          <li>Notre CFA</li>
          <li>Se connecter</li>
        </ul>
      </div>
      
      <div className="footer-right">
        <ul>
          <li>Contact Entreprises</li>
          <li>Contact candidats</li>
          <li>Mentions Légales</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
