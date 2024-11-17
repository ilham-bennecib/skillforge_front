// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './employee_dashbord.css';

function Dashboard() {
  const location = useLocation(); // Pour accéder aux données passées via state
  const navigate = useNavigate();
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    if (location.state && location.state.employeeData) {
      // Récupère les données passées via navigate
      setEmployeeData(location.state.employeeData);
    } else {
      // Si aucune donnée n'est passée, redirige vers la page de connexion
      console.error('Aucune donnée employé reçue. Redirection vers la connexion.');
      navigate('/login/employee');
    }
  }, [location.state, navigate]);

  if (!employeeData) {
    return <p>Chargement des informations...</p>;
  }

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bienvenue {employeeData.firstName} {employeeData.lastName}</h1>
        <p>Position : {employeeData.position}</p>
        <p>Matricule : {employeeData.matricule}</p>
      </header>
      <div>
        {/* Ajoute ici les sections calendrier, tâches et actualités */}
        <p>Calendrier, tâches et actualités apparaîtront ici</p>
      </div>
    </div>
  );
}

export default Dashboard;
