"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";

interface GalleryImage {
  _id: string;
  title: string;
  category: string;
  image: any;
}

export function GalleryClient({ initialImages }: { initialImages: GalleryImage[] }) {
  const [activeTab, setActiveTab] = useState("all");

  const categories = ["all", ...Array.from(new Set(initialImages.map((img) => img.category || "other")))];

  const filteredImages = activeTab === "all" 
    ? initialImages 
    : initialImages.filter((img) => img.category === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Moments from our community events, programs, and gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Category Tabs */}
          {initialImages.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeTab === category 
                      ? "bg-primary text-white" 
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          )}

          {initialImages.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p>No images have been uploaded yet. Check back soon!</p>
            </div>
          ) : (
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              <AnimatePresence>
                {filteredImages.map((img, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={img._id}
                    className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-sm border border-slate-100 group"
                  >
                    <div className="relative w-full aspect-[4/3] md:aspect-auto md:h-72">
                      <Image 
                        src={urlForImage(img.image)?.url() || "/images/placeholder.jpg"} 
                        alt={img.title || "Gallery Image"} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
