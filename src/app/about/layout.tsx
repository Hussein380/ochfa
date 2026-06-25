import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | OCHFA",
  description: "Learn about One Community Home & Family Association (OCHFA). We welcome all newcomers, immigrants, refugees, and families in Calgary.",
  openGraph: {
    title: "About Us | OCHFA",
    description: "Learn about One Community Home & Family Association (OCHFA). We welcome all newcomers, immigrants, refugees, and families in Calgary.",
    url: "https://www.ochfa.ca/about",
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
