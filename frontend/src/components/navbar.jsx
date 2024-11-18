// Navbar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Importez le CSS pour la barre de navigation

function Navbar() {
    // Remplacez cette logique par l'identification réelle de l'utilisateur
    const userType = 'admin'; // Exemple : 'admin', 'student' ou 'guest'
  
    return (
      <nav className="navbar-container">
        {userType === 'admin' && (
          <>
            <NavLink to="/profile" className="nav-link">PROFIL</NavLink>
            <NavLink to="/students/all" className="nav-link">ETUDIANTS</NavLink>
            <NavLink to="/docs" className="nav-link">DOCS</NavLink>
          </>
        )}
        {userType === 'student' && (
          <>
            <NavLink to="/profile" className="nav-link">PROFIL</NavLink>
            <NavLink to="/your-training" className="nav-link">Ta formation</NavLink>
            <NavLink to="/your-profile" className="nav-link">Ton profil</NavLink>
            <NavLink to="/your-docs" className="nav-link">Tes docs</NavLink>
          </>
        )}
        {/* Si userType n'est ni 'admin' ni 'student', il n'y a rien dans la barre de navigation */}
      </nav>
    );
  }
  
  export default Navbar;