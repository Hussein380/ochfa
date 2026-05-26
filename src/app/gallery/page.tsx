import { client } from "@/sanity/lib/client";
import { GalleryClient } from "./GalleryClient";

export const revalidate = 30; // ISR cache revalidation time

export default async function GalleryPage() {
  const images = await client.fetch(`*[_type == "galleryImage"] | order(dateAdded desc)`);
  return <GalleryClient initialImages={images} />;
}
