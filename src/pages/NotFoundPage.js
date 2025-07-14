import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-[#F4F4F4] rounded-[16px] shadow-md border border-gray-300 px-8 py-12 flex flex-col items-center max-w-md">
        <h1 className="text-5xl font-extrabold text-[#495E57] mb-4">404</h1>
        <h2 className="text-2xl font-bold text-[#495E57] mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Sorry, the page you are looking for does not exist.
          <br />
          Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="bg-[#F4CE14] text-[#495E57] font-bold px-6 py-2 rounded hover:bg-yellow-300 transition"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
