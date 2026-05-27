"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeartHandshake, Briefcase, HandHeart, CircleDollarSign } from "lucide-react";

export default function GetInvolvedPage() {
  const waysToInvolve = [
    {
      id: "volunteer",
      title: "Volunteer With Us",
      description: "Become part of a growing community dedicated to supporting families and newcomers.",
      icon: <HeartHandshake className="h-12 w-12 text-primary" />,
      actionText: "Become a Volunteer",
      actionHref: "/contact?interest=Volunteer"
    },
    {
      id: "partner",
      title: "Partner With Us",
      description: "We welcome collaborations with organizations, businesses, and community leaders.",
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      actionText: "Partner With Us",
      actionHref: "/contact?interest=Partner"
    },
    {
      id: "sponsor",
      title: "Sponsor Our Programs",
      description: "Support impactful community initiatives and help create opportunities for those in need.",
      icon: <HandHeart className="h-12 w-12 text-primary" />,
      actionText: "Sponsorship Details",
      actionHref: "/contact?interest=Sponsor"
    },
    {
      id: "donate",
      title: "Donate",
      description: "Your financial support helps us continue building stronger, more resilient communities.",
      icon: <CircleDollarSign className="h-12 w-12 text-secondary" />,
      actionText: "Donate Now",
      actionHref: "/contact?interest=Donate"
    }
  ];

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
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Together, we can make a difference. Join our mission to empower newcomers and families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {waysToInvolve.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-100 shadow-sm rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-md transition-all"
              >
                <div className="bg-slate-50 p-4 rounded-full mb-6">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">{item.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 flex-grow">
                  {item.description}
                </p>
                <Link 
                  href={item.actionHref} 
                  className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary text-primary px-8 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {item.actionText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Start?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Reach out today to discuss how your time, skills, or resources can best serve the community.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex h-14 items-center justify-center rounded-md bg-secondary text-secondary-foreground px-10 text-lg font-medium shadow transition-colors hover:bg-secondary/90"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
