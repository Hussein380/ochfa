import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | OCHFA",
  description: "Volunteer, partner, sponsor, or donate to support OCHFA's mission of empowering newcomers and families.",
  openGraph: {
    title: "Get Involved | OCHFA",
    description: "Volunteer, partner, sponsor, or donate to support OCHFA's mission of empowering newcomers and families.",
    url: "https://www.ochfa.ca/get-involved",
  }
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
