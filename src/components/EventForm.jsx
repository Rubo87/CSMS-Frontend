import React, { useState, useEffect } from "react";

function EventForm({ date, onSubmit }) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    // Reset the time state when the date prop changes
    setTime("");
  }, [date]);

  const formatTime = (time) => {
    const [hours, minutes] = time.split(":");
    const formattedHours = hours.padStart(2, "0");
    const formattedMinutes = minutes.padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      title,
      time: formatTime(time),
      date, // Using the date prop directly
      eventType,
    };
    onSubmit(newEvent);
    // Reset form fields after submission
    setTitle("");
    setTime("");
    setEventType("");
  };

  const handleTimeChange = (e) => {
    // Update the time state when the time input changes
    setTime(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Date:</label>
      <input type="text" value={date} readOnly />
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label>Time:</label>
      <input
        type="time"
        value={time}
        onChange={handleTimeChange} // Call handleTimeChange on time input change
        required
      />
      <label>Event Type:</label>
      <select
        value={eventType}
        onChange={(e) => setEventType(e.target.value)}
        required
      >
        <option value="">Select Event Type</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
