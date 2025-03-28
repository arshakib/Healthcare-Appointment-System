import { FaFilePdf } from "react-icons/fa";

const appointments = [
  { id: 1, name: "Angelica", gender: "Female", date: "12/05/2016", disease: "Typhoid", color: "border-purple-400 text-purple-600" },
  { id: 2, name: "Ashton", gender: "Female", date: "12/05/2016", disease: "Malaria", color: "border-orange-400 text-orange-600" },
  { id: 3, name: "Cara", gender: "Male", date: "12/05/2016", disease: "Infection", color: "border-cyan-400 text-cyan-600" },
  { id: 4, name: "Michael", gender: "Male", date: "12/06/2016", disease: "Flu", color: "border-blue-400 text-blue-600" },
  { id: 5, name: "Emily", gender: "Female", date: "12/07/2016", disease: "Pneumonia", color: "border-red-400 text-red-600" },
  { id: 6, name: "David", gender: "Male", date: "12/08/2016", disease: "Diabetes", color: "border-green-400 text-green-600" },
  { id: 7, name: "Olivia", gender: "Female", date: "12/09/2016", disease: "Asthma", color: "border-purple-400 text-purple-600" },
  { id: 8, name: "James", gender: "Male", date: "12/10/2016", disease: "Hypertension", color: "border-orange-400 text-orange-600" },
];

export default function AppointmentTable() {
  return (
    <div className="bg-white rounded-md p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Appointments</h2>
        <a href="#" className="text-blue-500 hover:underline">View All</a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Gender</th>
              <th className="py-3 px-4">Date</th>
              <th className="py-3 px-4">Disease</th>
              <th className="py-3 px-4">Report</th>
              <th className="py-3 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-4 flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                  <span>{appt.name}</span>
                </td>
                <td className="py-3 px-4">{appt.gender}</td>
                <td className="py-3 px-4">{appt.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 border rounded-full text-xs font-medium ${appt.color}`}>
                    {appt.disease}
                  </span>
                </td>
                <td className="py-3 px-4 text-red-500 text-lg"><FaFilePdf /></td>
                <td className="py-3 px-4">
                  <a href="#" className="text-blue-500 hover:underline">Details</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

