"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "@/data/partners";

export default function PartnersPage() {
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
              Our Community <span className="text-primary">Partners</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are proud to collaborate with organizations that share our commitment to building stronger communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 items-center justify-center">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all h-64"
              >
                <div className="relative w-32 h-32 mb-4">
                  <Image 
                    src={partner.logo} 
                    alt={partner.name} 
                    fill 
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center text-slate-700 group-hover:text-primary transition-colors">
                  {partner.name}
                </h3>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <p className="text-2xl font-heading font-bold text-slate-800">
              Together, we create meaningful opportunities and positive community impact.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
