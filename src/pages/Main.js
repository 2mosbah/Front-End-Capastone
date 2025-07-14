import AboutSection from "../components/AboutSection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

export default function Main() {
  return (
    <main className="mx-auto px-4 sm:px-6 lg:px-8">
      <Specials />
      <Testimonials />
      <AboutSection />
    </main>
  );
}
