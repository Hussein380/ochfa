"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { partners } from "@/data/partners";

export default function PartnersPage() {
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
              Our <span className="text-primary">Partners</span> & Funders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              OCHFA values collaboration and community partnership in creating meaningful support for newcomer families. We are grateful for the support of our partners, funders, volunteers, and community organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          
          {/* Government Partners */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Government & Institutional Partners</h2>
              <p className="text-slate-600">Working together at the municipal, provincial, and federal levels.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {/* Note: In a real scenario, we map specific government partner logos from data/partners.ts here */}
              {partners.slice(0, 3).map((partner) => (
                <div key={partner.id} className="relative w-40 h-24 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Community Partners */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading text-slate-900 mb-4">Community Partners</h2>
              <p className="text-slate-600">Local agencies, foundations, and organizations (e.g., Action Dignity, Calgary Foundation).</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {partners.slice(3, 6).map((partner) => (
                <div key={partner.id} className="relative w-40 h-24 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Supporters */}
          <div className="bg-primary/5 rounded-3xl p-12 text-center border border-primary/10">
            <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">Community Supporters</h2>
            <p className="text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8">
              Our work is also made possible by the generous contributions of dedicated volunteers, local business owners, individual donors, and community leaders.
            </p>
            <h3 className="text-xl font-bold text-primary mb-2">Together, we are building stronger, more inclusive communities across Alberta.</h3>
          </div>

        </div>
      </section>
    </div>
  );
}
