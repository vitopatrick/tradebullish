import AboutInvest from "@/components/about/AboutInvest";
import WhyChooseUs from "@/components/about/ChooseUs";
import GetStartedToday from "@/components/about/GetStartedToday";
import Simplicity from "@/components/about/Simplicity";

export default function AboutPage() {
  return (
    <section>
      {/* container for the about page */}
      <main className="w-4/5 mx-auto py-8">
        <AboutInvest />
        <GetStartedToday />
        <WhyChooseUs />
        <Simplicity />
      </main>
      {/* end of container for the about page */}
    </section>
  );
}
