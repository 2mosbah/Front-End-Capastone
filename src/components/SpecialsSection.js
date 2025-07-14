import SpecialCard from "./SpecialCard";
import { Link } from "react-router-dom";
import specials from "../data/specialsData";

export default function SpecialsSection() {
  return (
    <section id="menu" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#F4CE14] text-center md:text-left"
            style={{ fontFamily: "Markazi Text, serif" }}
          >
            Specials
          </h2>
          <Link
            to="/menu"
            className="bg-[#F4CE14] text-black px-8 py-3 rounded-[16px] text-lg font-bold hover:bg-black hover:text-[#F4CE14] transition w-full md:w-auto text-center"
            style={{ fontFamily: "Karla, sans-serif" }}
          >
            Online Menu
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((item) => (
            <SpecialCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
