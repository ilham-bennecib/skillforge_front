// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './candidats.css'



function Candidats() {

  
  const [candidats, setCandidats] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/candidates/all/')
      .then((response) => {
        setCandidats(response.data);
        
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des candidats:', error);
        
      });
  }, []);

  

  return (
    <div>
      
        <div>

          
        <ul className="list-group list-group-flush">
          {candidats.map((candidat) => (
            <li className="list-group-item" key={candidat.id}>{candidat.firstName} {candidat.lastName}</li>
          ))}
        </ul>
        </div>
    </div>
  );
};

export default Candidats;
