import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
export function initializeTimes() {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date());
  }
  return ["17:00", "18:00", "19:00"];
}

export function updateTimes(state, action) {
  if (action.type === "dateChange") {
    if (typeof window.fetchAPI === "function") {
      return window.fetchAPI(new Date(action.date));
    }
    return state;
  }
  return state;
}

const BookingContext = createContext();

const todayStr = new Date().toISOString().split("T")[0];

function timesReducer(state, action) {
  switch (action.type) {
    case "setTimes":
      return action.times;
    default:
      return state;
  }
}

export function BookingProvider({ children }) {
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [availableTimes, dispatch] = useReducer(timesReducer, []);

  useEffect(() => {
    if (typeof window.fetchAPI === "function") {
      const times = window.fetchAPI(new Date(selectedDate));
      dispatch({ type: "setTimes", times });
    }
  }, [selectedDate]);

  function updateDate(dateString) {
    setSelectedDate(dateString);
  }

  return (
    <BookingContext.Provider value={{ availableTimes, updateDate }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  return useContext(BookingContext);
}
