import AboutAgency from "@/components/about/about-agency";
import OurMission from "@/components/about/our-mission";
import OurTeam from "@/components/about/our-team";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";

export default function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* About Agency */}
      <AboutAgency />
      {/* Our Team */}
      <OurTeam />
      {/* Our Mission */}
      <OurMission />
      {/* Footer */}
      <Footer />
    </>
  );
}
