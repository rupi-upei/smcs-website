import type { SmcssEvent } from "./types";

const HOUR = 3_600_000;

// 2026-10-07T20:30:00.000Z -> 20261007T203000Z (calendar format)
const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

function getRange(e: SmcssEvent): [Date, Date] {
  const start = new Date(e.start);
  const end = e.end ? new Date(e.end) : new Date(start.getTime() + HOUR);
  return [start, end];
}

export function googleCalendarUrl(e: SmcssEvent) {
  const [start, end] = getRange(e);
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: e.title,
    dates: `${stamp(start)}/${stamp(end)}`,
    details: e.description + (e.link ? `\n\n${e.link}` : ""),
    location: e.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

// Escape special characters for the .ics format
const esc = (s: string) =>
  s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

export function icsDataUrl(e: SmcssEvent) {
  const [start, end] = getRange(e);
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SMCSS//Events//EN",
    "BEGIN:VEVENT",
    `UID:${e.id}@upeismcss.ca`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc(e.title)}`,
    `DESCRIPTION:${esc(e.description)}`,
    `LOCATION:${esc(e.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join("\r\n"))}`;
}