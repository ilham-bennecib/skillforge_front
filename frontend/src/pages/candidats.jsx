// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './candidats.css';
import { useNavigate } from 'react-router-dom'; // Import de useNavigate pour la redirection

function Candidats() {
  const [candidats, setCandidats] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // State pour le terme de recherche
  const navigate = useNavigate(); // Hook pour redirection

  useEffect(() => {
    axios.get('http://localhost:8000/api/candidates/all/')
      .then((response) => {
        setCandidats(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des candidats:', error);
      });
  }, []);

  // Filtrer les candidats en fonction du terme de recherche
  const filteredCandidats = candidats.filter((candidat) =>
    candidat.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    candidat.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="candidates-container">
      {/* Bouton de retour */}
      <button className="btn btn-secondary retour-btn btn-candidate" onClick={() => navigate('/combined')}>
          Retour à la page principale
        </button>
      <div className="section">
        <p className="titre_section">Liste des Candidats</p>

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
              filteredCandidats.map((candidat) => (
                <tr key={candidat.id} onClick={() => navigate(`/candidat/profile/${candidat.id}`)}>
                  <td>{candidat.firstName}</td>
                  <td>{candidat.lastName}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2">Aucun candidat trouvé</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Candidats;
