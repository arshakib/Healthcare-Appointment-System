import Footer from "@/componenet/Footer";
import HeroSection from "@/componenet/HeroSection ";
import Navber from "@/componenet/Navber";
import Search from "@/componenet/Search";
import Screen from "@/componenet/Sreen";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full px-4 lg:px-0">
        <div className="w-full lg:w-10/12 mx-auto my-4">
          <Navber />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section - Full width */}
        <section className="w-full">
          <HeroSection />
        </section>

        {/* Content Container */}
        <div className="w-full px-4 lg:px-0">
          <div className="w-full lg:w-10/12 mx-auto space-y-16 py-12">
            <Search />
            <Screen />
          </div>
        </div>
      </main>

      {/* Footer - Full width */}
      <footer className="w-full mt-20">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
