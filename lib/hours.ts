import type { OpeningHours } from "@/data/services";

const TZ = "America/Halifax"; // PEI uses Atlantic Time
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Current day and minute-of-day in PEI, regardless of the visitor's own time zone
function nowInPEI(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return {
    day: DAYS.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

const toLabel = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h < 12 ? "a.m." : "p.m."}`;
};

export function getOpenStatus(hours: OpeningHours[], date = new Date()) {
  const { day, minutes } = nowInPEI(date);

  // Open right now?
  const today = hours.find((h) => h.day === day);
  if (today && minutes >= toMinutes(today.open) && minutes < toMinutes(today.close)) {
    const left = toMinutes(today.close) - minutes;
    return {
      open: true,
      text: left <= 60 ? `Open · closes in ${left} min` : `Open · until ${toLabel(today.close)}`,
    };
  }

  // Otherwise, find the next opening in the coming week
  for (let i = 0; i < 8; i++) {
    const d = (day + i) % 7;
    const slot = hours.find((h) => h.day === d);
    if (!slot) continue;
    if (i === 0 && minutes >= toMinutes(slot.open)) continue;
    const when = i === 0 ? "today" : i === 1 ? "tomorrow" : DAYS[d];
    return { open: false, text: `Closed · opens ${when} ${toLabel(slot.open)}` };
  }

  return { open: false, text: "Closed" };
}