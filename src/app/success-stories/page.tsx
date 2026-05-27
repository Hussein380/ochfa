"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: "Program Participant",
      role: "English Literacy Program",
      quote: "Before joining OCHFA’s English classes, I struggled to communicate confidently. Now I can speak with my children’s teachers, participate in community activities, and apply for jobs independently.",
      image: "/images/placeholder.jpg"
    },
    {
      name: "Employment Program Participant",
      role: "Employment Readiness",
      quote: "OCHFA helped me improve my resume and prepare for interviews. Within a few months, I found my first job in Calgary.",
      image: "/images/placeholder.jpg"
    },
    {
      name: "Newcomer Family Participant",
      role: "Community Integration",
      quote: "OCHFA made me feel welcomed and connected when I first arrived in Canada. I now feel part of a supportive community.",
      image: "/images/placeholder.jpg"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Success <span className="text-primary">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real stories from our community. See how OCHFA is making a difference in the lives of newcomers and families across Alberta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col relative"
              >
                <div className="absolute top-8 right-8 text-secondary/20">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100">
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{story.name}</h3>
                    <p className="text-sm font-medium text-primary">{story.role}</p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed italic relative z-10 flex-grow">
                  "{story.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
