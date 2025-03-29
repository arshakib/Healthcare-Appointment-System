"use client";
import { useState } from "react";
import { PencilSquareIcon, TrashIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

const patients = [
    { id: "P001", name: "John Doe", gender: "Male", admission: "10/01/2024", diagnosis: "Hypertension", followUp: "11/01/2024", status: "Recovered" },
    { id: "P002", name: "Jane Smith", gender: "Female", admission: "10/05/2024", diagnosis: "Type 2 Diabetes", followUp: "11/10/2024", status: "In Treatment" },
    { id: "P003", name: "David Johnson", gender: "Male", admission: "09/15/2024", diagnosis: "Chronic Migraine", followUp: "10/30/2024", status: "In Treatment" },
    { id: "P004", name: "Emily Davis", gender: "Female", admission: "10/03/2024", diagnosis: "Asthma", followUp: "11/03/2024", status: "Recovered" },
    { id: "P005", name: "Michael Brown", gender: "Male", admission: "09/20/2024", diagnosis: "Osteoarthritis", followUp: "10/25/2024", status: "In Treatment" },
    { id: "P006", name: "Sophia Williams", gender: "Female", admission: "10/07/2024", diagnosis: "Hyperthyroidism", followUp: "10/28/2024", status: "In Treatment" },
];

export default function PatientRecordsTable() {
    const [search, setSearch] = useState("");

    const filteredPatients = patients.filter((patient) =>
        patient.name.toLowerCase().includes(search.toLowerCase())
    );

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
                            className=" p-2 border border-gray-300 bg-white rounded-md focus:outline-none " />
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
                                <th className="px-3 py-4 text-left">Next Follow-Up</th>
                                <th className="px-3 py-4 text-left">Status</th>
                                <th className="px-3 py-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPatients.map((patient) => (
                                <tr key={patient.id} className="border-b border-gray-300 hover:bg-gray-100">
                                    <td className="px-4 py-4">{patient.id}</td>
                                    <td className="px-4 py-4">{patient.name}</td>
                                    <td className="px-4 py-4">
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${patient.gender === "Male" ? "bg-green-200 text-green-700" : "bg-purple-200 text-purple-700"
                                                }`}
                                        >
                                            {patient.gender}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4">{patient.admission}</td>
                                    <td className="px-4 py-4">{patient.diagnosis}</td>
                                    <td className="px-4 py-4">{patient.followUp}</td>
                                    <td className="px-4 py-4">{patient.status}</td>
                                    <td className="px-4 py-4 flex gap-2">
                                        <button className="text-blue-500 hover:text-blue-700">
                                            <PencilSquareIcon className="h-5 w-5" />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                            <TrashIcon className="h-5 w-5" />
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-800">
                                            <DocumentTextIcon className="h-5 w-5" />
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
