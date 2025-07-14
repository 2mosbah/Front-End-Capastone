import { initializeTimes, updateTimes } from "./BookingProvider";

beforeEach(() => {
  window.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
});

test("initializeTimes returns available times from fetchAPI", () => {
  expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns available times from fetchAPI for dateChange", () => {
  const state = [];
  const action = { type: "dateChange", date: "2025-07-16" };
  expect(updateTimes(state, action)).toEqual(["17:00", "18:00", "19:00"]);
});

test("updateTimes returns state for unknown action", () => {
  const state = ["17:00"];
  const action = { type: "other" };
  expect(updateTimes(state, action)).toBe(state);
});
