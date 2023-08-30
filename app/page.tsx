import Cta from "@/components/home/Cta";
import CtaTwo from "@/components/home/CtaTwo";
import Hero from "@/components/home/Hero";
import HeroThree from "@/components/home/HeroThree";
import HeroTwo from "@/components/home/HeroTwo";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      {/* hero image */}
      <Hero />
      {/* end of hero */}
      {/* CTA convincing */}
      <Cta />
      {/* end of CTA convincing */}
      <WhyChooseUs />
      <HeroTwo />
      <HeroThree />
      <CtaTwo />
    </main>
  );
}
