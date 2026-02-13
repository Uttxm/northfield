import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'

const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Vision', href: '#vision' },
    { label: 'Contact', href: '#contact' },
]

const services = [
    'Equipment Rental',
    'Project Management',
    'Manpower Staffing',
    'Piping & Welding',
    'Painting & Coating',
    'Scaffolding',
]

export default function Footer() {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/images/logo-white.png"
                                alt="Northfield Consultancy & Industrial Solution"
                                className="h-14 w-auto"
                            />
                        </div>
                        <p className="text-secondary-foreground/50 text-sm leading-relaxed mb-4">
                            Doha-based industrial services company delivering contracting, manpower, procurement, and PRO solutions to Qatar's oil & gas and energy sectors.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="text-secondary-foreground/50 hover:text-secondary-foreground text-sm transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Services</h4>
                        <ul className="space-y-2.5">
                            {services.map((s) => (
                                <li key={s}>
                                    <a href="#services" className="text-secondary-foreground/50 hover:text-secondary-foreground text-sm transition-colors">
                                        {s}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-secondary-foreground mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <span className="text-secondary-foreground/50 text-sm">Mirqab Mall, Al Nasr, Doha, Qatar</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                                <a href="tel:+97470569992" className="text-secondary-foreground/50 text-sm hover:text-secondary-foreground transition-colors">
                                    +974 7056 9992
                                </a>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                                <a href="mailto:info@northfieldconsultancy.qa" className="text-secondary-foreground/50 text-sm hover:text-secondary-foreground transition-colors break-all">
                                    info@northfieldconsultancy.qa
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider + Bottom */}
                <div className="border-t border-secondary-foreground/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-secondary-foreground/40 text-xs">
                        © {new Date().getFullYear()} Northfield Consultancy & Industrial Solution. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-9 h-9 rounded-lg bg-primary/20 hover:bg-primary/30 flex items-center justify-center transition-colors"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-4 h-4 text-primary" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
