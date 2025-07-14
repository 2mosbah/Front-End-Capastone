import { Link } from "react-router-dom";

export default function ConfirmedBooking() {
  return (
    <section className="max-w-xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Booking Confirmed!
      </h1>
      <p className="text-lg">
        Thank you for your reservation. We look forward to seeing you at Little
        Lemon!
      </p>
      <Link to="/" className="mt-6 inline-block text-blue-600 hover:underline">
        Back to Home Page
      </Link>
    </section>
  );
}
