// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css'; // Importation du fichier CSS spécifique
import { useNavigate, useParams } from 'react-router-dom'; // Pour récupérer l'ID et faire la redirection
import bio from '/src/assets/public/img/biometrics.png';
import cake from '/src/assets/public/img/birthday-cake.png';
import adress from '/src/assets/public/img/adress.png';

function ProfileCandidat() {
  const [user, setUser] = useState(null); // Stocker les données du profil
  const navigate = useNavigate();
  const { id } = useParams(); // Récupérer l'ID de l'utilisateur à partir des paramètres d'URL

  useEffect(() => {
    // Récupération des données de profil via l'API en fonction de l'ID
    axios.get(`http://localhost:8000/api/candidates/candidate/${id}/`)
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données du profil:', error);
      });
  }, [id]);

  // Fonction pour formater la date de naissance au format français
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  if (!user) {
    return <div>Chargement...</div>; // Affichage du chargement en attendant les données
  }

  return (
    <div className="profile-container">
      <button className="btn btn-secondary retour-btn" onClick={() => navigate('/combined')}>
        Retour à la page principale
      </button>

      <div className="section-profile">
        <h2 className='h2-profile'>Profil de {user.firstName} {user.lastName}</h2>
        <p>Ici, tu trouveras toutes les informations nécessaires pour réussir !</p>

        <div className="info-personnelle">
          <h2>Informations Personnelles</h2>
          <ul>
            <li> 
                <img className='icone-profile' src={bio} alt="icone empreinte" />
                 {user.firstName} {user.lastName}
            </li>
            <li>
                <img className='icone-profile' src={cake} alt="icone empreinte" />
                 {formatDate(user.dateOfBirth)}
            </li>
            <li>
                <img className='icone-profile' src={adress} alt="icone empreinte" />
                 {user.address}
            </li>
            <li>
                <img className='icone-profile' src={cake} alt="icone empreinte" />  
                {user.email}
            </li>
            <li>
                <img className='icone-profile' src={cake} alt="icone empreinte" />
                 {user.phone}
            </li>
          </ul>
        </div>

        <div className="info-documents">
          <h2>Documents personnels</h2>
          <ul>
            <li>Attestation de formation</li>
            <li>Charte de formation</li>
            <li>Contrat d apprentissage</li>
            <li>CV</li>
            <li>Planning</li>
          </ul>
          <button className="btn btn-primary">Ajouter un document</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileCandidat;
