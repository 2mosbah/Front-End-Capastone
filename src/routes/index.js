import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingPage from "../pages/BookingPage";
import App from "../App";
import NotFoundPage from "../pages/NotFoundPage";
import { BookingProvider } from "../contexts/BookingProvider";
import ConfirmedBooking from "../pages/ConfirmedBooking";

const AppRoutes = () => (
  <BookingProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="reservations" element={<BookingPage />} />
        <Route path="confirmed" element={<ConfirmedBooking />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </BookingProvider>
);

export default AppRoutes;
