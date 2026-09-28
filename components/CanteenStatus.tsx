"use client";

import { useSyncExternalStore } from "react";
import type { OpeningHours } from "@/data/services";
import { getOpenStatus } from "@/lib/hours";

// A tiny "clock" that ticks every 30 seconds
function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 30_000);
  return () => clearInterval(id);
}
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null; // unknown on the server; filled in by the browser

export default function CanteenStatus({ hours }: { hours: OpeningHours[] }) {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);

  const pill =
    "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm";

  if (minute === null) {
    return <span className={`${pill} text-muted`}>Checking hours…</span>;
  }

  const status = getOpenStatus(hours, new Date(minute * 60_000));

  return (
    <span className={pill}>
      <span
        aria-hidden="true"
        className={`size-2 rounded-full ${status.open ? "bg-emerald-500" : "bg-muted"}`}
      />
      {status.text}
    </span>
  );
}