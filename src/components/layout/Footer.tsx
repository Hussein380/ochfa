import Link from "next/link";
import { siteConfig } from "@/data/site";
import { partners } from "@/data/partners";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 text-slate-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/ochfalogo.jpeg" 
                alt="OCHFA Logo" 
                width={50} 
                height={50}
                className="rounded-full" 
              />
              <span className="font-bold text-primary text-xl">
                {siteConfig.fullName}
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mt-4 leading-relaxed text-sm">
              Supporting Newcomers. Building Stronger Communities.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/programs" className="text-muted-foreground hover:text-primary">Programs</Link></li>
              <li><Link href="/get-involved" className="text-muted-foreground hover:text-primary">Get Involved</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{siteConfig.contact.address}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
            </ul>
          </div>
        </div>

        {/* Diversity & Inclusion Section */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center max-w-4xl mx-auto">
          <h3 className="font-semibold text-primary mb-3 text-lg">Diversity, Equity & Inclusion</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">
            OCHFA values diversity, equity, inclusion, compassion, and community collaboration. We celebrate cultural diversity and work to ensure all individuals and families feel welcomed, respected, and supported regardless of their background or identity.
          </p>
          <p className="text-sm font-medium text-slate-700">
            We stand against discrimination, racism, exclusion, and hate in all forms.
          </p>
        </div>

        {/* Partner Logos Section */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-6">Our Proud Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner) => (
              <div key={partner.id} className="relative w-24 h-16 md:w-32 md:h-20 opacity-80 hover:opacity-100 transition-opacity">
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Registered Nonprofit Details */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <div className="bg-primary/5 rounded-2xl p-6 border border-primary/10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              <h3 className="font-semibold text-primary text-sm uppercase tracking-wide">Registered Nonprofit Organization</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm">
              <div>
                <p className="text-slate-500 text-xs mb-1">Legal Name</p>
                <p className="font-semibold text-slate-800">{siteConfig.legalName}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Business Number (BN)</p>
                <p className="font-semibold text-slate-800">{siteConfig.registration.businessNumber}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs mb-1">Corporate Access Number</p>
                <p className="font-semibold text-slate-800">{siteConfig.registration.corporateAccessNumber}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-muted-foreground flex flex-col items-center">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All Rights Reserved.</p>
          <div className="mt-2 flex gap-4 text-xs">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-2 text-xs">Business Number: {siteConfig.registration.businessNumber} | Calgary, Alberta, Canada</p>
        </div>
      </div>
    </footer>
  );
}
