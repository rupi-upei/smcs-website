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

export type ResourceCategory =
  | "Help & Support"
  | "UPEI"
  | "Math"
  | "Computer Science"
  | "Writing & Research"
  | "Opportunities";

export type Resource = {
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  featured?: boolean; // true = also shown on the home page
};

export type Executive = {
  role: string;
  name?: string; // leave out until confirmed
  program?: string; // e.g. "BSc Computer Science, 3rd year"
  bio?: string;
  photo?: string; // e.g. "/executives/jane.jpg" (file goes in public/executives/)
  email?: string;
  linkedin?: string;
};