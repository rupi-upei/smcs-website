// ============================================================
// SERVICES — canteen and locker details.
// Everything below is SAMPLE data (placeholder: true).
// Replace with official SMCSS info and set placeholder: false.
// ============================================================

export type OpeningHours = {
  day: number; // 0 = Sunday, 1 = Monday, ... 6 = Saturday
  open: string; // 24-hour time, e.g. "09:00"
  close: string; // e.g. "15:00"
};

export const canteen = {
  placeholder: true,
  summary: "Snacks and drinks between classes, run by the society.",
  location: "Location TBA",
  hoursSummary: "Mon–Fri, 9:00 a.m. – 3:00 p.m.", // keep in sync with `hours` below
  hours: [
    { day: 1, open: "09:00", close: "15:00" },
    { day: 2, open: "09:00", close: "15:00" },
    { day: 3, open: "09:00", close: "15:00" },
    { day: 4, open: "09:00", close: "15:00" },
    { day: 5, open: "09:00", close: "15:00" },
  ] as OpeningHours[],
};

export const lockers = {
  placeholder: true,
  summary: "Rent a locker near your classes so you're not carrying everything all day.",
  price: "Price TBA",
  period: "Rental period TBA",
};