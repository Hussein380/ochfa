import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs | OCHFA",
  description: "Comprehensive support programs designed to help newcomers, youth, and families thrive in Canada.",
  openGraph: {
    title: "Programs | OCHFA",
    description: "Comprehensive support programs designed to help newcomers, youth, and families thrive in Canada.",
    url: "https://www.ochfa.ca/programs",
  }
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
