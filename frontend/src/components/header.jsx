// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './header.css'; // Importation du fichier CSS
import logo from '/src/assets/public/img/LOGOSKILLFORGE.png';
import deco_icone from '/src/assets/public/img/deconnexion.png';
import { NavLink, useLocation } from 'react-router-dom';
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
      case '/login/company':
        return 'Espace de connexion Entreprise';
      case '/login/student':
        return 'Espace de connexion Etudiant';
      case '/':
        return 'Bienvenur sur SKILLFORGE'  ;
      case '/login/employee':
        return 'Espace de connexion Employé';  ;
      
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
          <Navbar />
          <NavLink to="/profile" className="nav-link deco">
            Deconnexion <img src={deco_icone} alt="logo_deconnexion" className='icone' />
          </NavLink>
        </nav>
      </div>
      <div className="header-center">
        <p className="header-title">{getTitle(location.pathname)}</p>
        
      </div>
    </header>
  );
}

export default Header;
