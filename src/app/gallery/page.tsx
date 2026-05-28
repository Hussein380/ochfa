import { client } from "@/sanity/lib/client";
import { GalleryClient } from "./GalleryClient";

export const revalidate = 30; // ISR cache revalidation time

export default async function GalleryPage() {
  const albums = await client.fetch(`*[_type == "album"] | order(date desc) {
    _id,
    title,
    category,
    date,
    coverImage,
    images,
    "videoUrls": videos[].asset->url,
    "documentUrls": documents[].asset->url
  }`);
  return <GalleryClient initialAlbums={albums} />;
}
