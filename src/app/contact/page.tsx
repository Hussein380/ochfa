"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    
    // Web3Forms Access Key
    formData.append("access_key", "a9a1fa49-7ab7-4cee-832c-48f397bd2c5e");
    formData.append("subject", `New Contact Inquiry from OCHFA Website`);

    try {
      const endpoint = ["https://api", "web3forms", "com/submit"].join(".");
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

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
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're here to help. Reach out with any questions, partnership inquiries, or to learn more about our programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h2 className="text-3xl font-bold font-heading text-slate-900 mb-6">{siteConfig.fullName}</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-secondary mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Address</h3>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`} target="_blank" rel="noreferrer" className="text-muted-foreground mt-1 hover:text-primary transition-colors block">{siteConfig.contact.address}</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-secondary mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Phone</h3>
                      <a href={`tel:${siteConfig.contact.phone.replace(/-/g, '')}`} className="text-muted-foreground mt-1 hover:text-primary transition-colors block">{siteConfig.contact.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-secondary mr-4 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900">Email</h3>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-muted-foreground mt-1 hover:text-primary transition-colors block">{siteConfig.contact.email}</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Interactive Map */}
              <div className="w-full h-80 bg-slate-200 rounded-2xl border border-slate-300 overflow-hidden relative shadow-inner">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen={true}
                  loading="lazy"
                  title="OCHFA Location Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-8">Send Us a Message</h2>
              
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">
                    Thank you for reaching out to us. We have received your message and will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl flex items-start text-sm">
                      <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
                      <p>{errorMessage}</p>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center h-14 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-70"
                  >
                    {status === "submitting" ? "Sending..." : (
                      <><Send className="w-5 h-5 mr-2" /> Submit Message</>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
