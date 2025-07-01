import { useEffect, useRef } from "react";

function StarRating({ count }) {
  return (
    <div className="flex gap-1 mb-2">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-[#F4CE14] transition-transform duration-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <polygon points="10,1 12.59,7.36 19.51,7.36 13.97,11.63 16.56,17.99 10,13.72 3.44,17.99 6.03,11.63 0.49,7.36 7.41,7.36" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({ rating, name, review, avatar, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    card.classList.add("opacity-0", "translate-y-8");
    setTimeout(() => {
      card.classList.remove("opacity-0", "translate-y-8");
      card.classList.add("opacity-100", "translate-y-0");
    }, 100 + index * 150);
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-[16px] shadow-md p-6 flex flex-col items-start min-w-[220px] transition-all duration-700 ease-out opacity-0 translate-y-8 hover:scale-105 hover:shadow-lg"
      style={{ willChange: "transform, opacity" }}
    >
      <StarRating count={rating} />
      <div className="flex items-center gap-3 mb-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border-2 border-[#495E57]"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center border-2 border-[#495E57]">
            <svg width="32" height="32" viewBox="0 0 32 32" className="text-gray-400">
              <rect width="32" height="32" fill="#E5E7EB" />
              <line x1="0" y1="0" x2="32" y2="32" stroke="#6B7280" />
              <line x1="32" y1="0" x2="0" y2="32" stroke="#6B7280" />
            </svg>
          </div>
        )}
        <span className="font-bold text-lg text-[#495E57]" style={{ fontFamily: "Karla, sans-serif" }}>
          {name}
        </span>
      </div>
      <p className="text-[#495E57] text-base" style={{ fontFamily: "Karla, sans-serif" }}>
        {review}
      </p>
    </div>
  );
}