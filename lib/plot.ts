import type { EventCategory, SmcssEvent } from "./types";
import { formatDate, formatMonth, formatTime } from "./events";

export type PlotPoint = {
  id: string;
  title: string;
  category: EventCategory;
  dateLabel: string;
  timeLabel: string;
  location: string;
  placeholder?: boolean;
  x: number;
  y: number;
};

export type PlotData = {
  width: number;
  height: number;
  axisY: number;
  todayX: number;
  path: string;
  points: PlotPoint[];
  ticks: { x: number; label: string }[];
};

const W = 800;
const H = 300;
const LEFT = 48;
const RIGHT = 752;
const AXIS_Y = 262;
const DAY = 86_400_000;

// The curve's shape: a gentle wave that grows slightly over time.
function curveY(x: number) {
  const t = (x - LEFT) / (RIGHT - LEFT);
  return 150 - 70 * (0.6 + 0.4 * t) * Math.sin(t * Math.PI * 2.4 + 0.4);
}

export function buildPlot(upcoming: SmcssEvent[], now: Date): PlotData {
  // Up to 6 events in the next ~4 months (always at least the next one)
  const soon = upcoming
    .filter((e) => new Date(e.start).getTime() - now.getTime() < 120 * DAY)
    .slice(0, 6);
  const shown = soon.length ? soon : upcoming.slice(0, 1);

  // Time range shown on the x-axis
  const start = now.getTime();
  const last = shown.length
    ? new Date(shown[shown.length - 1].start).getTime()
    : start + 30 * DAY;
  const end = Math.max(last, start + 21 * DAY) + 7 * DAY;
  const xOf = (ms: number) =>
    Math.max(LEFT, LEFT + ((ms - start) / (end - start)) * (RIGHT - LEFT));

  // Curve drawn as 120 small line segments
  let path = "";
  for (let i = 0; i <= 120; i++) {
    const x = LEFT + ((RIGHT - LEFT) * i) / 120;
    path += `${i ? "L" : "M"}${x.toFixed(1)} ${curveY(x).toFixed(1)} `;
  }

  const points: PlotPoint[] = shown.map((e) => {
    const x = xOf(new Date(e.start).getTime());
    return {
      id: e.id,
      title: e.title,
      category: e.category,
      dateLabel: formatDate(e.start),
      timeLabel: formatTime(e.start),
      location: e.location,
      placeholder: e.placeholder,
      x,
      y: curveY(x),
    };
  });

  // One tick at the start of each month (noon UTC avoids time-zone edge cases)
  const ticks: PlotData["ticks"] = [];
  const d = new Date(start);
  let y = d.getUTCFullYear();
  let m = d.getUTCMonth() + 1;
  while (true) {
    const ms = Date.UTC(y, m, 1, 12);
    if (ms >= end) break;
    ticks.push({ x: xOf(ms), label: formatMonth(new Date(ms)) });
    m++;
    if (m > 11) {
      m = 0;
      y++;
    }
  }

  return { width: W, height: H, axisY: AXIS_Y, todayX: LEFT, path: path.trim(), points, ticks };
}