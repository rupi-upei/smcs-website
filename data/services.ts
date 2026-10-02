// ============================================================
// SERVICES — locker rental details (official, from SMCSS).
// Edit here if prices, location, or rules change.
// ============================================================

export const lockers = {
  summary:
    "SMCSS rents lockers on the bottom floor of Cass Science Hall, right in the centre of campus.",
  price: "$10 per semester",
  deposit: "$10, refunded at the end of the semester if the rules are followed",
  period: "One semester",
  location: "Cass Science Hall, bottom floor",
  eligibility: null as string | null, // not specified yet by SMCSS
  rules: [
    "Don't leave food in your locker for long periods. It can cause mold, bad smells, and bugs.",
    "Clean out your locker and remove your lock by the last day of classes, or the deposit isn't refunded.",
  ],
  // Big numbers shown on the home page
  stats: [
    { label: "Price", value: "$10", note: "per semester" },
    { label: "Deposit", value: "$10", note: "refunded if rules are followed" },
    { label: "Where", value: "Cass", note: "Science Hall, bottom floor" },
  ],
};