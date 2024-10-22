// CombinedPage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './combined_page.css';


function CombinedPage() {
  const [candidats, setCandidats] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Récupérer les candidats
    axios.get('http://localhost:8000/api/candidates/all/')
      .then((response) => {
        setCandidats(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des candidats:', error);
      });

    // Récupérer les étudiants
    axios.get('http://localhost:8000/api/students/all/')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des étudiants:', error);
      });
  }, []);

  return (
        
    <div className="combined-container">
      <div className="section">
        <p className='titre_section'>Liste des Candidats</p>
        <ul className="list-group list-group-flush">
          {candidats.map((candidat) => (
            <li className="list-group-item" key={candidat.id}>{candidat.firstName} {candidat.lastName}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <p className='titre_section'>Liste Des Étudiants</p>
        <ul className="list-group list-group-flush">
          {students.map((student) => (
            <li className="list-group-item" key={student.id}>{student.firstName} {student.lastName}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CombinedPage;