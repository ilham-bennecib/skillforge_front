// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom'; // Hook pour récupérer les paramètres de l'URL
import './employee_dashbord.css'; // Style spécifique pour le dashboard
import CalendarComponent from '../components/CalendarComponent'; // Import du calendrier
import TaskList from '../components/tasks'; // Import du composant des tâches

function Dashboard() {
  const { id: employeeId } = useParams(); // Récupère l'ID de l'employé depuis l'URL

  return (
    <div className="dashboard-container">
      {/* En-tête */}
      <header className="dashboard-header">
        <p className="title">Bienvenue Doe888 Doe888</p>
      </header>

      

      {/* Section Calendrier */}
      <div className="dashboard-content">
        <h2>Votre Calendrier</h2>
        <CalendarComponent /> {/* Appel du nouveau composant pour le calendrier */}
      </div>

    <div className='bottom-section'>
      {/* Section Tâches */}
        <div className="task-list-section">
          <h2>Tâches</h2>
          <TaskList employeeId={employeeId} /> {/* Transmet l'ID de l'employé au composant */}
        </div>

      {/* Section Evenet */}
        <div className="task-list-section">
          <h2>Actualité</h2>
          <TaskList employeeId={employeeId} /> {/* Transmet l'ID de l'employé au composant */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
