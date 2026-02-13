import { ArrowRight, Shield, Lightbulb, Award } from 'lucide-react'

const pillars = [
    { icon: Award, label: 'Quality' },
    { icon: Shield, label: 'Safety' },
    { icon: Lightbulb, label: 'Innovation' },
]

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/industrial.jpeg"
                    alt="Northfield Consultancy industrial facility in Qatar"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="hero-gradient absolute inset-0" />
                <div className="hero-pattern absolute inset-0" />
            </div>

            {/* Floating geometric accents */}
            <div className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-accent/10 blur-3xl animate-float" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
                <div className="max-w-3xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-primary-foreground/90 text-xs font-medium tracking-wide uppercase">
                            Trusted Industrial Partner | Doha, Qatar
                        </span>
                    </div>

                    <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-[1.1] mb-6 animate-fade-up">
                        Northfield
                        <span className="block mt-1">
                            <span className="gradient-text [-webkit-text-fill-color:transparent]" style={{
                                background: 'linear-gradient(135deg, hsl(174 100% 45%), hsl(174 65% 65%))',
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Consultancy
                            </span>
                        </span>
                        <span className="block text-primary-foreground/80 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
                            & Industrial Solutions
                        </span>
                    </h1>

                    <p className="text-primary-foreground/70 text-base sm:text-lg lg:text-xl max-w-2xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        Delivering end-to-end industrial support, contracting, HR solutions, and government relations services to the oil &amp; gas, energy, and construction sectors across Qatar.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                        <a
                            href="#services"
                            className="group inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-elegant hover:shadow-glow"
                        >
                            Our Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/20 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Pillars */}
                    <div className="flex flex-wrap gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                        {pillars.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2.5 bg-primary-foreground/5 backdrop-blur-sm rounded-lg px-4 py-2.5 border border-primary-foreground/10">
                                <Icon className="w-5 h-5 text-accent" />
                                <span className="text-primary-foreground/85 text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    )
}
