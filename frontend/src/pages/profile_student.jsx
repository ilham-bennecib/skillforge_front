// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';
import { useNavigate, useParams } from 'react-router-dom';
import bio from '/src/assets/public/img/biometrics.png';
import cake from '/src/assets/public/img/birthday-cake.png';
import adress from '/src/assets/public/img/adress.png';
import email from '/src/assets/public/img/contactmail.png';
import buiding from '/src/assets/public/img/skyline.png';
import presentation from '/src/assets/public/img/presentation.png';

function StudentProfile() {
  const [student, setStudent] = useState(null); // Stocker les données de l'étudiant
  const navigate = useNavigate();
  const { id } = useParams(); // Récupérer l'ID de l'utilisateur à partir des paramètres d'URL

  useEffect(() => {
    // Récupération des données de l'étudiant via l'API en fonction de l'ID
    axios.get(`http://localhost:8000/api/students/student/${id}/`) 
      .then((response) => {
        setStudent(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données de l'étudiant:", error);
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

  if (!student) {
    return <div>Chargement...</div>; // Affichage du chargement en attendant les données
  }

  return (
    <div className="profile-container">
      <button className="btn btn-secondary retour-btn" onClick={() => navigate('/combined')}>
        Retour à la page principale
      </button>

      <div className="section-profile">
        <h2 className='h2-profile'>Profil de {student.firstName} {student.lastName}</h2>
        <p>Ici, tu trouveras toutes les informations nécessaires pour réussir !</p>

        <div className="info-personnelle">
          <h2>Informations Personnelles</h2>
          <ul>
            <li> 
                <img className='icone-profile' src={bio} alt="icone empreinte" />
                 {student.firstName} {student.lastName}
            </li>
            <li>
                <img className='icone-profile' src={cake} alt="icone gateau d'anniversaire" />
                 {formatDate(student.dateOfBirth)}
            </li>
            <li>
                <img className='icone-profile' src={adress} alt="icone adresse" />
                 {student.address}
            </li>
            <li>
                <img className='icone-profile' src={email} alt="icone contact" />  
                {student.email}
            </li>
            <li>
                <img className='icone-profile' src={email} alt="icone contact" />
                 {student.phone}
            </li>
          </ul>
        </div>

        {/* Section Informations Professionnelles */}
        <div className="info-professionnelle">
          <h2>Informations Professionnelles</h2>
          <ul>
            <li>
            <img className='icone-profile' src={presentation} alt="icone contact" />
            <strong>Formation :</strong> 
            {student.structure_name}
            </li>
            <li>
            <img className='icone-profile' src={buiding} alt="icone contact" />
              <strong>Session :</strong> 
              {student.session_name}</li>
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

export default StudentProfile;
