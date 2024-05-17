import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import EventForm from "../components/EventForm";
import "../styles/CalendarView.css"; // Import CSS file for styling

function CalendarView() {
  const [showEventForm, setShowEventForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [events, setEvents] = useState([
    { title: 'May Day Event', date: '2024-05-01', time: '12:00', eventType: 'High' },
    { title: 'May Mid Event', date: '2024-05-15', time: '15:00', eventType: 'Medium' },
    { title: 'May End Event', date: '2024-05-31', time: '18:00', eventType: 'Low' },
    { title: 'June Event 1', date: '2024-06-05', time: '10:00', eventType: 'High' },
    { title: 'June Event 2', date: '2024-06-12', time: '14:00', eventType: 'Medium' },
    { title: 'June Event 3', date: '2024-06-20', time: '16:00', eventType: 'Low' },
    { title: 'July Event 1', date: '2024-07-10', time: '13:00', eventType: 'High' },
    { title: 'July Event 2', date: '2024-07-18', time: '11:00', eventType: 'Medium' },
    { title: 'July Event 3', date: '2024-07-25', time: '17:00', eventType: 'Low' },
    { title: 'August Event 1', date: '2024-08-05', time: '10:00', eventType: 'High' },
    { title: 'August Event 2', date: '2024-08-18', time: '15:00', eventType: 'Medium' },
    { title: 'August Event 3', date: '2024-08-30', time: '18:00', eventType: 'Low' }
  ]
  );

  const getColorByEventType = (eventType) => {
    switch (eventType.toLowerCase()) {
      case 'high':
        return 'red';
      case 'medium':
        return 'blue';
      case 'low':
        return 'green';
      default:
        return 'yellow';
    }
  };

  const handleDateClick = (info) => {
    setShowEventForm(true);
    setSelectedDate(info.dateStr);
  };

  const handleEventSubmit = (newEvent) => {
    setEvents([...events, newEvent]);
    setShowEventForm(false);
  };

  const formattedEvents = events.map(event => ({
    title: event.title,
    start: `${event.date}T${event.time}`,
    color: getColorByEventType(event.eventType)
  }));

  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setShowEventForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={formattedEvents}
        dateClick={handleDateClick}
      />
      {showEventForm && (
        <div className="overlay">
          <div className="event-form-window" ref={formRef}>
            <h2>Add New Event</h2>
            <EventForm date={selectedDate} onSubmit={handleEventSubmit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarView;
