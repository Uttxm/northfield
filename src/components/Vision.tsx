import { useInView } from '../hooks/useInView'
import { Target, Compass, Zap } from 'lucide-react'

export default function Vision() {
    const [ref, visible] = useInView()

    return (
        <section id="vision" className="py-20 lg:py-28 bg-background">
            <div ref={ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                        <div className="section-accent mb-4" />
                        <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-6">
                            Our Vision
                        </h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Vision Statement</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        To become a trusted leader in delivering comprehensive industrial and support solutions, establishing new benchmarks in quality, innovation, and client satisfaction across the oil & gas, energy, and infrastructure sectors we serve.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                                    <Compass className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Redefining Industry Standards</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Our vision extends beyond operational excellence. It is about raising the bar for service delivery in Qatar's industrial landscape. We are building a legacy of reliable, efficient, and value-driven solutions that help our clients stay ahead.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1">Innovation as a Cornerstone</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        We integrate modern practices, technologies, and systems that improve efficiency, reduce HSE risk, and help our clients remain competitive in a rapidly evolving energy market.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="rounded-2xl overflow-hidden shadow-elegant">
                            <img
                                src="/images/vision.jpeg"
                                alt="Industrial project supervision and site management in Qatar"
                                className="w-full h-[400px] lg:h-[480px] object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute -top-4 -left-4 w-20 h-20 rounded-xl bg-primary/10 -z-10" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-accent/10 -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
