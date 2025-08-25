import Footer from "@/components/shared/Footer/Footer";
import AdventureSection from "@/features/home/AdventureSection";
import DestinationsSection from "@/features/home/DestinationsSection";
import Landing from "@/features/home/Landing";
import Services from "@/features/home/Services";
import Stats from "@/features/home/State";
import { Team } from "@/features/home/Team";
import TravelGallery from "@/features/home/TravelGallery";

function Home() {
  return (
    <main>
      <Landing />
      <DestinationsSection />
      <TravelGallery />
      <Services />
      <Team />
      <Stats />
      <AdventureSection />
      <Footer />
    </main>
  );
}

export default Home;
