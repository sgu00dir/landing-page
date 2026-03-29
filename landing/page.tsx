import Topbar from "./topbar";
import Hero from "./hero";
import Footer from "./footer";
import Carousel from "./carousel";
import CTA from "./cta";
import OutcomesGrid from "./outcomes";

// Simple page wiring the landing sections together.
export default function LandingPage({
  isLoggedIn = false,
}: {
  isLoggedIn?: boolean;
}) {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">
      <Topbar isLoggedIn={isLoggedIn} />
      <div className="pt-16" />
      <Hero isLoggedIn={isLoggedIn} />
      {/* Explainer */}
      <Carousel />
      {/* CTA above Outcomes */}
      <CTA />
      {/* Outcomes section (flip cards) */}
      <OutcomesGrid />
      <Footer />
    </main>
  );
}
