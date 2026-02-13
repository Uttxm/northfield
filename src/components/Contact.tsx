import { useInView } from '../hooks/useInView'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { FormEvent } from 'react'

export default function Contact() {
    const [ref, visible] = useInView()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = (form.elements.namedItem('contact-name') as HTMLInputElement).value
        const email = (form.elements.namedItem('contact-email') as HTMLInputElement).value
        const subject = (form.elements.namedItem('contact-subject') as HTMLInputElement).value || 'Inquiry from Website'
        const message = (form.elements.namedItem('contact-message') as HTMLTextAreaElement).value

        const body = `Hello Northfield Consultancy,\n\n${message}\n\nBest regards,\n${name}\n${email}`
        const mailto = `mailto:info@northfieldconsultancy.qa?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailto, '_blank')
    }

    return (
        <section id="contact" className="py-20 lg:py-28 bg-background">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="section-accent mx-auto mb-4" />
                    <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Whether you need manpower for an upcoming shutdown, equipment for a new build, or a reliable industrial partner in Qatar, we're ready to talk.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info Cards */}
                    <div className="lg:col-span-2 space-y-5">
                        <div className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-card-foreground mb-1">Office Location</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Mirqab Mall, Al Nasr<br />Doha, Qatar
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-card-foreground mb-1">Phone</h3>
                                    <a href="tel:+97470569992" className="text-muted-foreground text-sm block hover:text-primary transition-colors">
                                        +974 7056 9992
                                    </a>
                                    <a href="tel:+97440284129" className="text-muted-foreground text-sm block hover:text-primary transition-colors">
                                        +974 4028 4129
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl border border-border p-6 shadow-card hover:shadow-card-hover transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-card-foreground mb-1">Email</h3>
                                    <a href="mailto:info@northfieldconsultancy.qa" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                                        info@northfieldconsultancy.qa
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-card">
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="contact-name" className="text-sm font-medium text-card-foreground mb-1.5 block">Full Name</label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="text-sm font-medium text-card-foreground mb-1.5 block">Email</label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        placeholder="you@company.com"
                                        required
                                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact-subject" className="text-sm font-medium text-card-foreground mb-1.5 block">Subject</label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="contact-message" className="text-sm font-medium text-card-foreground mb-1.5 block">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    placeholder="Tell us about your project requirements..."
                                    required
                                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-elegant hover:shadow-glow"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
