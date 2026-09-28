export type EventCategory =
  | "Academic"
  | "Social"
  | "Competition"
  | "Career"
  | "Workshop"
  | "Community";

export type SmcssEvent = {
  id: string; // unique, lowercase-with-dashes, e.g. "python-workshop-oct-2026"
  title: string;
  start: string; // date + time with Atlantic offset, e.g. "2026-10-07T17:30:00-03:00"
  end?: string;
  location: string;
  category: EventCategory;
  description: string;
  link?: string; // registration or more info
  placeholder?: boolean; // true = sample event, not real SMCSS info
};