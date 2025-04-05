"use client"
import DoctorProfile from "@/componenet/DoctorProfile";
import useUserRole from "@/componenet/hooks/useUserRole";
import PatientProfile from "@/componenet/PatientProfile";


const Profile = () => {
 
  const {role, loading} = useUserRole();
  if(loading) return <h2 className="text-gray-800">Loading...</h2> 
  return (
    <>
      {role === "doctor" ? (
        <>
          <div className="px-4 py-10">
            <DoctorProfile />
          </div>
        </>
      ) : (
        <>
          <div className="px-4 py-10">
            <PatientProfile />
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
