// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.css'; // Importation du fichier CSS pour le header
import logo from '/src/assets/public/img/LOGOSKILLFORGE.png';
import deco_icone from '/src/assets/public/img/deconnexion.png';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';

function Header() {

  const location = useLocation();

  // Définir dynamiquement le titre en fonction de l'URL
  const getTitle = (path) => {
    switch (path) {
      case '/candidates/all':
        return 'Tous Candidats';
      case '/students/all':
        return 'Tous les Étudiants';
        case '/combined':
        return 'Etudiants et Candidats';
      default:
        return 'SkillForge';
    }
  };
  return (
    <header className="header-container">
      <div className='header-top'>
      <div className="header-left">
        <img src={logo} alt="SkillForge Training Logo" className="logo" />
      </div>
      <nav className="header-right">
        <Navbar/>
        <NavLink to="/profile" className="nav-link deco">Deconnexion <img src={deco_icone} alt ="logo_deconnexion" className='icone'/></NavLink>
        
      </nav>
      </div>
    <div className="header-center">
      <p className="header-title" >{getTitle(location.pathname)}</p>
    </div>
  </header>
  );
}

export default Header;