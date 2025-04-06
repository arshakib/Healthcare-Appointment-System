import FaqSection from "@/componenet/FaqSection";
import HeroSection from "@/componenet/HeroSection ";

import OurDoctor from "@/componenet/OurDoctor";
import Search from "@/componenet/Search";
import StatsCounter from "@/componenet/StatsCounter";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section - Full width */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Search Section with contained width */}
        <section className="w-full py-16 bg-gradient-to-b from-[#033137]/5 to-transparent">
          <div className="w-full lg:w-10/12 max-w-7xl mx-auto px-4 sm:px-6">
            <Search />
          </div>
        </section>

        {/* Doctors Section */}
        <section className="w-full py-16 bg-white">
          <OurDoctor />
        </section>

        {/* Stats Section */}
        <section className="w-full">
          <StatsCounter />
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-gray-50">
          <div className="w-full lg:w-10/12 max-w-7xl mx-auto px-4 sm:px-6">
            <FaqSection />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
