"use client";
import { useEffect, useState } from "react";
import {
  PencilSquareIcon,
  TrashIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function PatientRecordsTable() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [search, setSearch] = useState("");

  const filteredPatients = appointments.filter((patient) =>
    patient.patientName?.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const appointmentRes = await axios.get(`/api/appointment`);
        setAppointments(appointmentRes.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [session?.user?.email]);

  if (loading) return <div className="text-gray-800">Loading...</div>;

  console.log(appointments);

  return (
    <div className=" text-black">
      <div className="bg-white rounded-md">
        {/* Search Input */}
        <div className="  bg-[#dae1f3] py-3 rounded-t-md">
          <div className="flex items-center gap-2 px-4">
            <h2 className="text-[20px] text-gray-500">Patient Records</h2>
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className=" p-2 border border-gray-300 bg-white rounded-md focus:outline-none "
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-300 text-gray-800">
                <th className="px-4 py-4 text-left">Patient ID</th>
                <th className="px-3 py-4 text-left">Full Name</th>
                <th className="px-3 py-4 text-left">Gender</th>
                <th className="px-3 py-4 text-left">Date of Admission</th>
                <th className="px-3 py-4 text-left">Diagnosis</th>
                <th className="px-3 py-4 text-left">Status</th>
                <th className="px-3 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredPatients?.map((patient, index) => (
                <tr
                  key={patient._id}
                  className="border-b border-gray-300 hover:bg-gray-100"
                >
                  <td className="px-4 py-4">{index + 1}</td>
                  <td className="px-4 py-4">{patient?.patientName}</td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        patient.gender === "Male"
                          ? "bg-green-200 text-green-700"
                          : "bg-purple-200 text-purple-700"
                      }`}
                    >
                      male
                    </span>
                  </td>
                  <td className="px-4 py-4">{patient?.selectedDate}</td>
                  <td className="px-4 py-4">Fever</td>
                  <td className="px-4 py-4">Pending</td>
                  <td className="px-4 py-4 flex gap-2">
                    <button className="text-red-500 hover:text-red-700">
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
