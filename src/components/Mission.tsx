import { useInView } from '../hooks/useInView'
import { Rocket, Shield, Brain, Handshake, Award, CheckSquare } from 'lucide-react'

const missions = [
    {
        icon: Rocket,
        title: 'Empower Industries',
        text: 'Deliver customized, efficient, and sustainable solutions that strengthen operations, optimize costs, and accelerate growth for operators and contractors.',
    },
    {
        icon: Shield,
        title: 'Prioritize Safety',
        text: 'Maintain an uncompromising HSE commitment across every site, every shift, and every scope of work, protecting our workforce, clients, and communities.',
    },
    {
        icon: Brain,
        title: 'Champion Expertise',
        text: 'Attract, develop, and retain skilled professionals while fostering a culture of continuous learning, certification, and performance excellence.',
    },
    {
        icon: Rocket,
        title: 'Drive Innovation',
        text: 'Leverage advanced tools, systems, and methodologies to improve efficiency, reduce environmental impact, and deliver superior project outcomes.',
    },
    {
        icon: Handshake,
        title: 'Foster Client Success',
        text: 'Adopt a client-first approach built on collaboration, responsiveness, and long-term partnerships that create measurable value.',
    },
    {
        icon: CheckSquare,
        title: 'Quality Assurance',
        text: 'Embed quality across all processes through rigorous controls, audits, and consistent performance standards aligned with international codes.',
    },
]

export default function Mission() {
    const [ref, visible] = useInView()

    return (
        <section className="py-20 lg:py-28 bg-secondary relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="section-accent mx-auto mb-4" />
                    <h2 className="font-heading font-bold text-3xl lg:text-4xl text-secondary-foreground mb-4">
                        Our Mission
                    </h2>
                    <p className="text-secondary-foreground/60 leading-relaxed">
                        We exist to deliver exceptional industrial support, contracting solutions, skilled manpower, and equipment services, empowering the industries that drive Qatar's economy.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {missions.map((m, i) => {
                        const Icon = m.icon
                        return (
                            <div
                                key={m.title}
                                className="bg-secondary-foreground/5 backdrop-blur-sm border border-secondary-foreground/10 rounded-2xl p-6 hover:bg-secondary-foreground/8 transition-all duration-300 group"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                                    <Icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="font-heading font-semibold text-secondary-foreground text-lg mb-2">{m.title}</h3>
                                <p className="text-secondary-foreground/55 text-sm leading-relaxed">{m.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
