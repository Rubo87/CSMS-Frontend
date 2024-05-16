import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventForm from "../components/EventForm";

function CalendarView() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [eventSources, setEventSources] = useState([]);
  const getColorByEventType = (eventType) => {
    switch (eventType) {
        case 'high':
            return 'red';
        case 'medium':
            return 'yellow';
        case 'low':
            return 'green';
        default:
            return 'blue';
    }
};

  useEffect(() => {
    const fetchEvents = async () => {
        try {
            const response = await fetch('https://csms-backend.vercel.app/api/calendar-events');
            if (!response.ok) {
                throw new Error('Failed to fetch events');
            }
            const events = await response.json();
            const formattedEvents = events.map(event => ({
                title: event.title,
                start: `${event.event_date}T${event.event_time}`,
                color: getColorByEventType(event.event_type), // Use event_type instead of eventType
            }));
            setEventSources([{ events: formattedEvents }]);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    fetchEvents();
}, []);

const addSampleEvents = async () => {
  try {
    // Sample event data
    const sampleEvents = [
      { title: 'May Day Event', date: '2024-05-01', time: '12:00', eventType: 'High' },
      { title: 'May Mid Event', date: '2024-05-15', time: '15:00', eventType: 'Medium' },
      { title: 'May End Event', date: '2024-05-31', time: '18:00', eventType: 'Low' }
    ];

    // Submit each sample event to the backend
    await Promise.all(sampleEvents.map(async (event) => {
      const formattedEvent = {
        title: event.title,
        date: event.date,
        time: event.time,
        eventType: event.eventType.toLowerCase()
      };
      await handleEventSubmit(formattedEvent);
    }));
  } catch (error) {
    console.error('Error adding sample events:', error);
  }
};


  const handleDateClick = (info) => {
    setShowEventForm(true);
    setSelectedDate(info.dateStr);
  };

  const handleEventSubmit = async (newEvent) => {
    try {
      // Transform newEvent to match the backend expectations
      const formattedEvent = {
        title: newEvent.title,
        event_date: newEvent.date, // Ensure this is in the correct format YYYY-MM-DD
        event_time: newEvent.time, // Ensure this is in the correct format HH:MM:SS
        event_type: newEvent.eventType.toLowerCase() // Ensure this is 'high', 'medium', or 'low'
      };
  
      console.log('Submitting new event:', formattedEvent); // Debugging log
  
      const response = await fetch('https://csms-backend.vercel.app/api/calendar-events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formattedEvent)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add event');
      }
  
      setShowEventForm(false);
      console.log('Event added successfully');
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };
  

  

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        eventSources={eventSources}
        dateClick={handleDateClick} 
      />
      {showEventForm && (
        <div className="event-form-container">
          <h2>Add New Event</h2>
          <EventForm date={selectedDate} onSubmit={handleEventSubmit} />
        </div>
      )}
    </>
  );
}

export default CalendarView;
