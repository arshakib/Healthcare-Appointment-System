"use client";
import DoctorDashboard from "@/componenet/DoctorDashboard";
import useUserRole from "@/componenet/hooks/useUserRole";
import PatientDashboard from "@/componenet/PatientDashboard";


export default function Dashboard() {
  const {role, loading} = useUserRole();
  if(loading) return <h2 className="text-gray-800">Loading...</h2>
  return (
    <>

      {role === "doctor" ?
        <>
          {/* appointment table */}
          <div className="px-4 py-10">
            <DoctorDashboard />
          </div>
        </>
        :<>
          <div className="px-4 py-10">
            <PatientDashboard/>
          </div>
        </>}


    </>
  );
}