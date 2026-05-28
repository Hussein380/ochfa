"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { programs } from "@/data/programs";
import { siteConfig } from "@/data/site";
import { ArrowRight, Heart, Users, Globe2 } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.round(v));
        },
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 flex flex-col justify-center py-20 min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.png" 
            alt="Community gathering" 
            fill 
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/30 to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white font-heading leading-tight drop-shadow-md">
              Welcome to <span className="text-secondary drop-shadow-md">OCHFA</span>
              <br />
              <span className="text-3xl md:text-4xl font-semibold text-slate-100 mt-2 block drop-shadow-md">
                {siteConfig.fullName}
              </span>
            </h1>
            <p className="text-xl text-white md:text-2xl leading-relaxed max-w-2xl drop-shadow-md font-medium">
              OCHFA welcomes all newcomers, immigrants, refugees, and families regardless of country, race, religion, faith, language, culture, gender, or background. We are committed to building an inclusive, respectful, and supportive community for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/get-involved" 
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Involved
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground">Making a Difference in Our Community</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              { icon: "👥", value: 250, suffix: "+", text: "Newcomers supported annually" },
              { icon: "📚", value: 40, suffix: "%", text: "Improvement in English literacy" },
              { icon: "🤝", value: 15, suffix: "+", text: "Community partnerships" },
              { icon: "💼", value: 40, suffix: "+", text: "Employment readiness workshops" },
              { icon: "🧑‍🤝‍🧑", value: 1000, suffix: "+", text: "Volunteer support hours" },
              { icon: "🏠", value: 80, suffix: "+", text: "Families connected to resources" },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-primary mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-slate-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature/Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Core Focus</h2>
            <p className="text-lg text-muted-foreground">
              We believe that strong communities are built through inclusion, connection, education, and empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <Globe2 className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Inclusion</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe everyone deserves respect, dignity, and equal opportunity regardless of their background.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <Users className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-3">Empowerment</h3>
              <p className="text-muted-foreground leading-relaxed">
                We help individuals build confidence, skills, and independence to thrive in their new home.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
            >
              <Heart className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strengthen relationships, encourage collaboration, and create lasting support networks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-slate-900 mb-4">Our Programs</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive services designed to support you at every step of your journey.
              </p>
            </div>
            <Link 
              href="/programs" 
              className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
            >
              View all programs <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <Link href="/programs" className="flex flex-col flex-grow">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image 
                      src={program.image} 
                      alt={program.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-slate-900 group-hover:text-primary transition-colors">{program.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{program.description}</p>
                    <div className="inline-flex items-center text-sm font-medium text-secondary group-hover:text-secondary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto mb-10">
            Join us in building a welcoming and inclusive community where every individual has the opportunity to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/get-involved" 
              className="inline-flex h-14 items-center justify-center rounded-md bg-secondary text-secondary-foreground px-10 text-lg font-medium shadow transition-colors hover:bg-secondary/90"
            >
              Become a Volunteer
            </Link>
            <Link 
              href="/get-involved" 
              className="inline-flex h-14 items-center justify-center rounded-md bg-transparent border-2 border-white/20 px-10 text-lg font-medium shadow-sm transition-colors hover:bg-white/10"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
