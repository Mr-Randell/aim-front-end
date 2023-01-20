import React, { useState } from 'react'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// 
const locales = {
  // "en-KE": require("date-fns/locale/en-KE"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// dummy data 
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2023, 1, 1),
    end: new Date(2023, 2, 3),
  },
  {
    title: "Vacation",
    start: new Date(2023, 1, 7),
    end: new Date(2023, 3, 10),
  },
  {
    title: "Conference",
    start: new Date(2023, 1, 20),
    end: new Date(2023, 1, 23),
  },
];

function CalendarDate() {
   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
   const [allEvents, setAllEvents] = useState(events);

    function handleAddEvent() {
      for (let i = 0; i < allEvents.length; i++) {
        const d1 = new Date(allEvents[i].start);
        const d2 = new Date(newEvent.start);
        const d3 = new Date(allEvents[i].end);
        const d4 = new Date(newEvent.end);
        /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

        if ((d1 <= d2 && d2 <= d3) || (d1 <= d4 && d4 <= d3)) {
          alert("CLASH");
          break;
        }
      }

      setAllEvents([...allEvents, newEvent]);
    }

  return (
    <div className="App">
      {/* <h1>Calendar</h1> */}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 ml-12">
        Add New Event
      </h2>
      <div className="ml-12 p-2">
        <input
          type="text"
          placeholder="Add Title"
          style={{ width: "20%", marginRight: "10px" }}
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <DatePicker
          placeholderText="Start Date"
          style={{ marginRight: "10px", padding: "10px" }}
          selected={newEvent.start}
          onChange={(start) => setNewEvent({ ...newEvent, start })}
        />
        <DatePicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={(end) => setNewEvent({ ...newEvent, end })}
        />
        <button
        className='bg-blue-500 p-1 rounded-sm text-white'
          stlye={{ marginTop: "10px", padding: "10px" }}
          onClick={handleAddEvent}
        >
          Add Event
        </button>
      </div>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "50px" }}
      />
    </div>
  );
}

export default CalendarDate