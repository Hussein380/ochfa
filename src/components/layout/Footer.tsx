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
                src="/images/logoochfa.jpg" 
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
            <div className="flex space-x-4 mt-4 text-sm font-medium">
              <a href={siteConfig.socials.facebook} className="text-primary hover:text-secondary" target="_blank" rel="noreferrer">Facebook</a>
              <a href={siteConfig.socials.instagram} className="text-primary hover:text-secondary" target="_blank" rel="noreferrer">Instagram</a>
              <a href={siteConfig.socials.linkedin} className="text-primary hover:text-secondary" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
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
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
