import type { Metadata } from "next";
import { client } from "@/sanity/lib/client";
import { EventsClient } from "./EventsClient";

export const metadata: Metadata = {
  title: "Events | OCHFA",
  description: "Discover workshops, gatherings, and sessions designed to connect and empower our community.",
  openGraph: {
    title: "Events | OCHFA",
    description: "Discover workshops, gatherings, and sessions designed to connect and empower our community.",
    url: "https://www.ochfa.ca/events",
  }
};

export const revalidate = 30; // ISR cache revalidation time

export default async function EventsPage() {
  const events = await client.fetch(`*[_type == "event"] | order(date asc)`);
  return <EventsClient events={events} />;
}
