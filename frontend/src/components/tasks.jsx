// components/tasks.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tasks.css';

// eslint-disable-next-line react/prop-types
function TaskList({ employeeId }) {
  const [tasks, setTasks] = useState([]); // Liste des tâches
  const [modalOpen, setModalOpen] = useState(false); // État de la modal
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
    cfaemployeeId: employeeId,
  });

  // Récupération des tâches de l'employé
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/tasks/task/employee/${employeeId}/`)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des tâches :', error);
      });
  }, [employeeId]);

  // Ouvrir la modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Fermer la modal
  const closeModal = () => {
    setModalOpen(false);
    setNewTask({ title: '', description: '', date: '', cfaemployeeId: employeeId });
  };

  // Gérer l'ajout d'une nouvelle tâche
  const addTask = () => {
    if (!newTask.title || !newTask.description || !newTask.date) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    axios
      .post('http://127.0.0.1:8000/api/tasks/task/create/', newTask)
      .then((response) => {
        setTasks([...tasks, { ...newTask, id: response.data.task_id }]); // Ajouter la tâche à la liste
        closeModal(); // Fermer la modal
      })
      .catch((error) => {
        console.error('Erreur lors de la création de la tâche :', error);
        alert("Une erreur s'est produite lors de la création de la tâche.");
      });
  };

  return (
    <div className="task-list-container">
      
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.description} (Date : {task.date})
          </li>
        ))}
      </ul>
      <button className="add-task-button" onClick={openModal}>
        + Ajouter une tâche
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-container">
            <h2>Créer une nouvelle tâche</h2>
            <label htmlFor="task-title">Titre :</label>
            <input
              id="task-title"
              type="text"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <label htmlFor="task-description">Description :</label>
            <textarea
              id="task-description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <label htmlFor="task-date">Date :</label>
            <input
              id="task-date"
              type="date"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
            />
            <div className="modal-actions">
              <button onClick={addTask} className="save-button">
                Ajouter
              </button>
              <button onClick={closeModal} className="cancel-button">
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
