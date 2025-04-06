import { useSession } from "next-auth/react";
import Image from "next/image";

const PatientDashboard = () => {
  const {data: session} = useSession();
  return (
    <div className="">
      <div className="bg-white rounded-lg p-6">
        <div className="md:flex items-center gap-10 space-y-10 md:space-y-0">
          <Image
            src="/welcome.png"
            alt="Doctors Illustration"
            width={450}
            height={350}
            className="w-full md:w-[350px] md:h-[200px]"
          />
          <div>
            <h2 className="text-xl font-medium text-gray-500 mb-2">Welcome back</h2>
            <h1 className="text-2xl font-bold text-blue-600 mb-2">{session?.user?.name}!</h1>
            <p className="text-gray-600">
            We would like to take this opportunity to welcome you to our practice and to thank you for choosing our physicians to participate in your healthcare. We look forward to providing you with personalized, comprehensive health care focusing on wellness and prevention.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-md">
            <div className="flex items-center justify-between gap-2">
              <Image src={item.icon} alt={item.name} width={40} height={40} />
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>
            <p className="text-xl font-semibold text-green-600 mt-4 text-end">{item.value}</p>
            <p
              className={`mt-4 text-sm text-gray-600`}
            >
              {item.change}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    name: "Blood Pressure",
    value: "110/70",
    change: "10% Higher Than Last Month",
    icon: "/blood-pressure.png",
  },
  {
    name: "Heart Pressure",
    value: "650",
    change: "07% Less Than Last Month",
    icon: "/heart-rate.png",
  },
  {
    name: "Glucose Level",
    value: "88-75",
    change: "12% Higher Than Last Month",
    icon: "/glucose.png",
  },
  {
    name: "Blood Count",
    value: "9,456/mL",
    change: "22% Less Than Last Month",
    icon: "/blood-count.png",
  },
];

export default PatientDashboard;
