// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import api from '../api';
import './combined_page.css'; // Import du fichier CSS
import { useNavigate } from 'react-router-dom'; 

function CombinedPage() {
  const [candidats, setCandidats] = useState([]);
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupération des candidats
    api.get('/candidates/all/')
      .then((response) => setCandidats(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des candidats:', error));

    // Récupération des étudiants
    api.get('/students/all/')
      .then((response) => setStudents(response.data))
      .catch((error) => console.error('Erreur lors de la récupération des étudiants:', error));
  }, []);

  return (
    <div className="main-combined-container"> 
    <div className="combined-container">
      {/* Tableau des candidats */}
      <div className="big-section">
        <div className="section">
          <p className="titre_section">Liste des Candidats</p>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom de famille</th>
              </tr>
            </thead>
            <tbody>
              {candidats.map((candidat) => (
                <tr key={candidat.id} onClick={() => navigate(`/candidat/profile/${candidat.id}`)}>
                  <td>{candidat.firstName}</td>
                  <td>{candidat.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <button className="btn btn-primary" onClick={() => navigate('/candidates/all')}>
            Afficher tous les candidats
          </button>
        </div>

        {/* Tableau des étudiants */}
        <div className="big-section">
        <div className="section">
          <p className="titre_section">Liste Des Étudiants</p>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Prénom</th>
                <th>Nom de famille</th>
                <th>Session de Formation</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} onClick={() => navigate(`/student/profile/${student.id}`)}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                  <td>{student.sessionFormation}</td> {/* Affichage de la session */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button className="btn btn-secondary" onClick={() => navigate('/students/all')}>
          Afficher tous les étudiants
        </button>
      </div>
      
      </div>

    </div>
  );
}

export default CombinedPage;
