"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useSession } from "next-auth/react";

const localizer = momentLocalizer(moment);

const DoctorCalendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [view, setView] = useState(Views.MONTH);
  const { data: session } = useSession();

  const doctorEmail = session?.user?.email;

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        if (!doctorEmail) return;

        const res = await axios.get(`/api/appointment?doctorEmail=${doctorEmail}`);
        const data = res.data;

        // Format data for calendar
        const formattedEvents = data.map((appointment) => {
          const date = appointment.selectedDate; 
          const time = appointment.selectedTime; 

          const start = moment(`${date} ${time}`, "YYYY-MM-DD hh:mm A").toDate();
          const end = moment(start).add(30, 'minutes').toDate();

          return {
            title: `Patient: ${appointment.patientName}`,
            start,
            end,
          };
        });

        setAppointments(formattedEvents);
      } catch (error) {
        console.error("Appointment fetching failed", error);
      }
    };

    fetchAppointments();
  }, [doctorEmail]);

  return (
    <div className="p-5 bg-white rounded-md text-black">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctor's Appointment Calendar</h2>

      <div style={{ height: "75vh", width: "100%" }}>
        <Calendar
          localizer={localizer}
          events={appointments}
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

