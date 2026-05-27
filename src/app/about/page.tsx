"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Quote } from "lucide-react";
import { partners } from "@/data/partners";

export default function AboutPage() {
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
              About <span className="text-primary">OCHFA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              One Community Home & Family Association (OCHFA) is a community-driven nonprofit organization based in Calgary, Alberta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold font-heading text-slate-900">Welcome to OCHFA</h2>
              <p className="text-lg text-slate-700 leading-relaxed font-semibold">
                ONE COMMUNITY HOME & FAMILY ASSOCIATION (OCHFA)
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OCHFA proudly welcomes all newcomers, immigrants, refugees, families, youth, seniors, and community members regardless of:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Country of origin</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Race or ethnicity</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Religion or faith</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Language</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Culture or background</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Gender or age</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Immigration status</li>
                <li className="flex items-center"><CheckCircle2 className="w-5 h-5 mr-2 text-secondary" /> Social or economic background</li>
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe diversity strengthens our communities and that every individual deserves respect, dignity, inclusion, opportunity, and support. At OCHFA, we are committed to creating a safe, welcoming, inclusive, and supportive environment where everyone feels valued and empowered to succeed.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Together, we are building stronger families, stronger communities, and a brighter future for all.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg"
            >
              <Image 
                src="/images/classroom-1.jpg" 
                alt="Community members" 
                fill 
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20"
            >
              <h2 className="text-3xl font-bold font-heading mb-6">Our Mission</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                To empower newcomers, immigrants, refugees, families, youth, women, and seniors through inclusive programs, education, community support, and culturally responsive services that promote dignity, wellbeing, self-reliance, and community connection.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20"
            >
              <h2 className="text-3xl font-bold font-heading mb-6">Our Vision</h2>
              <p className="text-lg opacity-90 leading-relaxed">
                To build an inclusive, empowered, and united community where all individuals and families—regardless of their background—have equal opportunities to succeed, belong, and thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Inclusion", desc: "We believe everyone deserves respect, dignity, and equal opportunity." },
              { title: "Empowerment", desc: "We help individuals build confidence, skills, and independence." },
              { title: "Community", desc: "We strengthen relationships and encourage collaboration." },
              { title: "Integrity", desc: "We act with honesty, accountability, and transparency." },
              { title: "Support", desc: "We are committed to helping individuals and families succeed." }
            ].map((value, i) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100"
              >
                <div className="mt-1">
                  <CheckCircle2 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Success Stories (Quotes Only) */}
      <section className="py-20 bg-slate-50 border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">Real stories from our community.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Program Participant",
                role: "English Literacy Program",
                quote: "Before joining OCHFA’s English classes, I struggled to communicate confidently. Now I can speak with my children’s teachers, participate in community activities, and apply for jobs independently.",
              },
              {
                name: "Employment Program Participant",
                role: "Employment Readiness",
                quote: "OCHFA helped me improve my resume and prepare for interviews. Within a few months, I found my first job in Calgary.",
              },
              {
                name: "Newcomer Family Participant",
                role: "Community Integration",
                quote: "OCHFA made me feel welcomed and connected when I first arrived in Canada. I now feel part of a supportive community.",
              }
            ].map((story, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col relative"
              >
                <div className="absolute top-8 right-8 text-secondary/10">
                  <Quote className="w-12 h-12" />
                </div>
                <div className="mb-6 relative z-10">
                  <h3 className="font-bold text-slate-900">{story.name}</h3>
                  <p className="text-sm font-medium text-primary">{story.role}</p>
                </div>
                <p className="text-slate-700 leading-relaxed italic relative z-10 flex-grow">
                  "{story.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners & Funders */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Partners & Funders</h2>
            <p className="text-lg text-muted-foreground">
              We are grateful for the support of our partners, funders, volunteers, and community organizations.
            </p>
          </div>
          
          <div className="space-y-16">
            <div>
              <h3 className="text-2xl font-bold font-heading text-center text-slate-900 mb-8">Government & Institutional Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {partners.slice(0, 3).map((partner) => (
                  <div key={partner.id} className="relative w-32 h-20 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-heading text-center text-slate-900 mb-8">Community Partners</h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {partners.slice(3, 6).map((partner) => (
                  <div key={partner.id} className="relative w-32 h-20 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                    <Image src={partner.logo} alt={partner.name} fill className="object-contain" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/5 rounded-3xl p-10 text-center max-w-4xl mx-auto border border-primary/10">
              <h3 className="text-2xl font-bold font-heading text-slate-900 mb-4">Community Supporters</h3>
              <p className="text-slate-700 leading-relaxed">
                Our work is also made possible by the generous contributions of dedicated volunteers, local business owners, individual donors, and community leaders. Together, we are building stronger, more inclusive communities across Alberta.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
