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
