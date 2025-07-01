import { Link } from "react-router-dom";
import heroImg from "../assets/restauranfood.jpg";

export default function Hero() {
  return (
    <section
      className="py-16 px-4 flex justify-center"
      style={{ backgroundColor: "#495E57" }}
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-16">
        {/* Left Side */}
        <div className="flex-1 text-white max-w-md">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#F4CE14] mb-2 leading-tight"
            style={{ fontFamily: "Markazi Text, serif" }}
          >
            Little Lemon
          </h1>
          <h2
            className="text-3xl md:text-4xl font-semibold mb-4 text-white"
            style={{ fontFamily: "Markazi Text, serif" }}
          >
            Chicago
          </h2>
          <p
            className="mb-8 text-lg md:text-xl text-white font-medium"
            style={{ fontFamily: "Karla, sans-serif" }}
          >
            We are a family owned Mediterranean restaurant,
            <br />
            focused on traditional recipes served with a modern twist.
          </p>
          <Link
            to="/reservations"
            className="bg-[#F4CE14] text-black px-8 py-3 rounded-[16px] text-lg font-bold hover:bg-black hover:text-[#F4CE14] transition"
            style={{ fontFamily: "Karla, sans-serif" }}
          >
            Reserve a Table
          </Link>
        </div>
        {/* Right Side */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-80 h-80 bg-gray-200 flex items-center justify-center rounded-[16px] overflow-hidden shadow-md">
            <img
              src={heroImg}
              alt="Restaurant Food"
              className="object-cover w-full h-full rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
