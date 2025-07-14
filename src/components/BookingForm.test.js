import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={[]}
      updateDate={() => {}}
      submitForm={() => {}}
    />
  );
  const headingElement = screen.getByText(/Reserve a Table/i);
  expect(headingElement).toBeInTheDocument();
});
