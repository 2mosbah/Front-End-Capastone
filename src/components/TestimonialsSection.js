import testimonials from "../data/testimonialsData";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: "#EDEFEE" }}>
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#F4CE14]"
          style={{ fontFamily: "Markazi Text, serif" }}
        >
          Testimonials
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
