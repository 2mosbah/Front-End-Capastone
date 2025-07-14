import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const defaultProps = {
  availableTimes: ["17:00", "18:00"],
  updateDate: jest.fn(),
  submitForm: jest.fn(),
};

test("Date input has required and min attributes", () => {
  render(<BookingForm {...defaultProps} />);
  const dateInput = screen.getByLabelText(/Date/i);
  expect(dateInput).toHaveAttribute("required");
  expect(dateInput).toHaveAttribute("min");
});

test("Time select has required attribute", () => {
  render(<BookingForm {...defaultProps} />);
  const timeSelect = screen.getByLabelText(/Time/i);
  expect(timeSelect).toHaveAttribute("required");
});

test("Guests input has required, min, and max attributes", () => {
  render(<BookingForm {...defaultProps} />);
  const guestsInput = screen.getByLabelText(/Number of guests/i);
  expect(guestsInput).toHaveAttribute("required");
  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("Occasion select has required attribute", () => {
  render(<BookingForm {...defaultProps} />);
  const occasionSelect = screen.getByLabelText(/Occasion/i);
  expect(occasionSelect).toHaveAttribute("required");
});

test("Submit button is disabled when form is invalid", () => {
  render(<BookingForm {...defaultProps} />);
  const submitButton = screen.getByRole("button", {
    name: /submit reservation/i,
  });
  expect(submitButton).toBeDisabled();
});

test("Submit button is enabled when form is valid", () => {
  render(<BookingForm {...defaultProps} />);
  fireEvent.change(screen.getByLabelText(/Date/i), {
    target: { value: "2025-07-14" },
  });
  fireEvent.change(screen.getByLabelText(/Time/i), {
    target: { value: "17:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "2" },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: "Birthday" },
  });
  const submitButton = screen.getByRole("button", {
    name: /submit reservation/i,
  });
  expect(submitButton).not.toBeDisabled();
});
