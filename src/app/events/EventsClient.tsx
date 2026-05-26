"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import { urlForImage } from "@/sanity/lib/image";

interface SanityEvent {
  _id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  registrationLink?: string;
  image?: any;
}

import { RegistrationModal } from "@/components/ui/RegistrationModal";
import { useState } from "react";

export function EventsClient({ events }: { events: SanityEvent[] }) {
  const now = new Date();
  const [selectedEvent, setSelectedEvent] = useState<SanityEvent | null>(null);
  
  // Filter events into upcoming and past
  const upcomingEvents = events.filter((e) => new Date(e.date) >= now);
  const pastEvents = events.filter((e) => new Date(e.date) < now);

  const handleRegisterClick = (event: SanityEvent, e: React.MouseEvent) => {
    if (event.registrationLink) {
      // Allow default link behavior to open Eventbrite/etc
      return;
    }
    // Prevent default anchor behavior and open modal
    e.preventDefault();
    setSelectedEvent(event);
  };

  const renderEventCard = (event: SanityEvent, index: number, isPast: boolean = false) => {
    const eventDate = new Date(event.date);
    
    return (
      <motion.div 
        key={event._id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col ${isPast ? 'opacity-70 grayscale-[50%]' : ''}`}
      >
        <div className="relative h-56 w-full bg-slate-100">
          {event.image && (
            <Image 
              src={urlForImage(event.image)?.url() || ""} 
              alt={event.title} 
              fill 
              className="object-cover"
            />
          )}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm text-sm font-bold text-primary flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {eventDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
        </div>
        
        <div className="p-8 flex flex-col flex-grow">
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-3">
            {event.title}
          </h2>
          <p className="text-muted-foreground mb-6 flex-grow">
            {event.description}
          </p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center text-sm text-slate-600">
              <Clock className="w-4 h-4 mr-3 text-secondary" />
              <span>{eventDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex items-center text-sm text-slate-600">
              <MapPin className="w-4 h-4 mr-3 text-secondary" />
              <span>{event.location}</span>
            </div>
          </div>
          
          {!isPast && (
            <a 
              href={event.registrationLink || "#"}
              target={event.registrationLink ? "_blank" : undefined}
              rel={event.registrationLink ? "noopener noreferrer" : undefined}
              onClick={(e) => handleRegisterClick(event, e)}
              className="w-full h-12 bg-primary/10 text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            >
              Register Now
            </a>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Our <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover workshops, gatherings, and sessions designed to connect and empower our community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-slate-900">Upcoming Events</h2>
            <div className="ml-6 flex-grow h-px bg-slate-200"></div>
          </div>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <p className="text-slate-500">No upcoming events right now. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => renderEventCard(event, index, false))}
            </div>
          )}
        </div>
      </section>

      {/* Past Events Archive */}
      {pastEvents.length > 0 && (
        <section className="py-12 bg-slate-100/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center mb-12">
              <h2 className="text-2xl font-bold font-heading text-slate-500">Past Events Archive</h2>
              <div className="ml-6 flex-grow h-px bg-slate-200"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-80">
              {pastEvents.map((event, index) => renderEventCard(event, index, true))}
            </div>
          </div>
        </section>
      )}

      {/* Registration Modal */}
      {selectedEvent && (
        <RegistrationModal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          eventTitle={selectedEvent.title}
        />
      )}
    </div>
  );
}
