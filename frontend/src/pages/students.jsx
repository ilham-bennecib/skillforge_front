// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection

function Students() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State pour le terme de recherche
  const navigate = useNavigate(); // Hook pour redirection

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/all/')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des étudiants:', error);
      });
  }, []);

  // Filtrer les candidats en fonction du terme de recherche
  const filteredCandidats = students.filter((student) =>
    student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="candidates-container">
      {/* Bouton de retour */}
      <button className="btn btn-secondary retour-btn btn-candidate" onClick={() => navigate('/combined')}>
          Retour à la page principale
        </button>
      <div className="section">
        <p className="titre_section">Liste des étudiants</p>

        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Rechercher par prénom ou nom"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Met à jour le terme de recherche
        />

        {/* Tableau Bootstrap */}
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Prénom</th>
              <th>Nom de famille</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidats.length > 0 ? (
              filteredCandidats.map((student) => (
                <tr key={student.id} onClick={() => navigate(`/profile/${student.id}`)}>
                  <td>{student.firstName}</td>
                  <td>{student.lastName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Aucun étudiant trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Students;
