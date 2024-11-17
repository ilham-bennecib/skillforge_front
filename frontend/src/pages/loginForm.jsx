// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './loginForm.css'; // Assurez-vous d'inclure ce fichier CSS
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import de PropTypes pour la validation

function LoginForm({ userType }) {
  const navigate = useNavigate();

  // State pour gérer les données du formulaire
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    console.log('Soumission du formulaire :', { email, password });

    try {
      // Effectuer une requête POST vers l'API
      const response = await axios.post('http://127.0.0.1:8000/api/account/login/', {
        email,
        password,
      });

      console.log('Réponse API Login :', response.data);

      // Si la réponse est un succès
      const { tokens, user } = response.data;

      // Vérifie si le rôle est "employé" (roleId === 1)
      if (user.role_id !== 1) {
        console.warn('Utilisateur avec un rôle non employé, redirection vers 404.');
        navigate('/404'); // Redirige vers une page 404 si le rôle est incorrect
        return;
      }

      console.log('Utilisateur authentifié en tant qu\'employé.');

      // Stocker les informations utilisateur et les tokens dans le localStorage
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('access_token', tokens.access);
      localStorage.setItem('refresh_token', tokens.refresh);

      console.log('Tokens et utilisateur stockés dans localStorage.');

      // Requête pour récupérer l'ID de l'employé (employeeId)
      const employeeResponse = await axios.get(
        `http://127.0.0.1:8000/api/cfaEmployees/employee/from_user_${user.id}/`,
        {
          headers: {
            Authorization: `Bearer ${tokens.access}`,
          },
        }
      );

      console.log('Réponse API Employé :', employeeResponse.data);

      const employeeData = employeeResponse.data;

      // Rediriger vers le Dashboard
      console.log(`Redirection vers le Dashboard... employeeId =  ${employeeData.id}`);
      console.log(`Navigating to /employee/profile/${employeeData.id}`);
      navigate(`/employee/profile/${employeeData.id}`, { state: { employeeData } });
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error || 'Une erreur est survenue');
      } else {
        setErrorMessage('Une erreur réseau est survenue');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-section">
        <div className="login-form">
          <h2>Entrez vos informations de connexion :</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Votre email de connexion"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">Connexion</button>
          </form>
          <p className="forgot-password">Mot de passe oublié ?</p>

          {/* Affichage conditionnel de cette partie */}
          {userType !== 'employee' && (
            <p className="contact-support">Un souci ? Contactez votre référent pédagogique</p>
          )}
        </div>
      </div>
    </div>
  );
}

// Validation des props avec PropTypes
LoginForm.propTypes = {
  userType: PropTypes.string.isRequired, // Valide que userType est une chaîne de caractères et qu'il est requis
};

export default LoginForm;
