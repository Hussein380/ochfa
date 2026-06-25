import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | OCHFA",
  description: "Get in touch with OCHFA. Reach out with questions, partnership inquiries, or to learn more about our programs.",
  openGraph: {
    title: "Contact Us | OCHFA",
    description: "Get in touch with OCHFA. Reach out with questions, partnership inquiries, or to learn more about our programs.",
    url: "https://www.ochfa.ca/contact",
  }
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
