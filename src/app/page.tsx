import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import SignatureBurger from "@/components/SignatureBurger";
import ExperienceHotspots from "@/components/ExperienceHotspots";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturedMenu from "@/components/FeaturedMenu";
import LifestyleBanner from "@/components/LifestyleBanner";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Header />
      <main id="main">
        <Hero />
        <FeaturedMenu />
        <SignatureBurger />
        <FeatureGrid />
        <ExperienceHotspots />
        <PhilosophySection />
        <LocationSection />
        <LifestyleBanner />
      </main>
      <Footer />
    </>
  );
}
