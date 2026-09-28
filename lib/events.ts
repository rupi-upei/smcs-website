import { events } from "@/data/events";
import type { SmcssEvent } from "./types";

// PEI uses Atlantic Time (same as Halifax)
const TZ = "America/Halifax";

const startMs = (e: SmcssEvent) => new Date(e.start).getTime();
const endMs = (e: SmcssEvent) => new Date(e.end ?? e.start).getTime();

export function getUpcomingEvents(now = new Date()): SmcssEvent[] {
  return events
    .filter((e) => endMs(e) >= now.getTime())
    .sort((a, b) => startMs(a) - startMs(b));
}

export function getPastEvents(now = new Date()): SmcssEvent[] {
  return events
    .filter((e) => endMs(e) < now.getTime())
    .sort((a, b) => startMs(b) - startMs(a));
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    weekday: "short",
    month: "short",
    day: "numeric",
    timeZone: TZ,
  }).format(new Date(iso));
}

export function formatTime(iso: string) {
  return new Intl.DateTimeFormat("en-CA", {
    hour: "numeric",
    minute: "2-digit",
    timeZone: TZ,
  }).format(new Date(iso));
}

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("en-CA", { month: "short", timeZone: TZ }).format(date);
}