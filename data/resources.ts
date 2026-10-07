import type { Resource } from "@/lib/types";

// ============================================================
// RESOURCES — add, edit, or remove links here.
// featured: true = also shown on the home page (keep it to ~6).
// Starter list taken from the current upeismcss.ca Resources page.
// ============================================================
export const resources: Resource[] = [
  // UPEI
  {
    title: "School of Mathematical and Computational Sciences",
    description: "Programs, faculty, and news from the School at UPEI.",
    url: "https://www.upei.ca/programs/mathematical-and-computational-sciences",
    category: "UPEI",
    featured: true,
  },
  {
    title: "Registrar's Office",
    description: "Registration, the academic calendar, and important dates.",
    url: "https://www.upei.ca/office-registrar",
    category: "UPEI",
    featured: true,
  },
  {
    title: "UPEI Current Students",
    description: "UPEI's hub for student services and information.",
    url: "https://www.upei.ca/current-students",
    category: "UPEI",
  },
  {
    title: "Student Affairs",
    description: "Support services for student life at UPEI.",
    url: "https://www.upei.ca/current-students/student-affairs",
    category: "UPEI",
  },

  // Math
  {
    title: "Desmos",
    description: "Free online graphing calculator.",
    url: "https://www.desmos.com/calculator",
    category: "Math",
    featured: true,
  },
  {
    title: "Wolfram Alpha",
    description: "Computational engine for math, stats, and more.",
    url: "https://www.wolframalpha.com/",
    category: "Math",
    featured: true,
  },
  {
    title: "Symbolab",
    description: "Step-by-step math solver.",
    url: "https://www.symbolab.com/",
    category: "Math",
  },
  {
    title: "Mathway",
    description: "Math problem solver across many topics.",
    url: "https://www.mathway.com/",
    category: "Math",
  },

  // Computer Science
  {
    title: "GitHub",
    description: "Host your code and collaborate on projects.",
    url: "https://github.com/",
    category: "Computer Science",
    featured: true,
  },
  {
    title: "Stack Overflow",
    description: "Q&A for programming questions.",
    url: "https://stackoverflow.com/",
    category: "Computer Science",
  },
  {
    title: "Codecademy",
    description: "Interactive coding lessons.",
    url: "https://www.codecademy.com/",
    category: "Computer Science",
  },

  // Writing & Research
  {
    title: "Overleaf",
    description: "Write LaTeX documents online, together.",
    url: "https://www.overleaf.com/",
    category: "Writing & Research",
    featured: true,
  },
  {
    title: "Zotero",
    description: "Free tool to collect and cite research sources.",
    url: "https://www.zotero.org/",
    category: "Writing & Research",
  },
  {
    title: "Mendeley",
    description: "Reference manager for academic papers.",
    url: "https://www.mendeley.com/",
    category: "Writing & Research",
  },
];