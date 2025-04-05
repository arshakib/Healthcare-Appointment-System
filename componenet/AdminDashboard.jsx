"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {

    const [stats, setStats] = useState({
        totalPatients: 0,
        totalDoctors: 0,
        totalAppointments: 0,
        todayAppointments: [],
      });
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const fetchStats = async () => {
          try {
            const response = await axios.get("/api/totalstats");
            setStats(response.data);
            setLoading(false);
          } catch (error) {
            console.error("Error fetching stats", error);
            setLoading(false);
          }
        };
    
        fetchStats();
      }, []);
    
      if (loading) return <div className="text-gray-800">Loading stats...</div>;
      console.log(stats)
    

    const appointments = [
        { id: 1, patient: "John Doe", time: "10:00 AM", doctor: "Dr. Smith", status: "Confirmed" },
        { id: 2, patient: "Emma Clark", time: "2:30 PM", doctor: "Dr. Lee", status: "Pending" },
    ];


    const admissionData = [
        { day: "Mon", admissions: 12 },
        { day: "Tue", admissions: 19 },
        { day: "Wed", admissions: 8 },
        { day: "Thu", admissions: 15 },
        { day: "Fri", admissions: 10 },
    ];

    return (
        <div className=" bg-white">


            {/* Main Content */}
            <div className="p-6 text-gray-800">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {/* Card 1: Total Patients */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-gray-500">Total Patients</p>
                                <p className="text-3xl font-bold mt-2">{stats?.totalPatients}</p>
                            </div>
                            <span className="text-2xl">🏥</span>
                        </div>
                        <p className="mt-2 text-sm text-green-500">↑ 8% from last month</p>
                    </div>

                    {/* Card 2: Total Doctors (Updated) */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-gray-500">Total Doctors</p>
                                <p className="text-3xl font-bold mt-2">{stats?.totalDoctors}</p>
                            </div>
                            <span className="text-2xl">👨‍⚕️</span> {/* Doctor emoji */}
                        </div>
                        <p className="mt-2 text-sm text-blue-500">↑ 2 new hires</p>
                    </div>

                    {/* Card 3: Active Appointments */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <div className="flex justify-between">
                            <div>
                                <p className="text-gray-500">Total Appointments</p>
                                <p className="text-3xl font-bold mt-2">{stats?.totalAppointments}</p>
                            </div>
                            <span className="text-2xl">📅</span>
                        </div>
                        <p className="mt-2 text-sm text-red-500">↓ 3% from yesterday</p>
                    </div>

                    
                </div>

                {/* Charts & Alerts Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    {/* Patient Admissions Chart */}
                    <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
                        <h3 className="text-lg font-medium mb-4">Patient Admissions (This Week)</h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={admissionData}>
                                    <XAxis dataKey="day" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="admissions" fill="#3B82F6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
                        <div className="space-y-3">
                            <button className="w-full flex items-center justify-between p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition">
                                <span>Add New Patient</span>
                                <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 bg-green-50 hover:bg-green-100 rounded-lg transition">
                                <span>Schedule Appointment</span>
                                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button className="w-full flex items-center justify-between p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition">
                                <span>Generate Report</span>
                                <svg className="h-5 w-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L10 1.586A2 2 0 008.586 1H6zm5 8a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 13.586V10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

                {/* Appointments & Quick Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Upcoming Appointments */}
                    <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
                        <h3 className="text-lg font-medium mb-4">Today's Appointments</h3>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left text-gray-500 border-b">
                                    <th className="pb-2">Patient</th>
                                    <th className="pb-2">Time</th>
                                    <th className="pb-2">Doctor</th>
                                    <th className="pb-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats?.todayAppointments?.map((app) => (
                                    <tr key={app?._id} className="border-b hover:bg-gray-50">
                                        <td className="py-3">{app.patientName}</td>
                                        <td className="py-3">{app.selectedDate}</td>
                                        <td className="py-3">{app.doctorName}</td>
                                        <td className="py-3">
                                            <span className={`px-2 py-1 rounded-full text-xs ${app.status === "Confirmed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                                                }`}>
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;