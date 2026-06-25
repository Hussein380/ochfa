import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy | OCHFA",
  description: "Privacy Policy for One Community Home & Family Association (OCHFA). Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 mb-6">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your privacy is important to us. This policy explains how OCHFA collects, uses, and protects your information.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Last updated: June 2026</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto prose prose-slate prose-lg">

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">1. Organization Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              This website is operated by <strong>{siteConfig.legalName}</strong> (OCHFA), a registered nonprofit organization in the Province of Alberta, Canada.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Business Number (BN): {siteConfig.registration.businessNumber}</li>
              <li>Corporate Access Number: {siteConfig.registration.corporateAccessNumber}</li>
              <li>Address: {siteConfig.contact.address}</li>
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">{siteConfig.contact.email}</a></li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">2. Information We Collect</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We may collect the following types of personal information when you voluntarily provide it through our website:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Contact Forms:</strong> Name, email address, phone number, and message content when you submit a contact form or inquiry.</li>
              <li><strong>Volunteer & Partner Applications:</strong> Name, email, phone number, skills, availability, organization name, and other details submitted through our Get Involved forms.</li>
              <li><strong>Event Registration:</strong> Name, email, and phone number when registering for events.</li>
              <li><strong>Donation Inquiries:</strong> Name, email, and donation-related details submitted through our donation inquiry forms.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>To respond to your inquiries and provide information about our programs and services</li>
              <li>To process volunteer, partnership, and sponsorship applications</li>
              <li>To register you for community events and workshops</li>
              <li>To communicate updates about our programs, events, and community activities</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">4. Information Sharing</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or government requests</li>
              <li>With trusted service providers who assist us in operating our website (e.g., email delivery services), under strict confidentiality agreements</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Our website may use the following third-party services:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li><strong>Google Maps:</strong> We embed Google Maps on our contact page to show our location. Google Maps may collect usage data according to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Google&apos;s Privacy Policy</a>.</li>
              <li><strong>WhatsApp:</strong> We provide a WhatsApp link for direct communication. Any messages sent through WhatsApp are governed by <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">WhatsApp&apos;s Privacy Policy</a>.</li>
              <li><strong>Vercel:</strong> Our website is hosted on Vercel, which may collect server logs and analytics data according to their privacy policy.</li>
            </ul>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">6. Data Security</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. Our website uses HTTPS encryption to secure data transmitted between your browser and our servers. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">7. Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our website may use essential cookies required for basic website functionality. We do not use tracking cookies or advertising cookies. Third-party services embedded on our site (such as Google Maps) may set their own cookies according to their respective privacy policies.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">8. Your Rights</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw your consent for us to use your information</li>
            </ul>
            <p className="text-slate-700 leading-relaxed mb-6">
              To exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">{siteConfig.contact.email}</a>.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">9. Children&apos;s Privacy</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              Our website is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us so we can take appropriate action.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">10. Changes to This Policy</h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-2xl font-bold font-heading text-slate-900 mt-10 mb-4">11. Contact Us</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
              <li>Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-primary hover:text-primary/80">{siteConfig.contact.email}</a></li>
              <li>Phone: {siteConfig.contact.phone}</li>
              <li>Address: {siteConfig.contact.address}</li>
            </ul>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-muted-foreground">
                See also: <Link href="/terms" className="text-primary hover:text-primary/80 font-medium">Terms of Service</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
