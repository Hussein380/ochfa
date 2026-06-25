"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { urlForImage } from "@/sanity/lib/image";
import { X, Calendar, FileText } from "lucide-react";

interface Album {
  _id: string;
  title: string;
  category: string;
  date: string;
  coverImage: any;
  images?: any[];
  videoUrls?: string[];
  documentUrls?: string[];
}

function LazyVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={videoRef} className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden rounded-xl">
      {inView ? (
        <video 
          src={src} 
          controls 
          preload="metadata" 
          className="w-full h-full object-contain bg-slate-900"
        />
      ) : (
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      )}
    </div>
  );
}

export function GalleryClient({ initialAlbums }: { initialAlbums: Album[] }) {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const categories = ["all", ...Array.from(new Set(initialAlbums.map((album) => album.category || "other")))];

  const filteredAlbums = activeTab === "all" 
    ? initialAlbums 
    : initialAlbums.filter((album) => album.category === activeTab);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedAlbum(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedAlbum) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedAlbum]);

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
              Explore photo and video albums from our programs and community events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* Category Tabs */}
          {initialAlbums.length > 0 && (
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

          {initialAlbums.length === 0 ? (
            <div className="text-center py-20 text-slate-500">
              <p>No albums have been uploaded yet. Check back soon!</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredAlbums.map((album, index) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={album._id}
                    onClick={() => setSelectedAlbum(album)}
                    className="group cursor-pointer relative overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white flex flex-col hover:shadow-xl transition-all hover:-translate-y-1"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <Image 
                        src={album.coverImage?.asset ? urlForImage(album.coverImage)?.url() : "/images/ochfalogo.jpeg"}
                        alt={album.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      
                      {/* Media Count Badge */}
                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                        {(album.images?.length || 0) + (album.videoUrls?.length || 0)} Items
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                        {album.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{album.title}</h3>
                      {album.date && (
                        <div className="flex items-center text-slate-500 text-sm font-medium">
                          <Calendar className="w-4 h-4 mr-2" />
                          {new Date(album.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Album Viewer Modal */}
      <AnimatePresence>
        {selectedAlbum && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
          >
            <div className="relative w-full max-w-6xl h-full bg-slate-900 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/50 backdrop-blur z-10 sticky top-0">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">{selectedAlbum.title}</h2>
                  <div className="text-slate-400 text-sm flex gap-4">
                    <span>{selectedAlbum.category}</span>
                    {selectedAlbum.date && (
                      <span>{new Date(selectedAlbum.date).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedAlbum(null)}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Media Grid */}
              <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                {(!selectedAlbum.images?.length && !selectedAlbum.videoUrls?.length) ? (
                  <div className="h-full flex items-center justify-center text-slate-500 text-lg">
                    No media items in this album yet.
                  </div>
                ) : (
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {/* Render Images */}
                    {selectedAlbum.images?.filter((img) => img.asset).map((img, idx) => (
                      <div key={`img-${idx}`} className="relative break-inside-avoid rounded-xl overflow-hidden bg-slate-800 group">
                        <Image
                          src={urlForImage(img)?.url() || ""}
                          alt={`Album image ${idx + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          unoptimized
                        />
                      </div>
                    ))}
                    
                    {/* Render Videos */}
                    {selectedAlbum.videoUrls?.map((url, idx) => (
                      <div key={`vid-${idx}`} className="relative break-inside-avoid rounded-xl overflow-hidden bg-slate-800 aspect-video">
                        <LazyVideo src={url} />
                      </div>
                    ))}
                    
                    {/* Render Documents (PDFs) */}
                    {selectedAlbum.documentUrls?.map((url, idx) => (
                      <a 
                        href={url} 
                        target="_blank" 
                        rel="noreferrer" 
                        key={`doc-${idx}`} 
                        className="relative break-inside-avoid rounded-xl bg-slate-800 p-8 flex flex-col items-center justify-center text-center hover:bg-slate-700 transition-colors border border-slate-700 hover:border-primary"
                      >
                        <FileText className="w-16 h-16 text-primary mb-4" />
                        <span className="text-white font-medium text-lg">View Document</span>
                        <span className="text-slate-400 text-sm mt-2">Click to open PDF</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0f172a; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155; 
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569; 
        }
      `}</style>
    </div>
  );
}
