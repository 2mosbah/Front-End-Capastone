import { useBooking } from "../contexts/BookingProvider";
import BookingForm from "../components/BookingForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const { availableTimes, updateDate } = useBooking();
  const navigate = useNavigate();

  function submitForm(formData) {
    if (typeof window.submitAPI === "function") {
      const success = window.submitAPI(formData);
      if (success) {
        navigate("/confirmed");
      } else {
        alert("Booking failed. Please try again.");
      }
    } else {
      console.error("submitAPI function is not defined.");
    }
  }

  return (
    <>
      <Navbar />
      <section className="max-w-xl mx-auto py-12 px-4">
        <BookingForm
          availableTimes={availableTimes}
          updateDate={updateDate}
          submitForm={submitForm}
        />
      </section>
      <Footer />
    </>
  );
}
