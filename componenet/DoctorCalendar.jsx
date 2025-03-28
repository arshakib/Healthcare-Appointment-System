"use client";

import { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Patient: John Doe",
    start: new Date(2025, 2, 30, 10, 0),
    end: new Date(2025, 2, 30, 11, 0),
  },
  {
    title: "Patient: Sarah Smith",
    start: new Date(2025, 2, 31, 14, 0),
    end: new Date(2025, 2, 31, 15, 0),
  },
];

const DoctorCalendar = () => {
  const [view, setView] = useState(Views.MONTH);

  return (
    <div className="p-5 bg-white rounded-md text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctor's Appointment Calendar</h2>

      <div style={{ height: "75vh", width: "100%" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView={view}
          onView={(newView) => setView(newView)}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default DoctorCalendar;

