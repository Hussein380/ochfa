"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

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
              <h2 className="text-3xl font-bold font-heading text-slate-900">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to helping newcomers and families successfully integrate into Canadian society by offering programs, resources, mentorship, and community support services.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our organization believes that strong communities are built through inclusion, connection, education, and empowerment. We work closely with community partners, volunteers, and organizations to create opportunities that improve lives and strengthen families.
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
                To empower newcomers and families by providing support, resources, opportunities, and programs that promote inclusion, well-being, education, employment, and community connection.
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
                A welcoming and inclusive community where every individual and family has the opportunity to belong, grow, and thrive.
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
    </div>
  );
}
