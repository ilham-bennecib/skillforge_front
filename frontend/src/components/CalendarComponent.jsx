// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendarComponent.css'; // Votre style CSS pour le calendrier

const localizer = momentLocalizer(moment);

function CalendarComponent() {
  const [events, setEvents] = useState([]); // Liste des événements
  const [modalOpen, setModalOpen] = useState(false); // État de la modal
  const [selectedEvent, setSelectedEvent] = useState(null); // Événement sélectionné
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: new Date(),
    end: new Date(),
  });

  // Ouvrir la modal pour ajouter un événement
  const openAddEventModal = (slotInfo) => {
    setNewEvent({
      title: '',
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setModalOpen(true);
    setSelectedEvent(null);
  };

  // Sauvegarder un nouvel événement
  const saveEvent = () => {
    if (newEvent.title.trim() !== '') {
      setEvents([...events, newEvent]);
      setModalOpen(false);
    } else {
      alert("Le titre de l'événement est obligatoire !");
    }
  };

  // Fermer la modal
  const closeModal = () => {
    setModalOpen(false);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
    setSelectedEvent(null);
  };

  // Ouvrir la modal pour voir les détails de l'événement
  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  return (
    <div className="calendar-container">
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={openAddEventModal} // Cliquez sur un slot pour ajouter un événement
        onSelectEvent={handleEventClick} // Cliquez sur un événement pour voir les détails
        views={['month', 'week', 'day', 'agenda']}
      />

      {/* Modal */}
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-container">
            <h2>
              {selectedEvent ? 'Détails de l’événement' : 'Ajouter un événement'}
            </h2>
            {selectedEvent ? (
              <div>
                <p><strong>Titre :</strong> {selectedEvent.title}</p>
                <p><strong>Début :</strong> {moment(selectedEvent.start).format('LLL')}</p>
                <p><strong>Fin :</strong> {moment(selectedEvent.end).format('LLL')}</p>
                <button className="close-button" onClick={closeModal}>Fermer</button>
              </div>
            ) : (
              <div>
                <label htmlFor="event-title">Titre de l événement :</label>
                <input
                  id="event-title"
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <label htmlFor="event-start">Début :</label>
                <input
                  id="event-start"
                  type="datetime-local"
                  value={moment(newEvent.start).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, start: new Date(e.target.value) })
                  }
                />
                <label htmlFor="event-end">Fin :</label>
                <input
                  id="event-end"
                  type="datetime-local"
                  value={moment(newEvent.end).format('YYYY-MM-DDTHH:mm')}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, end: new Date(e.target.value) })
                  }
                />
                <button className="save-button" onClick={saveEvent}>
                  Ajouter
                </button>
                <button className="cancel-button" onClick={closeModal}>
                  Annuler
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarComponent;
