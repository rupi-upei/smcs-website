// ============================================================
// SERVICES — locker rental details (official, from SMCSS).
// Edit here if prices, location, rules, or steps change.
// ============================================================

export const lockers = {
  summary:
    "SMCSS rents lockers on the bottom floor of Cass Science Hall, right in the centre of campus.",
  price: "$10 per semester",
  deposit: "$10, refunded at the end of the semester if the rules are followed",
  period: "One semester",
  location: "Cass Science Hall, bottom floor",
  eligibility: null as string | null, // not specified yet by SMCSS

  // Big numbers shown on the home page and services page
  stats: [
    { label: "Price", value: "$10", note: "per semester" },
    { label: "Deposit", value: "$10", note: "refunded if rules are followed" },
    { label: "Where", value: "Cass", note: "Science Hall, bottom floor" },
  ],

  steps: [
    {
      title: "Email SMCSS",
      text: "Send a locker request to smcss@upeisu.ca. The button on this page starts the email for you.",
    },
    {
      // PLACEHOLDER: confirm payment method with SMCSS
      title: "Pay the fee and deposit",
      text: "The rental is $10 per semester, plus a $10 refundable deposit. SMCSS will confirm how to pay.",
    },
    {
      title: "Use your locker",
      text: "Your locker is yours for the semester, on the bottom floor of Cass Science Hall.",
    },
    {
      title: "Clear it out, get your deposit back",
      text: "Empty your locker and remove your lock by the last day of classes.",
    },
  ],

  rules: [
    "Don't leave food in your locker for long periods. It can cause mold, bad smells, and bugs.",
    "Clean out your locker and remove your lock by the last day of classes, or the deposit isn't refunded.",
  ],

  faq: [
    {
      q: "How much does a locker cost?",
      a: "$10 per semester, plus a $10 deposit that's refunded at the end of the semester if the locker rules are followed.",
    },
    {
      q: "Where are the lockers?",
      a: "On the bottom floor of Cass Science Hall, right in the centre of campus.",
    },
    { q: "How long is a rental?", a: "One semester." },
    {
      q: "How do I get my deposit back?",
      a: "Follow the locker rules during the semester, then clean out your locker and remove your lock by the last day of classes.",
    },
    {
      q: "Who can rent a locker?",
      a: "Eligibility hasn't been confirmed yet. Email smcss@upeisu.ca if you're unsure.",
    },
  ],
};