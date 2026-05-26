import { client } from "@/sanity/lib/client";
import { EventsClient } from "./EventsClient";

export const revalidate = 30; // ISR cache revalidation time

export default async function EventsPage() {
  const events = await client.fetch(`*[_type == "event"] | order(date asc)`);
  return <EventsClient events={events} />;
}
