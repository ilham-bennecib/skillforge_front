// eslint-disable-next-line no-unused-vars
import React from 'react';
import './employee_dashbord.css'; // Style spécifique pour le dashboard
import CalendarComponent from '../components/CalendarComponent'; // Import du calendrier

function Dashboard() {
  return (
    <div className="dashboard-container">
      {/* En-tête */}
      <header className="dashboard-header">
        <p className="title">Bienvenue Doe888 Doe888</p>
        <p>Position : Formateur</p>
        <p>Matricule : 12345556</p>
      </header>

      {/* Section Calendrier */}
      <div className="dashboard-content">
        <h2>Votre Calendrier</h2>
        <CalendarComponent /> {/* Appel du nouveau composant */}
      </div>
    </div>
  );
}

export default Dashboard;
