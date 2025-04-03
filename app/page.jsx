import FaqSection from "@/componenet/FaqSection";
import HeroSection from "@/componenet/HeroSection ";
import OurDoctor from "@/componenet/OurDoctor";
import Search from "@/componenet/Search";
import StatsCounter from "@/componenet/StatsCounter";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <section className="w-full">
          <HeroSection />
        </section>
        <div className="w-full ">
          <div className="w-full lg:w-10/12 mx-auto space-y-16 py-12">
            <Search />
            {/* <Screen /> */}
            {/* 
            <iframe
              className="w-full lg:w-10/12 mx-auto"
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Ec0Ww-2zc-rRratBCxZilrTZJP_W8sMx-6MT3rikY5ahiNPMcjXoBGaRnoXVZ80lA1jtjfCZA?gv=true"
              height="1000"
            ></iframe>

            <iframe
              src="https://calendar.google.com/calendar/embed?src=atking2240%40gmail.com&ctz=Asia%2FDhaka"
              width="800"
              height="600"
            ></iframe> */}
          </div>
          <OurDoctor/>
          <StatsCounter/>
          <FaqSection/>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
