import HeroSection from "@/componenet/HeroSection ";
import Search from "@/componenet/Search";
import Screen from "@/componenet/Sreen";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow">
        <section className="w-full">
          <HeroSection />
        </section>
        <div className="w-full px-4 lg:px-0">
          <div className="w-full lg:w-10/12 mx-auto space-y-16 py-12">
            <Search />
            {/* <Screen /> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
