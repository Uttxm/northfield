import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Vision', href: '#vision' },
    { label: 'Commitment', href: '#commitment' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-secondary/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 group">
                    <img
                        src="/images/logo-white.png"
                        alt="Northfield Consultancy & Industrial Solution"
                        className="h-12 sm:h-14 w-auto"
                    />
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-primary-foreground/75 hover:text-primary-foreground text-sm font-medium animated-underline transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:+97470569992"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-elegant hover:shadow-glow"
                    >
                        <Phone className="w-4 h-4" />
                        Call Us
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="lg:hidden text-primary-foreground p-2"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-secondary/98 backdrop-blur-lg px-6 py-4 space-y-1 border-t border-primary-foreground/10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-primary-foreground/80 hover:text-primary-foreground py-2.5 text-sm font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:+97470569992"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold mt-3"
                    >
                        <Phone className="w-4 h-4" />
                        +974 7056 9992
                    </a>
                </div>
            </div>
        </nav>
    )
}
