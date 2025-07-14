import { useRef, useEffect } from "react";
import adrian from "../assets/Mario and Adrian b.jpg";
import restaurant from "../assets/restaurant.jpg";

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    section.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      section.classList.remove("opacity-0", "translate-y-8");
      section.classList.add("opacity-100", "translate-y-0");
    }, 100);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-[#F4F4F4] rounded-[16px] shadow-sm border sm:items-center border-gray-300 flex flex-col md:flex-row md:justify-between max-w-8xl mx-auto my-12 px-8 py-12 transition-all duration-700 ease-out opacity-0 translate-y-8"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Left: Text */}
      <div className="flex-1 md:pr-12 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Little Lemon</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-6">Chicago</h2>
        <p className="text-[#495E57] text-base font-medium mb-4 lg:w-[500px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p className="text-[#495E57] text-base font-medium lg:w-[500px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      {/* Right: Overlapping Images */}
      <div className="flex flex-1 justify-center items-center relative min-w-[320px] min-h-[260px] md:flex-none md:mx-20">
        {/* Back image */}
        <div className="absolute left-0 top-12 w-56 h-56 bg-gray-300 rounded-lg shadow-md border border-gray-300 -z-10 transition-transform duration-500 hover:scale-105">
          <img
            src={adrian}
            alt="adrian"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Front image */}
        <div className="absolute left-16 top-0 w-72 h-64 bg-gray-300 rounded-lg shadow-lg border border-gray-300 transition-transform duration-500 hover:scale-105">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
