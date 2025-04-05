import DoctorDashboard from "@/componenet/DoctorDashboard";
import PatientDashboard from "@/componenet/PatientDashboard";


export default function Dashboard() {
  const role = "doctor";
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