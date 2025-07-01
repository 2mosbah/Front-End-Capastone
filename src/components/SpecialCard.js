import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function SpecialCard({ image, title, price, description }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    card.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      card.classList.remove("opacity-0", "translate-y-8");
      card.classList.add("opacity-100", "translate-y-0");
    }, 100);
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#F4F4F4] rounded-[16px] overflow-hidden shadow-sm flex flex-col h-full border border-gray-300 transition-all duration-700 ease-out opacity-0 translate-y-8 hover:scale-105 hover:shadow-lg"
      style={{ willChange: "transform, opacity" }}
    >
      <div className="h-48 bg-gray-300 flex items-center justify-center transition-all duration-500">
        {image ? (
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-t-[16px] scale-100 hover:scale-105 transition-transform duration-500"
          />
        ) : (
          // Placeholder SVG
          <svg width="100%" height="100%" viewBox="0 0 320 192">
            <rect width="320" height="192" fill="#D1D5DB" />
            <line x1="0" y1="0" x2="320" y2="192" stroke="#6B7280" />
            <line x1="320" y1="0" x2="0" y2="192" stroke="#6B7280" />
          </svg>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg text-gray-900">{title}</h3>
          <span className="text-[#EE9972] font-semibold text-base">
            ${price}
          </span>
        </div>
        <p className="text-[#495E57] text-base mb-4 flex-1">{description}</p>
        <Link
          to="/order"
          className="font-bold text-gray-900 flex items-center gap-2 mt-auto hover:text-[#F4CE14] transition-colors duration-300"
        >
          Order a delivery
          <span
            role="img"
            aria-label="delivery"
            className="text-[#495E57] transition-transform duration-300 group-hover:translate-x-1"
          >
            🚴‍♂️
          </span>
        </Link>
      </div>
    </div>
  );
}
