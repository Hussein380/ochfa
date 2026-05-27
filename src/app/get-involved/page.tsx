"use client";

import { motion, AnimatePresence } from "framer-motion";
import { HeartHandshake, Briefcase, HandHeart, CircleDollarSign, X, Send, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

type FormType = "Volunteer" | "Partner" | "Sponsor" | "Donate" | null;

export default function GetInvolvedPage() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const waysToInvolve = [
    {
      id: "Volunteer",
      title: "Volunteer With Us",
      description: "Become part of a growing community dedicated to supporting families and newcomers.",
      icon: <HeartHandshake className="h-12 w-12 text-primary" />,
      actionText: "Become a Volunteer"
    },
    {
      id: "Partner",
      title: "Partner With Us",
      description: "We welcome collaborations with organizations, businesses, and community leaders.",
      icon: <Briefcase className="h-12 w-12 text-secondary" />,
      actionText: "Partner With Us"
    },
    {
      id: "Sponsor",
      title: "Sponsor Our Programs",
      description: "Support impactful community initiatives and help create opportunities for those in need.",
      icon: <HandHeart className="h-12 w-12 text-primary" />,
      actionText: "Sponsorship Details"
    },
    {
      id: "Donate",
      title: "Donate",
      description: "Your financial support helps us continue building stronger, more resilient communities.",
      icon: <CircleDollarSign className="h-12 w-12 text-secondary" />,
      actionText: "Donate Now"
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

      {/* Diversity Statement */}
      <section className="py-12 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">Diversity, Equity & Inclusion</h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-3">
            OCHFA values diversity, equity, inclusion, compassion, and community collaboration. We celebrate cultural diversity and work to ensure all individuals and families feel welcomed, respected, and supported regardless of their background or identity.
          </p>
          <p className="text-lg font-semibold text-primary">
            We stand against discrimination, racism, exclusion, and hate in all forms.
          </p>
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
                className="bg-white border border-slate-100 shadow-sm rounded-3xl p-10 flex flex-col items-center text-center hover:shadow-md transition-all cursor-pointer"
                onClick={() => setActiveForm(item.id as FormType)}
              >
                <div className="bg-slate-50 p-4 rounded-full mb-6">
                  {item.icon}
                </div>
                <h2 className="text-2xl font-bold font-heading text-slate-900 mb-4">{item.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 flex-grow">
                  {item.description}
                </p>
                <button 
                  className="inline-flex h-12 items-center justify-center rounded-md border-2 border-primary text-primary px-8 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {item.actionText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Modal */}
      <InvolvementModal formType={activeForm} onClose={() => setActiveForm(null)} />
    </div>
  );
}

function InvolvementModal({ formType, onClose }: { formType: FormType, onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  if (!formType) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    data.type = formType;

    try {
      const response = await fetch("/api/involvement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
    }
  };

  const renderSpecificFields = () => {
    switch (formType) {
      case "Volunteer":
        return (
          <>
            <div className="space-y-1.5">
              <label htmlFor="skills" className="text-sm font-medium text-slate-700">Skills & Experience</label>
              <textarea name="skills" id="skills" required rows={3} placeholder="Tell us about your background..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="availability" className="text-sm font-medium text-slate-700">Availability</label>
              <select name="availability" id="availability" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                <option value="Weekdays">Weekdays</option>
                <option value="Weekends">Weekends</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
          </>
        );
      case "Partner":
        return (
          <>
            <div className="space-y-1.5">
              <label htmlFor="organizationName" className="text-sm font-medium text-slate-700">Organization Name *</label>
              <input type="text" name="organizationName" id="organizationName" required placeholder="Your company or org..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="partnershipIdeas" className="text-sm font-medium text-slate-700">Partnership Ideas</label>
              <textarea name="partnershipIdeas" id="partnershipIdeas" required rows={3} placeholder="How would you like to collaborate?" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
          </>
        );
      case "Sponsor":
        return (
          <>
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="text-sm font-medium text-slate-700">Company / Organization *</label>
              <input type="text" name="companyName" id="companyName" required placeholder="Who is sponsoring?" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="sponsorshipLevel" className="text-sm font-medium text-slate-700">Interested Sponsorship Level</label>
              <select name="sponsorshipLevel" id="sponsorshipLevel" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                <option value="General Support">General Support</option>
                <option value="Event Sponsor">Event Sponsor</option>
                <option value="Program Sponsor">Program Sponsor</option>
                <option value="Corporate Partner">Corporate Partner</option>
              </select>
            </div>
          </>
        );
      case "Donate":
        return (
          <>
            <div className="space-y-1.5">
              <label htmlFor="donationAmount" className="text-sm font-medium text-slate-700">Donation Amount Intended</label>
              <input type="text" name="donationAmount" id="donationAmount" required placeholder="e.g. $100, $500, etc." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message (Optional)</label>
              <textarea name="message" id="message" rows={2} placeholder="Any specific instructions?" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
            </div>
          </>
        );
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <h3 className="font-bold text-lg text-slate-900">
              {formType === "Donate" ? "Make a Donation" : `Become a ${formType}`}
            </h3>
            <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Application Sent!</h4>
                <p className="text-slate-600 mb-6">
                  Thank you for your interest! We have received your information and sent a confirmation to your email.
                </p>
                <button onClick={onClose} className="w-full h-12 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                {renderSpecificFields()}

                {status === "error" && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg flex items-start text-sm">
                    <AlertCircle className="w-5 h-5 mr-2 shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full h-12 mt-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {status === "submitting" ? "Sending..." : <><Send className="w-4 h-4 mr-2" /> Submit Application</>}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
