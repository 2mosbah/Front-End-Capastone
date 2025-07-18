import { useEffect, useState } from "react";

export default function BookingForm({
  availableTimes,
  updateDate,
  submitForm,
}) {
  const todayStr = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(todayStr);

  useEffect(() => {
    updateDate(todayStr);
  }, []);

  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const isFormValid = date && time && guests >= 1 && guests <= 10 && occasion;

  function handleDateChange(e) {
    setDate(e.target.value);
    updateDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests: parseInt(guests, 10),
      occasion,
    };
    submitForm(formData);
  }

  return (
    <section
      aria-label="Reservation Form"
      className="max-w-xl mx-auto py-12 px-4"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Reserve a Table</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#F4F4F4] rounded-lg shadow-md p-8 flex flex-col gap-6"
        aria-label="Booking Form"
      >
        <fieldset>
          <legend className="sr-only">Reservation Details</legend>
          <div>
            <label htmlFor="res-date" className="block font-semibold mb-1">
              Date
            </label>
            <input
              type="date"
              id="res-date"
              value={date}
              onChange={handleDateChange}
              required
              min={todayStr}
              className="w-full border border-gray-300 rounded px-3 py-2"
              aria-label="Reservation Date"
            />
          </div>
          <div>
            <label htmlFor="res-time" className="block font-semibold mb-1">
              Time
            </label>
            <select
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              aria-label="Reservation Time"
            >
              <option value="">Select a time</option>
              {availableTimes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="guests" className="block font-semibold mb-1">
              Number of guests
            </label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              aria-label="Number of Guests"
            />
          </div>
          <div>
            <label htmlFor="occasion" className="block font-semibold mb-1">
              Occasion
            </label>
            <select
              id="occasion"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
              className="w-full border border-gray-300 rounded px-3 py-2"
              aria-label="Occasion"
            >
              <option value="">Select occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-[#F4CE14] text-[#495E57] font-bold py-2 rounded hover:bg-yellow-300 transition"
          disabled={!isFormValid}
          aria-label="On Click"
        >
          Submit reservation
        </button>
      </form>
    </section>
  );
}
