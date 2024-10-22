// Sidebar.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';
import deco_icone from '/src/assets/public/img/deconnexion.png';
import './side_bar.css';

function Sidebar() {
  return (
    <div className="side-bar">
      <nav className="sidebar-nav">
        <NavLink to="/calendar" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          CALENDRIER
        </NavLink>
        <NavLink to="/companies" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          ENTREPRISES
        </NavLink>
        <NavLink to="/combined" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          CANDIDATS
        </NavLink>
        <NavLink to="/sessions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          SESSIONS DE FORMATION
        </NavLink>
        
        <NavLink to="/sessions" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          DECONNEXION <img src={deco_icone} alt ="logo_deconnexion" className='icone'/>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;