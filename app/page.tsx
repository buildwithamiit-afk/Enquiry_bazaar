import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { DependencyProblem } from "@/components/landing/DependencyProblem";
import { GrowthBanner } from "@/components/landing/GrowthBanner";
import { Industries } from "@/components/landing/Industries";
import { TrustedBy } from "@/components/landing/TrustedBy";
import { DigitalPresenceSolution } from "@/components/landing/DigitalPresenceSolution";
import { PlatformComparison } from "@/components/landing/PlatformComparison";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 overflow-hidden">
        <Hero />
        <DependencyProblem />
        <GrowthBanner />
        <Industries />
        <TrustedBy />
        <DigitalPresenceSolution />
        <PlatformComparison />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
