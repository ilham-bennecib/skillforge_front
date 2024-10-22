// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './candidats.css'

function Students() {
  const [students, setStudents] = useState([]);
  

  useEffect(() => {
    axios.get('http://localhost:8000/api/students/all/')
      .then((response) => {
        setStudents(response.data);
        
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des candidats:', error);
        
      });
  }, []);

  

  return (
    <div>
      <p className='titre_section'>Les candidats</p>
        <div>
        <ul className='liste'>
          {students.map((student) => (
            <li key={student.id}>{student.firstName} {student.lastName}</li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default Students;
