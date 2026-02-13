import { useInView } from '../hooks/useInView'
import { CheckCircle } from 'lucide-react'

const qualities = [
    'ISO-aligned quality management across all operations',
    'HSE-first culture embedded in every project phase',
    'Proven track record in oil & gas, EPC, and infrastructure',
    'Long-term partnerships with Tier 1 contractors in Qatar',
]

export default function About() {
    const [ref, visible] = useInView()

    return (
        <section id="about" className="py-20 lg:py-28 bg-background">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                            <img
                                src="/images/services-team.jpeg"
                                alt="Northfield Consultancy professional team collaborating on-site"
                                className="w-full h-[400px] lg:h-[480px] object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent" />
                        </div>
                        {/* Floating stat card */}
                        <div className="absolute -bottom-6 -right-4 lg:-right-8 glass-card rounded-xl p-4 shadow-card animate-float">
                            <div className="text-2xl font-heading font-bold text-primary">9+</div>
                            <div className="text-xs text-muted-foreground">Industrial Services</div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div>
                        <div className="section-accent mb-4" />
                        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">
                            Who We Are
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            Northfield Consultancy & Industrial Solution is a Doha-based industrial services company supporting Qatar's oil & gas, energy, and infrastructure sectors. We provide integrated contracting, manpower, procurement, and government liaison services, enabling operators, EPC contractors, and asset owners to execute projects safely and on schedule.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Our operations are built on three non-negotiable pillars: Quality, Safety, and Innovation. In a sector where downtime costs millions and compliance failures carry serious consequences, we deliver the precision and reliability that blue-chip clients demand.
                        </p>

                        <div className="space-y-3">
                            {qualities.map((q) => (
                                <div key={q} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-foreground text-sm font-medium">{q}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
