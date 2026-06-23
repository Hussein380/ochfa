"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Our <span className="text-primary">Programs</span> & Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive support designed to help you and your family thrive in Canada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {programs.map((program, index) => (
            <div key={program.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <Image 
                    src={program.image} 
                    alt={program.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-6"
              >
                <h2 className="text-3xl font-bold font-heading text-slate-900">{program.title}</h2>
                {program.subtitle && (
                  <h3 className="text-xl font-semibold text-primary">{program.subtitle}</h3>
                )}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
                
                <div className="pt-2">
                  <h4 className="font-bold text-slate-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {program.services.map((service, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {program.whoCanJoin && (
                  <div className="pt-2">
                    <h4 className="font-bold text-slate-900 mb-3">Who Can Join?</h4>
                    <ul className="space-y-2">
                      {program.whoCanJoin.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {program.benefits && (
                  <div className="pt-2">
                    <h4 className="font-bold text-slate-900 mb-3">Program Benefits:</h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-secondary mr-3 shrink-0 mt-0.5" />
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6">
                  <Link 
                    href="/contact" 
                    className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Register / Learn More
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold font-heading mb-6">Need Help Finding the Right Program?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Our team is here to guide you. Contact us to schedule a meeting and we will help you navigate our services.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex h-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground px-8 text-sm font-medium shadow transition-colors hover:bg-secondary/90"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
