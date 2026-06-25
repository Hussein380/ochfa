import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service | OCHFA",
  description: "Terms of Service for One Community Home & Family Association (OCHFA) website.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Please read these terms carefully before using the OCHFA website.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: June 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              By accessing and using this website (<strong>www.ochfa.ca</strong>), you accept and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use this website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">2. About OCHFA</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              This website is operated by <strong>{siteConfig.legalName}</strong>, a registered nonprofit organization in the Province of Alberta, Canada (Business Number: {siteConfig.registration.businessNumber}). OCHFA is dedicated to supporting newcomers, immigrants, refugees, families, youth, women, and seniors through inclusive programs and community services.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">3. Use of Website</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You agree to use this website only for lawful purposes and in a manner that does not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on the rights of others</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Transmit any harmful, offensive, or inappropriate content</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">4. Content and Intellectual Property</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              All content on this website, including text, images, logos, graphics, and design elements, is the property of {siteConfig.legalName} unless otherwise stated. You may not reproduce, distribute, modify, or use any content from this website without our prior written consent, except for personal, non-commercial purposes such as learning about our programs and services.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">5. User Submissions</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              When you submit information through our contact forms, volunteer applications, event registrations, or other forms, you represent that the information you provide is accurate and truthful. We handle all submitted information in accordance with our <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">6. Programs and Services</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Information about our programs and services is provided for general informational purposes. While we strive to keep all information current and accurate, program details, schedules, and availability may change without prior notice. Please contact us directly for the most up-to-date information about specific programs.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">7. Third-Party Links</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our website may contain links to third-party websites, including social media platforms, mapping services, and messaging applications. We are not responsible for the content, privacy practices, or availability of these external sites. Accessing third-party links is at your own risk and subject to those sites&apos; own terms and conditions.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">8. Donations and Financial Contributions</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Donation inquiries submitted through our website are expressions of interest. OCHFA will follow up directly with donors regarding payment processing, tax receipts, and other financial details. All donations are used to support OCHFA&apos;s mission and programs as described on this website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">9. Disclaimer of Warranties</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis. While we make reasonable efforts to ensure the accuracy and reliability of the information presented, we do not warrant that the website will be uninterrupted, error-free, or free of harmful components. OCHFA disclaims all warranties, express or implied, to the fullest extent permitted by law.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">10. Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              To the fullest extent permitted by applicable law, {siteConfig.legalName} shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of or inability to use this website.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">11. Changes to Terms</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Your continued use of the website after any changes constitutes your acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">12. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              These Terms of Service are governed by and construed in accordance with the laws of the Province of Alberta and the federal laws of Canada applicable therein.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">13. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">{siteConfig.contact.email}</a></li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Address: {siteConfig.contact.address}</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-muted-foreground">
                See also: <Link href="/privacy" className="text-primary hover:text-primary/80 font-medium">Privacy Policy</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
