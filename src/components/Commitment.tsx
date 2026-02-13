import { useInView } from '../hooks/useInView'
import { TrendingUp, Award, HeartHandshake, ShieldCheck, Eye } from 'lucide-react'

const commitments = [
    {
        icon: TrendingUp,
        title: 'Strategic Deployment',
        text: 'End-to-end workforce support, from strategic planning and mobilization through to long-term integration within your operational structure.',
    },
    {
        icon: Award,
        title: 'Consistent Performance',
        text: 'Reliable, high-quality talent solutions aligned with your project milestones, operational KPIs, and delivery timelines.',
    },
    {
        icon: HeartHandshake,
        title: 'Exceptional Service',
        text: 'Proactive, hands-on account management ensuring a seamless experience for both clients and deployed personnel.',
    },
    {
        icon: ShieldCheck,
        title: 'Ethical Recruitment',
        text: 'Recruitment processes that prioritize fairness, transparency, and full compliance with Qatar labor law and international standards.',
    },
    {
        icon: Eye,
        title: 'Transparency & Integrity',
        text: 'Open, honest communication that gives you full visibility and confidence in every placement, every contract, and every billing cycle.',
    },
]

export default function Commitment() {
    const [ref, visible] = useInView()

    return (
        <section id="commitment" className="py-20 lg:py-28 bg-muted/40">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative">
                        <div className="rounded-2xl overflow-hidden shadow-elegant">
                            <img
                                src="/images/partnership.jpeg"
                                alt="Business handshake symbolizing partnership and commitment"
                                className="w-full h-[380px] lg:h-[440px] object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <div className="section-accent mb-4" />
                        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-3">
                            Our Commitment
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            We are more than a manpower supplier. We are your strategic workforce partner. We specialize in high-performance recruitment and hold ourselves to the ethical and compliance standards required by Qatar's industrial sector.
                        </p>

                        <div className="space-y-4">
                            {commitments.map((c) => {
                                const Icon = c.icon
                                return (
                                    <div key={c.title} className="flex gap-4 group">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                                            <Icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-semibold text-foreground mb-0.5">{c.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{c.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
