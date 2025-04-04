import DoctorProfile from "@/componenet/DoctorProfile";
import PatientProfile from "@/componenet/PatientProfile";

//https://www.einfosoft.com/templates/admin/cliniva/source/light/#/admin/doctors/doctor-profile

const Profile = () => {
  const role = "doctor";
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
